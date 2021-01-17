import React from "react";

export const TwitterIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 17" width="30" height="30">
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="M-185 -636L775 -636L775 421L-185 421Z"/>
      </clipPath>
      <image width="22" height="17" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAYAAADZsVyDAAAB40lEQVQ4T52UPWgUURSFz5kZMGQnKoggiIiFP5jGaKdNbC0kCju7EUFtFETBZgULUUllJRYJdorNMomgIFgY/IGIIIiIEEUrG4VtM7OK7L45OrM/7sTMrjvTvbn3fve8w72PGPJzqsGkLGsG0O5WKT8ziq42p8de2n79CKSiKbtnGIeSH9BpU3K9vn3mg722uJyR8w3AVks80CgX3rXBwR2A5wAsGIOLOOHW/im+qxGrUH9LYTy7Oc8CmjJUpaN4FtD5uEDEBytCpVl2n6YAD1b22Mb61O9GIpYjyIM39jEBt3zji1QRsUTpOclHDc99v2bOqi6MdDj2OnG+E3P88KaAy1mKCHwRsKufYkONx2q7YNsPFwF8B7QR4NEhB6Wbbhq/NuDkppUu2PGD6wKv5QW2676akrujw2hZ8Vij1s/6KwoTueHCvXh+0+D4NB9usaU5gMdywWkdN97owzXAyfDvB1Qc2mfytfEKh3oFdaciGbu8XgunTNm9nwlur3e8LEUAm//PEs6aUuHC6tyU4t6g44e3BFwaAF/Iel/S4OqPbbatCUk3COzLC+1ZkPoUiAqkgwOvT7yBcNuU3Gq/3L+Kn2idE4RXJG4HubP13nIEQA1EjYoWEelZc3r90sDmfxJ+A/xitdkJK3zbAAAAAElFTkSuQmCC"/>
    </defs>
    <g id="help_info_2" clipPath="url(#cp1)">
      <use id="twitter" href="#img1" transform="matrix(1,0,0,1,0,0)"/>
    </g>
  </svg>
);

TwitterIcon.defaultProps = {
  fillRule: "evenodd",
  fill: "#eeb60f",
};
//{opacity: 0.255;fill: #848484}
