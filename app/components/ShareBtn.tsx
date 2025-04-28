"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CheckmarkIcon, LinkIcon } from "@sanity/icons";


export default function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.href || `https://leedsapp.com/product-guide/${slug}`);
  }, [slug]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mr-3 flex items-center gap-2">
      <CopyToClipboard text={shareUrl} onCopy={handleCopy}>
        <button className="flex items-center rounded-full p-2 bg-gray-100 hover:bg-gray-200">
          {copied ? (
            <CheckmarkIcon className="h-6 w-6 text-green-600" />
          ) : (
            <LinkIcon className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </CopyToClipboard>

      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={25} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={25} round />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl} title={title} separator=": ">
        <WhatsappIcon size={25} round />
      </WhatsappShareButton>
    </div>
  );
}
