export default function Footer() {
  return (
    <div className="text-white py-10 w-full">
      <div className="container mx-auto px-4">
        <ul className="flex w-full justify-evenly">
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 text-green-secondary">Contact</a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 text-green-secondary">Pricing</a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 text-green-secondary">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 text-green-secondary">Schedule Service</a>
          </li>
        </ul>
      </div>
      <p className="text-center mt-4 text-green-secondary">&copy; 2025 AirSecure - <i>All rights reserved.</i></p>
    </div>
  );
}
