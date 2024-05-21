function showContent (content) {
  let dynamicContent = document.getElementById ('content');
  let active = document.getElementById ('ul-active');
  // Update the content based on the option clicked
  switch (content) {
    case 'Option 1':
      dynamicContent.innerHTML = `<h1>We Ensure that our Solar Solutions are Well Worth the Money</h1>
                                    <p>Empowering Pakistan with Sustainable Solutions: Photon Electronics 
                                    stands as a leading solar provider since its inception in [year]. Our PEC, 
                                    AEDB C-1, and ISO certifications reflect our dedication. With tailored solar
                                     systems for all needs, including domestic, commercial, industrial, and 
                                     agricultural sectors, we ensure every client's satisfaction. Our team comprises 
                                     highly educated, experienced professionals committed to excellence. Partnered with 
                                     all major banks, we offer convenient financing options under the State Bank of 
                                     Pakistan's program. What truly sets us apart is our unique 0% markup monthly 
                                     installment plan, making solar energy accessible to all.</p>
        `;
      active.innerHTML = `
        <li onclick="showContent('Option 1')" id="active1">Who We Are ?</li>
        <li onclick="showContent('Option 2')">What We Do ?</li>
        <li onclick="showContent('Option 3')">Why Photon Electronics ?</li>
        <li onclick="showContent('Option 4')">Our Values</li>
        `;
      break;
    case 'Option 2':
      dynamicContent.innerText = 'This is the content for Option 2.';
      active.innerHTML = `
        <li onclick="showContent('Option 1')">Who We Are ?</li>
        <li onclick="showContent('Option 2')" id="active1">What We Do ?</li>
        <li onclick="showContent('Option 3')">Why Photon Electronics ?</li>
        <li onclick="showContent('Option 4')">Our Values</li>
        `;
      break;
    case 'Option 3':
      dynamicContent.innerHTML = `<strong>Expertise:</ strong><p style="font-weight:400;">Our team has extensive experience in solar panel installation and maintenance.</p><br>
        <strong>Quality Products:</ strong> <p style="font-weight:400;">We only use top-grade solar panels and equipment.</p><br>
        <strong>Competitive Pricing:</ strong><p style="font-weight:400;">We offer affordable solutions without compromising on quality.</p><br>
        <strong>Customer Service:</strong><p style="font-weight:400;"> Our dedicated team is always available to support you.</p><br>`;
      active.innerHTML = `
        <li onclick="showContent('Option 1')">Who We Are ?</li>
        <li onclick="showContent('Option 2')">What We Do ?</li>
        <li onclick="showContent('Option 3')" id="active1">Why Photon Electronics ?</li>
        <li onclick="showContent('Option 4')">Our Values</li>
        `;
      break;
    case 'Option 4':
      dynamicContent.innerHTML = `<strong>Innovation: </ strong><p style="font-weight:400;">We stay at the forefront of solar technology, ensuring our customers receive the latest and greatest solutions.</p><br>
        <strong>Sustainability:</ strong> <p style="font-weight:400;">We're committed to reducing our environmental impact and promoting eco-friendly practices.</p><br>
        <strong>Excellence:</ strong><p style="font-weight:400;">We strive for exceptional quality and service in everything we do.</p><br>
        <strong>Community: </strong><p style="font-weight:400;">We're dedicated to supporting our local community and promoting solar energy adoption.</p><br>`;
      active.innerHTML = `
        <li onclick="showContent('Option 1')">Who We Are ?</li>
        <li onclick="showContent('Option 2')">What We Do ?</li>
        <li onclick="showContent('Option 3')">Why Photon Electronics ?</li>
        <li onclick="showContent('Option 4')" id="active1">Our Values</li>
        `;
      break;
    default:
      dynamicContent.innerHTML = `<h1>We Ensure that our Solar Solutions are Well Worth the Money</h1>
        <p>Empowering Pakistan with Sustainable Solutions: Photon Electronics 
        stands as a leading solar provider since its inception in [year]. Our PEC, 
        AEDB C-1, and ISO certifications reflect our dedication. With tailored solar
         systems for all needs, including domestic, commercial, industrial, and 
         agricultural sectors, we ensure every client's satisfaction. Our team comprises 
         highly educated, experienced professionals committed to excellence. Partnered with 
         all major banks, we offer convenient financing options under the State Bank of 
         Pakistan's program. What truly sets us apart is our unique 0% markup monthly 
         installment plan, making solar energy accessible to all.</p>
`;
      active.innerHTML = `
        <li onclick="showContent('Option 1')" id="active1">Who We Are ?</li>
        <li onclick="showContent('Option 2')">What We Do ?</li>
        <li onclick="showContent('Option 3')">Why Photon Electronics ?</li>
        <li onclick="showContent('Option 4')">Our Values</li>
`;
  }
}
