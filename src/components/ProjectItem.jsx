import React from 'react';

function ProjectItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="border-2 bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="project"
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="w-full p-5 text-white dark:text-white">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-warp gap-2 items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 text-white bg-black dark:bg-black rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default ProjectItem;
