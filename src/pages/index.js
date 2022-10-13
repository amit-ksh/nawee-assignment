import ComplainForm from "../components/ComplainForm";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <div>
      <Header />
      <MainLayout>
        <ComplainForm />
      </MainLayout>
    </div>
  );
}
