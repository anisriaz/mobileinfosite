import Navbar from "../components/Navbar"
function Contact() {
  return (
    <>    <Navbar />
   
<div className="mt-40 text-center mb-10 ml-4 " >Feel free to Contact us</div> 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.6783962120371!2d74.13601779919739!3d33.
               090318999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
               1!3m3!1m2!1s0x391fb5ce12c0507f%3A0xeb5dd7ce1396a3c!2sSamahni!5e0!3m2!1sen!2s!4v1681883975254!5m2!1sen!2s"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe> 
    <div class="Email-form flex justify-center items-center h-screen">
  <form class="Contact-form bg-gray-100 p-8 rounded-lg" action="" method="POST">
  <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="username">
        Username
      </label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Username" name="username" required
        autocomplete="off" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="email">
        Email
      </label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email" type="email" placeholder="Email" name="email" required
        autocomplete="off" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="message">
        Message
      </label>
      <textarea
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="message" name="message" cols="30" rows="10" autocomplete="off"
        placeholder="Enter your message"></textarea>
    </div>
    <div>
      <input
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit" value="Send" />
    </div>
  </form>
</div>


    </>
  );
}

export default Contact;