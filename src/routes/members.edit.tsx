import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ProfileForm } from "@/components/profile-form";
import "@/styles/profiles.css";

export const Route = createFileRoute("/members/edit")({ component: MemberEditPage });

function MemberEditPage() {
  return (
    <article className="pb-24">
      <PageHero
        kicker="The Circle"
        title="Your card"
        lede="A name, a photograph, and a little about yourself. Sisters use this to put a face to the float."
      />
      <div className="wrap-narrow mt-10">
        <div className="panel p-6 md:p-8">
          <ProfileForm />
        </div>
      </div>
    </article>
  );
}
