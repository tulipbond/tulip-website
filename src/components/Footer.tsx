import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-500 text-white w-full max-w-[100rem] mx-auto ">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Info */}
          <div className="flex flex-col">
            <h2 className=" text-lg font-semibold mb-2">Contact Us</h2>
            <p>PWL 1/84, F-237, S.I.T.E</p>
            <p>Karachi City</p>
            <p>Postal: 75700</p>
            <p>Email: tulipbond1984@gmail.com</p>
            <p>NTN & STN: 0712486-4</p>
          </div>
          <div className="flex flex-col">
            <h2 className=" text-lg font-semibold mb-2">Office Telephone</h2>
            <p>Tel: 32570409 , 32562367</p>
            <p>Phone: +92 331 26159 50</p>
            <p>Fax: 92-21-32562366</p>
            
           
          </div>
          <div className="flex flex-col">
            <h2 className=" text-lg font-bold mb-2">Our Partners</h2>
            <Link href="https://maps.app.goo.gl/8ALkhriZuCCmWNzn6"><h1 className=" text-lg font-semibold underline">Ibrahim International</h1></Link> 
            <p>Address: F-24-A S.I.T.E, Karachi. 75700</p>
            <p>Email: ibrahiminternational2006@gmail.com</p>
            <p>Tel: 32593117 | Cell: 0331-2615949</p>
           <Link href="https://maps.app.goo.gl/aeMNQuW4Xg2Jkw5x8"><h1 className=" text-lg font-semibold underline">Ajmal International</h1></Link>
            <p>Address: F-31 S.I.T.E, Karachi. 75700</p>
            <p>Email: ajmalinternational2008@gmail.com</p>
            <p>Tel: 32593920 | Cell: 0331-2615946</p>

            
          </div>
          <div className="flex flex-col">
      
            <Link href="/"><Image src="/logoFinal.png" width={100}
            height={100} alt="Tulip" className="bg-white rounded-md"/></Link> 
           
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-8 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Warehouse & Bond. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
