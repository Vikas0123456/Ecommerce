import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  // MDBCol,
  // MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
    <div style={{marginBottom: '10px'}}>
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'style={{ height: '150px', position: 'relative' }}>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com' role='button'>
            <MDBIcon fab className='fa fa-facebook' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.twitter.com' role='button'>
            <MDBIcon fab className='fa fa-twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com' role='button'>
            <MDBIcon fab className='fa fa-google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/accounts/login/' role='button'>
            <MDBIcon fab className='fa fa-instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com' role='button'>
            <MDBIcon fab className='fa fa-linkedin' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.github.com' role='button'>
            <MDBIcon fab className='fa fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height: '70px', textAlign: 'center' }}>
        © 2020 Copyright :
        <a className='text-white' href='https://ecommerce.com/'>
         Ecommerce.com
        </a>
      </div>
    </MDBFooter>
    </div>
    </>
  );
}


///////////////////////////
///////////////////////////



// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function Footer() {
//   return (
//     <MDBFooter className='text-center' color='white' bgColor='dark'>
//       <MDBContainer className='p-4'>
//         <section className='mb-4'>
//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='facebook-f' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='twitter' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='google' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='instagram' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='linkedin-in' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='github' />
//           </MDBBtn>
//         </section>

//         <section className=''>
//           <form action=''>
//             <MDBRow className='d-flex justify-content-center'>
//               <MDBCol size="auto">
//                 <p className='pt-2'>
//                   <strong>Sign up for our newsletter</strong>
//                 </p>
//               </MDBCol>

//               <MDBCol md='5' start='12'>
//                 <MDBInput contrast type='email' label='Email address' className='mb-4' />
//               </MDBCol>

//               <MDBCol size="auto">
//                 <MDBBtn outline color='light' type='submit' className='mb-4'>
//                   Subscribe
//                 </MDBBtn>
//               </MDBCol>
//             </MDBRow>
//           </form>
//         </section>

//         <section className='mb-4'>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
//             voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
//             sequi voluptate quas.
//           </p>
//         </section>

//         <section className=''>
//           <MDBRow>
//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>
//           </MDBRow>
//         </section>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright:
//         <a className='text-white' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

//////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBFooter className='text-center text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//       <MDBContainer className='pt-4'>
//         <section className='mb-4'>
//           <MDBBtn
//             rippleColor="dark"
//             link
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa fa-facebook-f' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             link
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa fa-twitter' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             link
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa fa-google' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             link
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa fa-instagram' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             link
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa fa-linkedin' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             link
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa fa-github' />
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//         © 2020 Copyright:
//         <a className='text-dark' href='https://ecommerce.com/'>
//         <b>
//         ecommerce.com
//         </b>
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

////////////////////////////////
///////////////////////////////
///////////////////////////////


