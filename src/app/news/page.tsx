import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function News() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col bg-[url('/background.png')] bg-center bg-no-repeat h-52">
        <Header />

        <h1 className="text-5xl font-black m-auto w-max">CLIENT NEWS</h1>
      </div>

      <div className="py-8 px-5 w-full">
        TODO: implement search and filtering
      </div>

      <div className="py-8 px-5 w-full">TODO: implement thumbnail</div>

      <Footer />
    </div>
  );
}
