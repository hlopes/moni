import Link from 'next/link'
import Image from 'next/image'

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Chats
      </h4>

      <div>
        <Link
          href="/"
          className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src="/images/user/user-03.png"
              alt="User"
              width="56"
              height="56"
            />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black dark:text-white">
                Devid Heilo
              </h5>
              <p>
                <span className="text-sm text-black dark:text-white">
                  Hello, how are you?
                </span>
                <span className="text-xs"> . 12 min</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-white">3</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src="/images/user/user-04.png"
              alt="User"
              width="56"
              height="56"
            />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Henry Fisher</h5>
              <p>
                <span className="text-sm">I am waiting for you</span>
                <span className="text-xs"> . 5:54 PM</span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src="/images/user/user-05.png"
              alt="User"
              width="56"
              height="56"
            />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Wilium Smith</h5>
              <p>
                <span className="text-sm">Where are you now?</span>
                <span className="text-xs"> . 10:12 PM</span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src="/images/user/user-01.png"
              alt="User"
              width="56"
              height="56"
            />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black dark:text-white">
                Henry Deco
              </h5>
              <p>
                <span className="text-sm text-black dark:text-white">
                  Thank you so much!
                </span>
                <span className="text-xs"> . Sun</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-white">2</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src="/images/user/user-02.png"
              alt="User"
              width="56"
              height="56"
            />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-7"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Jubin Jack</h5>
              <p>
                <span className="text-sm">I really love that!</span>
                <span className="text-xs"> . Oct 23</span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src="/images/user/user-05.png"
              alt="User"
              width="56"
              height="56"
            />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Wilium Smith</h5>
              <p>
                <span className="text-sm">Where are you now?</span>
                <span className="text-xs"> . Sep 20</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ChatCard
