"use client";
import { Button } from "@repo/ui/button";
import axios from "axios";
import { PlusCircle, Share2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import AddContent from "./add-content";
import { ShareBrainModal } from "./share-brain";

interface CountStatsProps {
  total: number;
  public: number;
  private: number;
}

export default function DashboardHeader() {
  const { data: session } = useSession();
  const [isAddModalOpen, setAddIsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [greetings, setGreetings] = useState<string>("");
  const [stats, setStats] = useState<CountStatsProps>({
    total: 0,
    public: 0,
    private: 0,
  });

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreetings("Good morning");
    else if (hours < 18) setGreetings("Good afternoon");
    else if (hours < 21) setGreetings("Good evening");
    else setGreetings("It's getting late!");
  }, []);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get("api/v1/count-contents");
        if (response.data.stats) {
          setStats(response.data.stats);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="mb-6 flex flex-col items-start justify-around gap-4 md:flex-row md:items-center md:gap-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-text font-montserrat text-2xl font-bold tracking-wider md:ml-24 md:text-4xl">
            {greetings}, {session?.user.username}
          </h1>
          <p className="text-accent mt-2 md:ml-24 md:text-base">
            Let&apos;s make this day productive.
          </p>
        </div>
        <Image
          src="/dashboard-profile.jpg"
          alt="avatar"
          width={40}
          height={40}
          className="h-20 w-20 rounded-full md:hidden"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center md:gap-12">
        <div className="flex w-full justify-between gap-4 sm:w-auto sm:justify-start md:gap-12">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="text-right">
              <h1 className="text-text font-mono text-2xl font-semibold md:text-4xl">
                {value}
              </h1>
              <h3 className="text-accent font-semibold md:text-lg">
                {key.charAt(0).toUpperCase() + key.slice(1)} Contents
              </h3>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-end gap-4 sm:w-auto">
          <Button
            variant="secondary"
            size="md"
            text="Share Brain"
            icon={<Share2 className="h-5 w-5" />}
            onClick={() => setIsShareModalOpen(true)}
            className="text-base hover:scale-105 md:py-4 md:text-lg"
          />
          <Button
            variant="primary"
            size="md"
            text="Add Task"
            icon={<PlusCircle className="h-5 w-5" />}
            onClick={() => setAddIsModalOpen(true)}
            className="text-base hover:scale-105 md:py-4 md:text-lg"
          />
          <Image
            src="/dashboard-profile.jpg"
            alt="avatar"
            width={40}
            height={40}
            className="hidden h-16 w-16 rounded-full md:block"
          />
        </div>
      </div>

      {isAddModalOpen && <AddContent setIsModalOpen={setAddIsModalOpen} />}

      {isShareModalOpen && (
        <ShareBrainModal setIsModalOpen={setIsShareModalOpen} />
      )}
    </div>
  );
}
