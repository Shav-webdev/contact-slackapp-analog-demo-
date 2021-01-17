import React from "react";

export const Setting = props => {
  const { style } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 56"
      width={style?.width ? style.width : "55"}
      height={style?.height ? style.height : "56"}
    >
      <defs>
        <image
          width={style?.width ? style.width : "55"}
          height={style?.height ? style.height : "56"}
          id="img1454654"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAYAAABZjWCTAAAAAXNSR0IB2cksfwAACmFJREFUeJzNmomXU9Udx/Mn9A9oT7G19nTVtrbVql20PfWIIlWxtlVZBNlxoFBWBa2C7DCA7APIIIwwFDyAILJIwTLIMvskM8yWzGT2JbMlmSy//r73l319SV6Qe86FJO/Nvffz7u/+1mcgIoO/OxzDBmOZhapKLdTRZhvn9XgNodfvePcMGchRSzRwk6j3NFHXUen43H+VyN2T8O/DwL68UElTX9xMU17cRLtzzzCkmWw9g18DGD9URz2DHCGqnURU/hjRre8SFf+I/7+P6MY3iUr4s+0iJYXzg017aQvNn5xH7y/6mGa9so1yXt1OR/OvUH1NK9mHnHcGzOs20GA5Uf10opv3EJU+SGR6nr/PJGqcy6CPClz5b3lHbySGczpcYWDXr1RTb88gnThcRMtmH6Cpf91MS2Z+SBc+LSWrpeui15tFUfXyA+wvEpiS+4mqXyJq20E03MIiaOPPexj4XgHrOZUQTMGZKpsVGHYKYKGt2dxFB3ZcoMXT99HkF3Jp/Tv/oe7O/geyBmf7gqjyCRa/HxNZVxO5emUhaYApuEtny2n8qHW0ZmkhuV0eitWqSsy0+s0jNPbptXTuZLGmgVPuwy3LqOIPfKa+T2R5h4+dOyMwBTfQbzcsnraXXueduW2yxoRDgxYF3JaVJ7ID17xSzlLdLAazy6ReR9pgCg7/XD5fSROf20gbWOwc9uGYcPh98phNNHv8DnzWF8xtM1DJz2TXHOaQSesFrOSnqYFBCty9AudyuQ2rFh9W4vlVxLkLbRBd7N7lcxUEDasbXO9nsms1r4RPaDeJxoSCIY2KDHbR8jZRx4HgjzhX0IxL39hPfbahmHBFl000h3cOCggaVjfA5hUCB7sW2nDucA6Lf8DKpTO5IgMY7CLG4r8Lu7h74xm1M8cLrtJto5VamroVKKv/wHznThXrD1g/SxaExUU2q+8swjPRAgYj7+thNzDMsQVT9qizNW/SLspd/okCbahtyy7g7VcFwGmJhhssEdGsncA76UkOBmNf9aQaL+rGW0W1tHfLWVqxsEAZ7ynsji2fX5BdwLrJAmeviYYLFU24W0NGEVE/aCQYbKNxJD+QEfEnhEasZgO/74PP1VnMGiA0JRQJ4Pq/ioZDa90sbhgA4bVY1wsodjUSzDMkfmfZr5JP7nS6DPu3nc8OIMBC7VioGQhtWDTcsNqJInJ+UHgzoWBofV/67OUMbYvICmAkmNixxA0iOlgaBDU+Q9SQE+Km9fHvr/OYHEH0nNQuProCJgBzDbtpaNChDRRGPuDNsOvYeYjH/DaL7sssnoMGzXC6ASYBK75Wq/zXeJ5SbFB+GAO31Dmjsl/z7lbg19TgMgbUAAb37p8TdlJ7S682sOFWHof93aqREk207yX/fGmp7lQAa6qslArYzJe30rGP/kceT3A8cnUxRJucKc+AxHf2aglWm94V5VLxO/78Hu9i8GGmBacVcGlOPsFuZgQGO9aykRe+nHclj33G/eI73mbzUf4wq/2f8Bn7m+RVItaYNpwWQHNde7x4TDsY7NjN7/BZeohNwC+kl/1Sdsr0HCm/1NU+Otb6MoKLBxhoeoHBPes8yMZ8q/T2PbJTrq4RidaWMVwkYF7uZ/qDOZv3prMuXeD8gMi3qDzMXQCmKxy6B0ncTJWHTmC6w+kCBr+w8vGMwfSF0wPs1r2yazV/9weudwGcLmDs3ddNE3EEIH4btm74euH0AvOHLYjG4SNCPDsPZLR7dxcYGjQtPA/4iX3/FThvelH+3QWGZjfKrhlHC+hQpYrNyNl0LDtwHBupWthw2zgkO8nV/Y2sgKkB2GUr/TmpJG3bLnaxRguseWHKgAmAHAbleaPIhyCw9QNxXlu3syO7OTtg/tayyZdOgA/5hETcUDIpAsa+AC3VfVw8b5SSkM7GRGUPi+MKT7zi8eyAoQXSCbvl3CHi9mvRFADDf0B9bIijWMtbfKB/yDvzGx50LHveq2SizgJxXOGJo9yUKhjEC+MlAovXnM0pA4Z88Up9zDhKQgokWroOIxeRdN7KErMGl+oehvuWpOUQeDoaSFVQnU0IMKPGtA85MwYMfnE0NqjkZ8kDvEt5MSeM1wryvqA5E3Ym9hVrXuZz9GcWy+/J2VWZ4ZGyyL7LYeO1WntUJdfWE+PBpgAY1IaNC0UUresChT+HY5jqqluouqIpqjc1dgYC04F+Oy+mJLkTDOUEQOxi+SNSvUHZCvnHEAk5dfQ6vTZ6Ax09cCUjQPnQc1ombJwXrGhyu3m1hhZO3UNzxu9USRt/zxm7nVa/WUjtrXHOTiLvHoBK5I/y2ethsCd9qfRg6czS0EHv/etQxoCsRFwGqnoqqvCHoj/KWagVbF11kratORXoa94qpHGj1lE+B6hQJuGTmrWHLU7LRWVOkOBB0iek6QHIE/BZQyIzpPDnZfE6fugqjXtmHe1YdzpqTIAvmCqlZlN5U/jFprd9hcR/JA9bYD+hZGBWXB1R82QKaKCuQp+T+nHgfqu5k2ax5oOSQI0uVkOpedLzG2nVksM0OBCSIUa4gvFgp5LZItyjzuAInnStfoCujt8LHDyPiMJfXu4ZtWsnC6/FBENzudy0cvFhVawsumQMXkDYouA0vvUQUDI6ACLFh7lbNqj8pUFpRwVXH7hv6Rv5qj5eV90aFw6asnD/ZQV3cNfF4IWG2b5yVJE2OAXI9+LcK0B2GIbbo+aDdl6xoEABYt7e7oGIBTkl24y5cYYHrvPASJPhh4FgbezkkWs04dn1tHPDGXI6XTHhOtps6o0jZJUrikNKT35PZMioHS5NQJigABheGvDXCnCO66aTeCVYTPvuwCD4o2U5+WqQ0hv1UZO43R46xIYbortn89ngBdiqskfEf3T1agdLAxDmCeIaDvYQc+zzuY6P8YBYBL4gtPAE32JAig7a8N9zD1KtsYVqTcEOYLzZN2/iLrWDgQZPAw/KNCa1XUsD8FM29B6XIxysI19u8DkKMmB9jtS1bMGzA29j0/JPlHgumraXlsz4MNBnj9uh4M6euBWcEU8Q5w3OQMdH6cNpBIzaMT8YsZdU+Sfl5slgiHYhq7BNIQOZ69sVIIx2ZM/ffj5YQ4NX0/u51KJNL6Aakz6YFsC4YCT3IdbkeDA4GCoo0DIYCGpVc/OKZsRZQ/ScipZMBzARGJz91m2iUCzvhgzktRtUnRmAliVsGuqkYhmXySPhSt8VWQCC2ua1+oHFBFxNyg+OBYZ8i+28BNZ44dReEzGQs6GXGuZKxF0/g5T3gveLkW6Dk4uOpwdwnE/zIhHnyj+KAdZDHOMBGp/mB3+fhGTQD5ZlvC6r+LKDZZJvUdJzvx86RpoBabROVgimv0g6AeFI43zJoaDj1UG2IZJ6eFAia9sl/XcssuMhQ7Ig+jhT+GxZykqMIxnjs5KthiLBQ/alAuMPhrd5mt73BZlPSaIGL1JjlxCt336Nn9b2pDUyXTskoyWX3awxkkDCehBgA652sj/oDdyffECcRbypY7tA1H1MdgngeNH6TkFFdjzQ/uuyHigXpR+iE7f/B3tyHUgHUVMiAAAAAElFTkSuQmCC"
        />
      </defs>
      <use id="Background12313456465" href="#img1454654" x="0" y="0" />
    </svg>
  );
};

Setting.defaultProps = {
  fillRule: "evenodd",
};
