import "./CodeRepo.css";

const CodeRepo = () => {
  return (
    <>
      <div className="repo">
        <div className="file-manager">
          <div className="folder">
            <img src="logo/folder.png" /> FOLDER
          </div>

          <div className="folder-content">
            <div className="file">
                <img src="logo/file.png" /> File
            </div>
            
            <div className="file">
                <img src="logo/file.png" /> File
            </div>
            
            <div className="file">
                <img src="logo/file.png" /> File
            </div>
          </div>
        </div>
        <div className="code">CODE</div>
      </div>
    </>
  );
};

export default CodeRepo;
