import ClientLayout from "./clientLayout";

export const metadata = {
    title: "Revive Fitness",
    description: "Revive Fitness Management System",
};

export default function DashboardLayout({ children }) {
    return (
        <ClientLayout>
            {children}
        </ClientLayout>
    );
}
