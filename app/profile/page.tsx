"use client";

import UserForm from "@/components/layout/UserForm";
import UserTabs from "@/components/layout/UserTabs";
import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const session = useSession();

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      axios
        .get("/api/profile")
        .then((response) => {
          setUser(response.data);
          setIsAdmin(response.data.isAdmin);
          setProfileFetched(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(
    e: FormEvent<HTMLFormElement>,
    data: any
  ) {
    e.preventDefault();

    const savingPromise = new Promise(async (resolve: any, reject) => {
      const response = await axios.post("/api/profile", data);
      if (response.status === 200) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile saved!",
      error: "Error",
    });
  }

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data?.user?.image;

  return (
    <section className="mt-8">
      <UserTabs isAdmin={isAdmin} />
      <div className="max-w-2xl mx-auto mt-8">
        <UserForm user={user} onSave={handleProfileInfoUpdate} />
      </div>
    </section>
  );
};

export default ProfilePage;
