import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ProfileForm } from "@/components/profile-form";
import "@/styles/profiles.css";

export const Route = createFileRoute("/members/edit")({ component: MemberEditPage });

function MemberEditPage() {
  return (
    <article className="pb-24">
      <PageHero
        kicker="Comp cards"
        title="Your card"
        lede="Photograph, name, and a few lines. The same thing you would hand across a table before the reading starts."
      />
      <div className="wrap-narrow mt-10">
        <div className="panel p-6 md:p-8">
          <ProfileForm />
        </div>
      </div>
    </article>
  );
}
