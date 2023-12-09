import Head from "next/head";
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from "anon-aadhaar-react";
import { useEffect, useState } from "react";

export default function Home() {
  // Use the Country Identity hook to get the status of the user.
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar: ", anonAadhaar.status);
  }, [anonAadhaar]);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#091620] px-4 py-8 pt-[150px]">
      <div className="pr-12 py-[13px] left-[136px] top-[16px] absolute justify-start items-center inline-flex">
            <img src="/images/logo.png" alt="JuryDAO Logo" className="h-10 w-auto" />

            <div className="text-white text-2xl font-bold font-['Martel'] leading-loose pl-2 "> JuryDAO </div>
      </div>
      <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
      </div>
      <div className="pr-12 py-[13px]  justify-items-end top-[30px] absolute right-[136px] inline-flex">
          <div className={`hidden lg:flex space-x-4 ml-auto  ${isMenuOpen ? 'flex-col' : 'flex'}`}>
            <a href="#" className="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Home</a>
            <a href="#" className="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">About</a>
            <a href="#" className="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Contact</a>
          </div>
        </div>
    
        {/* Navigation menu for smaller screens */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 right-0 left-0 bg-white p-4">
            <a href="#" className="block text-black">Home</a>
            <a href="#" className="block text-black">About</a>
            <a href="#" className="block text-black">Contact</a>
          </div>
        )}

      <main className="flex flex-col pt-612items-center gap-8 text-white bg-[#0C1013] rounded-2xl max-w-screen-sm mx-auto h-[24rem] md:h-[20rem] p-8">
        <h1 className="font-bold text-2xl">Verify yourself with Anon Aadhaar</h1>
        <p>Prove your Identity anonymously using your Aadhaar card.</p>

        {/* Import the Connect Button component */}
        <LogInWithAnonAadhaar />
      </main>
      <div className="flex flex-col items-center gap-4 rounded-2xl max-w-screen-sm mx-auto p-8">
        {/* Render the proof if generated and valid */}
        {anonAadhaar?.status === "logged-in" && (
          <>
            <p className="text-white">✅ Proof is valid</p>
            <p className="text-white">Got your Aadhaar Identity Proof</p>
            
            <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
            <div className="w-[103px] h-7  text-center text-sm font-semibold font-['Open Sans'] leading-normal pt-[3px] tracking-tight bg-[#D0A144] rounded-[37px]">Join Channel</div>
          </>
        )}
      </div>
    </div>
  );
}
