// import React from 'react'

// export default function Footer() {
//   return (
//     <footer className="footer bg-base-200 text-base-content p-10 ">
//   <nav>
//     <h6 className="footer-title">Services</h6>
//     <a className="link link-hover">Branding</a>
//     <a className="link link-hover">Design</a>
//     <a className="link link-hover">Marketing</a>
//     <a className="link link-hover">Advertisement</a>
//   </nav>
//   <nav>
//     <h6 className="footer-title">Company</h6>
//     <a className="link link-hover">About us</a>
//     <a className="link link-hover">Contact</a>
//     <a className="link link-hover">Jobs</a>
//     <a className="link link-hover">Press kit</a>
//   </nav>
//   <nav>
//     <h6 className="footer-title">Legal</h6>
//     <a className="link link-hover">Terms of use</a>
//     <a className="link link-hover">Privacy policy</a>
//     <a className="link link-hover">Cookie policy</a>
//   </nav>
//   <form>
//     <h6 className="footer-title">Newsletter</h6>
//     <fieldset className="form-control w-80">
//       <label className="label">
//         <span className="label-text">Enter your email address</span>
//       </label>
//       <div className="join">
//         <input
//           type="text"
//           placeholder="username@site.com"
//           className="input input-bordered join-item" />
//         <button className="btn btn-primary join-item">Subscribe</button>
//       </div>
//     </fieldset>
//   </form>
// </footer>
//   )
// }
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <nav>
          <h6 className="footer-title text-lg font-semibold">Services</h6>
          <a className="link link-hover block mt-2">Branding</a>
          <a className="link link-hover block">Design</a>
          <a className="link link-hover block">Marketing</a>
          <a className="link link-hover block">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold">Company</h6>
          <a className="link link-hover block mt-2">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Jobs</a>
          <a className="link link-hover block">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold">Legal</h6>
          <a className="link link-hover block mt-2">Terms of use</a>
          <a className="link link-hover block">Privacy policy</a>
          <a className="link link-hover block">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title text-lg font-semibold">Newsletter</h6>
          <fieldset className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join w-full">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-3/4"
              />
              <button className="btn btn-primary join-item w-1/4">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="text-center py-4 mt-10 border-t border-gray-300">
        <p>© 2024 Crowdfunding. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
