"use client";
import { Button } from "@repo/ui/button";
import type { AxiosResponse } from "axios";
import axios from "axios";
import { PlusCircle, Share2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useToast } from "../../hooks/use-toast";
import AddContent from "./add-content";
import { ShareBrainModal } from "./share-brain";

interface CountStatsProps {
  total: number;
  public: number;
  private: number;
}

export default function DashboardHeader(): React.JSX.Element {
  const { data: session } = useSession();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [greetings, setGreetings] = useState<string>("");
  const { showToast, ToastContainer } = useToast();
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
    const fetchCount = async (): Promise<void> => {
      try {
        const response: AxiosResponse<{ stats: CountStatsProps }> =
          await axios.get("api/v1/count-contents");

        setStats(response.data.stats);
      } catch (error) {
        showToast("Error fetching stats", "error");
      }
    };

    void fetchCount();
  }, [showToast]);

  return (
    <div className="mb-6 flex flex-col items-start justify-around gap-4 md:flex-row md:items-center md:gap-8">
      <ToastContainer />
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
          alt="avatar"
          className="h-20 w-20 rounded-full md:hidden"
          height={40}
          src="/dashboard-profile.jpg"
          width={40}
        />
      </div>

      <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center md:gap-12">
        <div className="flex w-full justify-between gap-4 sm:w-auto sm:justify-start md:gap-12">
          {Object.entries(stats).map(([key, value]) => (
            <div className="text-right" key={key}>
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
            className="text-base hover:scale-105 md:py-4 md:text-lg"
            icon={<Share2 className="h-5 w-5" />}
            onClick={() => {
              setIsShareModalOpen(true);
            }}
            size="md"
            text="Share Brain"
            variant="secondary"
          />
          <Button
            className="text-base hover:scale-105 md:py-4 md:text-lg"
            icon={<PlusCircle className="h-5 w-5" />}
            onClick={() => {
              setIsAddModalOpen(true);
            }}
            size="md"
            text="Add Task"
            variant="primary"
          />
          <Image
            alt="avatar"
            className="hidden h-16 w-16 rounded-full md:block"
            height={40}
            src="/dashboard-profile.jpg"
            width={40}
          />
        </div>
      </div>

      {isAddModalOpen ? (
        <AddContent setIsModalOpen={setIsAddModalOpen} />
      ) : null}

      {isShareModalOpen ? (
        <ShareBrainModal setIsModalOpen={setIsShareModalOpen} />
      ) : null}
    </div>
  );
}
