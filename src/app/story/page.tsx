import { Story } from "@/components/site";

export const metadata = {
  title: "Story",
  description:
    "A personal timeline from Chennai to Melbourne and beyond, and the experiences shaping how I build systems today.",
};

export default function StoryPage() {
  return (
    <div className="pt-24 sm:pt-32 lg:pt-36">
      <Story />
    </div>
  );
}
