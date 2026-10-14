import { redirect } from "next/navigation";
import { InquiryAdmin } from "@/components/admin/InquiryAdmin";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const metadata = {
  title: "Admin Inquiries",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return <InquiryAdmin />;
}
