export default function GitTree() {
  const nodes = [
    {
      branch: 'main',
      text: 'Ingresso Isep',
    },
    {
      branch: 'main',
      text: 'Ingresso Isep',
    },
    {
      branch: 'Concurso',
      text: 'Design logo',
    },
    {
      branch: 'main',
      text: 'Ingresso Isep',
    },
    {
      branch: 'main',
      text: 'Ingresso Isep',
    },
    {
      branch: 'lingua',
      text: 'Curso de alemao',
    },
    {
      branch: 'main',
      text: 'Ingresso Isep',
    },
  ];

  return (
    <div>
      {nodes.map(({ branch, text }, index) => {
        var next = true;
        if (index >= nodes.length - 1) next = false;
        if (branch === 'main') {
          return (
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <figure className="block h-4 w-4 rounded-full bg-white"></figure>
                {next && (
                  <div className="h-20  border-l-4 border-l-white"></div>
                )}
              </div>
              <div className="px-20">{text}</div>
            </div>
          );
        } else {
          return (
            <div className="flex items-start pl-8">
              <div className="flex flex-col items-center">
                <figure className="block h-4 w-4 rounded-full bg-white"></figure>
                {next && (
                  <div className="flex flex-row">
                    <div className="h-20  border-l-4 border-l-white"></div>
                  </div>
                )}
              </div>
              <div className="px-12">{text}</div>
            </div>
          );
        }
      })}
    </div>
  );
}
