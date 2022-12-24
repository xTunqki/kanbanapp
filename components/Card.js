
export default function Card(props) {
  const color = [
    { red: ["border-red-300", "text-red-400", "bg-red-100/20"] },
    { teal: ["border-teal-300", "text-teal-400", "bg-teal-100/20"] },
    { yellow: ["border-yellow-300", "text-yellow-400", "bg-yellow-100/20"] },
    {
      emerald: ["border-emerald-300", "text-emerald-300", "bg-emerald-100/20"],
    },
  ];

  function showModal(){
    alert("hello World" )
  }

  return (
    <div class="flex flex-wrap justify-around mt-4">
      <div
        className={`bg-${props.color}-100/20 shadow p-4 m-2 border-2 rounded border-${props.color}-300 max-w-xs`}
      >
        <div className={`border-2 border-${props.color}-300 rounded w-fit`}>
          <h3
            className={`text-[12px] px-2 font-medium text-${props.color}-400`}
          >
            {props.groupname}
          </h3>
        </div>
        <div className="text-gray-700 font-bold text-xs pt-2">{props.date}</div>

        {props.tasklist.map((task, key) => {
          return (
            <div class="border-2 border-gray-300 rounded mt-3 px-4 bg-white" key="key">
              <h3 className="text-sm font-medium pt-2 border-dashed border-b-2 border-gray-200 pb-2">
                {task.name}
              </h3>
              <div class="flex justify-between">
                {task.progress == 100 ? (
                  <>
                    <div className="relative rounded-full h-4 w-44 bg-gray-200 my-3">
                      <div
                        className="bg-green-600 rounded-full h-4 w-full"
                        style={{
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="h-4 w-4 pt-3 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="fill-green-600"
                      >
                        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative rounded-full h-4 w-44 bg-gray-200 my-3">
                      <div
                        className="bg-teal-600 rounded-l-full h-4 w-full"
                        style={{
                          width: task.progress ? task.progress + "%" : "0%",
                        }}
                      />
                    </div>
                    <h4 className="text-xs my-3 mx-2 mr-4">
                      {task.progress + '%'}
                    </h4>
                  </>
                )}
                <div className="h-5 w-5 pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="fill-gray-400"
                  >
                    <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}

        <div className="text-[13px] mt-3 flex cursor-pointer w-fit" onClick={showModal}>
          <div className="h-5 w-5">
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                fill-rule="nonzero"
              />
            </svg>{" "}
          </div>
          <h1 className="pl-1 font-medium">New Task</h1>
        </div>
      </div>
    </div>
  );
}
