import React from 'react';
import "./TopBar.css";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';




export default function TopBar() {

  return (
    <div className="header-section p-2 mb-3 d-flex align-items-center">
      <div className="title-section d-flex align-items-center">
      <DragIndicatorIcon style={{ color: "white" }}/>
      <div className="title mx-2">Trello Clone</div>
      </div>
      <div className="workspace-section ">
          <div className="dropdown">
          <button className="btn dropdown-toggle work-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Workspace
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="dropdown-item text-center">Workspace</li>
          <li><hr className="dropdown-divider"/></li>
          <li className="dropdown-item">Syed's Workspace</li>
          </ul>
        </div>
      </div>
      <div className="recent-section ">
          <div className="dropdown">
          <button className="btn dropdown-toggle work-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Recents
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="dropdown-item text-center">Recent boards</li>
          <li><hr className="dropdown-divider"/></li>
          <li className="dropdown-item d-flex align-items-center">
            <div className="block"></div>
            <div className="recent-item mx-2">
              <div className="recent-items-title">Title</div>
              <div className="recent-items-descripton">Syed's workspace</div>
            </div>
          </li>
          </ul>
        </div>
      </div>
      <div className="starred-section ">
          <div className="dropdown">
          <button className="btn dropdown-toggle work-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Starred
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="dropdown-item text-center">Recent boards</li>
          <li><hr className="dropdown-divider"/></li>
          <li className="dropdown-item">
              <div className="recent-items-descripton">Star important boards to access them quickly and easily</div>
          </li>
          </ul>
        </div>
      </div>
      
    
     
    </div>
  );
}