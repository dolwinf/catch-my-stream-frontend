function Disclaimer() {
  return (
    <div className="flex-grow bg-slate-900 font-montserrat text-purple-100 p-10 pt-52">
      <div className="sticky overflow-y-auto h-4/5 custom-scrollbar">
        <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
        <h2 className="text-xl font-semibold mb-4">
          Please Read Carefully Before Using Our Service
        </h2>
        <p className="mb-4">
          This website provides a service that allows users to download videos from
          YouTube, Facebook, and Instagram. We emphasize the importance of adhering to the
          copyright laws of each respective platform. By using this service, you agree to
          the following terms and conditions:
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">
            Educational and Research Purposes Only:
          </h3>
          <p>
            This service is intended solely for educational and research purposes.
            Downloaded content should not be used for commercial purposes or distributed
            without the appropriate permissions.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Respect Copyright Laws:</h3>
          <p>
            Users must respect the copyright policies of YouTube, Facebook, and Instagram.
            It is the user's responsibility to ensure that their use of downloaded content
            complies with these policies.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <a
                href="https://www.youtube.com/static?template=terms"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube Copyright Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/help/1020633957973118"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Copyright Policy
              </a>
            </li>
            <li>
              <a
                href="https://help.instagram.com/126382350847838"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram Copyright Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">User Responsibility:</h3>
          <p>
            Users are solely responsible for any legal issues or consequences resulting
            from the use of this service. We do not endorse or condone the illegal
            downloading or sharing of copyrighted content.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">No Liability:</h3>
          <p>
            We are not liable for any misuse of the downloaded content. Users should be
            aware that unauthorized downloading and distribution of copyrighted material
            is against the law and may result in legal action.
          </p>
        </div>
        <p>
          By proceeding to use this service, you acknowledge and agree to comply with
          these terms. Failure to adhere to these guidelines may result in the termination
          of access to our services.
        </p>
      </div>
    </div>
  );
}

export default Disclaimer;
