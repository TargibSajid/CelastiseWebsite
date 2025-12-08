import React, { useEffect } from 'react';

function Footer() {
    return (
            <footer class="w-full bg-[rgb(225,129,84)] text-white  bottom-0">
  <div class="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
    
    
    <p class="text-sm sm:text-base mb-2 sm:mb-0">
      © All Rights Reserved
    </p>
    
    
    <div class="flex items-center space-x-2 text-sm sm:text-base">
      <span>Powered by</span>
      <img src="/Background/Logo.svg" alt="Ancestral Logo" class="h-6 w-auto"/>
      <span class = "text-black">Ancestral</span>
    </div>

  </div>
</footer>

        );
    }

export default Footer;
