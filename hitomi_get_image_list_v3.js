// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 477:
case 136:
case 1874:
case 2748:
case 3025:
case 2809:
case 2370:
case 1829:
case 1693:
case 722:
case 2987:
case 3036:
case 969:
case 1520:
case 3828:
case 2015:
case 544:
case 1847:
case 443:
case 3656:
case 1264:
case 2696:
case 3964:
case 2672:
case 649:
case 3766:
case 1675:
case 3142:
case 1446:
case 3237:
case 2856:
case 1507:
case 1177:
case 2301:
case 2041:
case 2628:
case 1450:
case 2024:
case 821:
case 3872:
case 1004:
case 429:
case 394:
case 651:
case 2991:
case 124:
case 1144:
case 11:
case 985:
case 3280:
case 3609:
case 3951:
case 2571:
case 1980:
case 2549:
case 1073:
case 226:
case 2684:
case 1898:
case 946:
case 1945:
case 2942:
case 1463:
case 3632:
case 3245:
case 2088:
case 3970:
case 2550:
case 1427:
case 4045:
case 2613:
case 1569:
case 2407:
case 3387:
case 3667:
case 3330:
case 2859:
case 1471:
case 618:
case 2092:
case 1449:
case 2076:
case 1061:
case 710:
case 2797:
case 458:
case 3757:
case 3623:
case 1543:
case 675:
case 2885:
case 3052:
case 2867:
case 895:
case 2221:
case 2151:
case 1038:
case 1790:
case 22:
case 3191:
case 2781:
case 3685:
case 3769:
case 2823:
case 1835:
case 3391:
case 200:
case 3884:
case 3365:
case 4011:
case 1826:
case 2277:
case 1557:
case 1658:
case 3039:
case 1673:
case 673:
case 2210:
case 3444:
case 2084:
case 3032:
case 2839:
case 3350:
case 3421:
case 871:
case 1894:
case 479:
case 647:
case 1181:
case 1920:
case 2530:
case 48:
case 1661:
case 2368:
case 3477:
case 440:
case 606:
case 2676:
case 3146:
case 3762:
case 3023:
case 2411:
case 1751:
case 3780:
case 728:
case 427:
case 2927:
case 1537:
case 2331:
case 1889:
case 3892:
case 1442:
case 2963:
case 1034:
case 1562:
case 4066:
case 1217:
case 1397:
case 3917:
case 6:
case 1764:
case 2949:
case 3266:
case 1058:
case 2131:
case 2971:
case 3551:
case 1966:
case 850:
case 2542:
case 1545:
case 3602:
case 3625:
case 4069:
case 1290:
case 1310:
case 2950:
case 2281:
case 2814:
case 27:
case 2744:
case 733:
case 1093:
case 445:
case 909:
case 3269:
case 2437:
case 1612:
case 842:
case 289:
case 2480:
case 3300:
case 3040:
case 3711:
case 498:
case 3968:
case 797:
case 3056:
case 1943:
case 2777:
case 1465:
case 2096:
case 1110:
case 1075:
case 588:
case 1487:
case 3745:
case 3149:
case 1008:
case 2641:
case 3501:
case 3815:
case 2028:
case 2679:
case 855:
case 265:
case 1770:
case 1604:
case 1019:
case 1833:
case 983:
case 2117:
case 1511:
case 1805:
case 203:
case 4057:
case 2825:
case 3257:
case 3127:
case 3614:
case 1148:
case 3009:
case 625:
case 3371:
case 2791:
case 1220:
case 3695:
case 2838:
case 381:
case 1477:
case 587:
case 1762:
case 1146:
case 1564:
case 2003:
case 3751:
case 2035:
case 1444:
case 180:
case 2910:
case 849:
case 1421:
case 3381:
case 3894:
case 2026:
case 752:
case 1346:
case 1006:
case 3654:
case 362:
case 3562:
case 2873:
case 534:
case 3764:
case 745:
case 433:
case 1639:
case 3058:
case 823:
case 1888:
case 1876:
case 2157:
case 2227:
case 497:
case 1207:
case 413:
case 798:
case 2948:
case 2895:
case 3638:
case 690:
case 1059:
case 261:
case 1892:
case 3889:
case 3855:
case 2082:
case 619:
case 107:
case 2263:
case 2787:
case 1841:
case 1711:
case 2320:
case 727:
case 1968:
case 3268:
case 3943:
case 3465:
case 185:
case 4068:
case 3491:
case 308:
case 244:
case 2053:
case 93:
case 256:
case 2605:
case 875:
case 1625:
case 1602:
case 3310:
case 818:
case 2250:
case 2120:
case 2246:
case 3969:
case 2074:
case 3805:
case 3511:
case 2997:
case 2464:
case 1683:
case 779:
case 3957:
case 464:
case 1257:
case 1127:
case 3148:
case 695:
case 2029:
case 2366:
case 3430:
case 1371:
case 2047:
case 3487:
case 648:
case 1745:
case 169:
case 3348:
case 3008:
case 2812:
case 2521:
case 86:
case 2166:
case 2742:
case 1363:
case 25:
case 2544:
case 3604:
case 3770:
case 3019:
case 936:
case 684:
case 1640:
case 4064:
case 3012:
case 671:
case 2033:
case 3264:
case 1964:
case 1497:
case 873:
case 2749:
case 368:
case 1142:
case 3675:
case 1766:
case 2771:
case 2653:
case 336:
case 3874:
case 2345:
case 2022:
case 183:
case 2510:
case 1025:
case 1342:
case 2763:
case 847:
case 2431:
case 3693:
case 2287:
case 194:
case 2700:
case 1618:
case 3144:
case 31:
case 2291:
case 1517:
case 4051:
case 2265:
case 3962:
case 2468:
case 430:
case 1280:
case 1951:
case 2078:
case 3446:
case 2086:
case 457:
case 1237:
case 565:
case 3177:
case 3608:
case 617:
case 3450:
case 3619:
case 576:
case 1896:
case 3471:
case 2089:
case 3449:
case 3061:
case 3616:
case 2603:
case 3543:
case 1623:
case 296:
case 711:
case 2242:
case 3898:
case 1245:
case 1130:
case 3270:
case 2858:
case 642:
case 1448:
case 2626:
case 3569:
case 1391:
case 1884:
case 3911:
case 3768:
case 1365:
case 2362:
case 2597:
case 1743:
case 974:
case 3557:
case 1813:
case 2977:
case 3658:
case 655:
case 832:
case 2380:
case 2094:
case 2660:
case 743:
case 435:
case 1901:
case 3038:
case 2921:
case 812:
case 1410:
case 3634:
case 2944:
case 167:
case 29:
case 1165:
case 2816:
case 2162:
case 2019:
case 35:
case 3544:
case 1624:
case 1117:
case 509:
case 2833:
case 738:
case 2487:
case 1679:
case 2231:
case 630:
case 604:
case 3521:
case 493:
case 594:
case 1836:
case 3577:
case 2957:
case 3678:
case 610:
case 2822:
case 103:
case 3997:
case 3464:
case 2878:
case 3120:
case 1744:
case 1950:
case 1437:
case 2093:
case 2969:
case 356:
case 988:
case 3053:
case 2545:
case 2310:
case 2701:
case 3605:
case 1542:
case 4046:
case 1777:
case 2465:
case 3633:
case 2943:
case 2110:
case 208:
case 3804:
case 1072:
case 840:
case 2612:
case 1480:
case 2886:
case 996:
case 3263:
case 2034:
case 4027:
case 2855:
case 2442:
case 1963:
case 3787:
case 770:
case 2907:
case 567:
case 3060:
case 3157:
case 3227:
case 3861:
case 361:
case 2889:
case 3948:
case 2638:
case 1331:
case 3357:
case 3694:
case 1949:
case 852:
case 1131:
case 1591:
case 160:
case 3730:
case 3873:
case 1565:
case 2562:
case 4071:
case 1688:
case 1013:
case 3026:
case 901:
case 3143:
case 3854:
case 4000:
case 751:
case 2016:
case 3343:
case 1190:
case 1411:
case 3655:
case 3200:
case 3689:
case 1692:
case 2920:
case 2181:
case 1900:
case 274:
case 3838:
case 442:
case 1368:
case 2661:
case 3169:
case 1676:
case 2634:
case 1781:
case 829:
case 39:
case 1699:
case 1244:
case 114:
case 12:
case 3750:
case 1823:
case 3746:
case 982:
case 2803:
case 3337:
case 507:
case 3180:
case 2201:
case 301:
case 1221:
case 546:
case 2790:
case 1151:
case 2038:
case 490:
case 2826:
case 3137:
case 697:
case 2400:
case 1351:
case 2658:
case 202:
case 811:
case 659:
case 1832:
case 2911:
case 100:
case 419:
case 1550:
case 2270:
case 2569:
case 1613:
case 732:
case 1407:
case 2427:
case 3626:
case 1546:
case 2073:
case 126:
case 396:
case 877:
case 1684:
case 2731:
case 2898:
case 2543:
case 2616:
case 187:
case 2882:
case 1092:
case 712:
case 1076:
case 3875:
case 3490:
case 2344:
case 2004:
case 105:
case 569:
case 1469:
case 1856:
case 2177:
case 3647:
case 3086:
case 1079:
case 2321:
case 1628:
case 1710:
case 1041:
case 664:
case 3468:
case 4091:
case 2377:
case 448:
case 2251:
case 1549:
case 706:
case 1571:
case 224:
case 2144:
case 21:
case 163:
case 3700:
case 1991:
case 3265:
case 1443:
case 1965:
case 944:
case 2829:
case 3763:
case 1809:
case 628:
case 1987:
case 720:
case 95:
case 2874:
case 3005:
case 3022:
case 4087:
case 3510:
case 3033:
case 2675:
case 3771:
case 3749:
case 3145:
case 3230:
case 7:
case 1930:
case 3808:
case 858:
case 2847:
case 2813:
case 1977:
case 3806:
case 1137:
case 420:
case 3277:
case 1380:
case 627:
case 3351:
case 3832:
case 300:
case 1944:
case 2685:
case 267:
case 314:
case 899:
case 3699:
case 1682:
case 32:
case 3823:
case 2165:
case 2769:
case 491:
case 4021:
case 1816:
case 40:
case 1660:
case 1180:
case 3867:
case 810:
case 3151:
case 2901:
case 3364:
case 2623:
case 473:
case 960:
case 2757:
case 1417:
case 3885:
case 387:
case 2052:
case 1055:
case 2899:
case 679:
case 3466:
case 3859:
case 2187:
case 3076:
case 3797:
case 795:
case 640:
case 3088:
case 3550:
case 2130:
case 1858:
case 3613:
case 2606:
case 447:
case 3407:
case 3546:
case 3164:
case 2245:
case 3684:
case 1635:
case 1468:
case 432:
case 3549:
case 2280:
case 815:
case 2609:
case 822:
case 2014:
case 3571:
case 2618:
case 363:
case 1700:
case 1265:
case 2083:
case 3443:
case 2517:
case 2262:
case 1875:
case 1490:
case 2872:
case 2896:
case 2237:
case 3856:
case 3527:
case 1647:
case 97:
case 1086:
case 3710:
case 3301:
case 3840:
case 903:
case 3696:
case 2497:
case 2964:
case 739:
case 721:
case 2142:
case 1145:
case 1230:
case 3015:
case 3500:
case 3930:
case 2656:
case 3457:
case 3370:
case 1431:
case 1763:
case 3809:
case 753:
case 3987:
case 2036:
case 1287:
case 790:
case 719:
case 2707:
case 2002:
case 3818:
case 1022:
case 283:
case 3836:
case 51:
case 524:
case 2614:
case 2349:
case 2009:
case 631:
case 2018:
case 629:
case 2163:
case 3297:
case 1997:
case 611:
case 3624:
case 3117:
case 451:
case 742:
case 1307:
case 2501:
case 2815:
case 3679:
case 897:
case 2745:
case 2931:
case 3641:
case 2243:
case 3462:
case 677:
case 2824:
case 2879:
case 2711:
case 2841:
case 389:
case 2300:
case 3480:
case 568:
case 1250:
case 3950:
case 2570:
case 2100:
case 3814:
case 3946:
case 2269:
case 905:
case 156:
case 4081:
case 449:
case 3542:
case 841:
case 771:
case 1357:
case 3971:
case 1249:
case 864:
case 2639:
case 1271:
case 3131:
case 2266:
case 254:
case 360:
case 1730:
case 2917:
case 1873:
case 3565:
case 3445:
case 2085:
case 207:
case 1082:
case 3963:
case 4048:
case 1787:
case 2207:
case 3927:
case 2876:
case 1861:
case 46:
case 1227:
case 161:
case 692:
case 2892:
case 3331:
case 1895:
case 1470:
case 900:
case 934:
case 1003:
case 872:
case 2780:
case 3692:
case 1689:
case 2150:
case 828:
case 3900:
case 2220:
case 2146:
case 3368:
case 438:
case 1401:
case 750:
case 717:
case 3168:
case 4010:
case 3587:
case 793:
case 475:
case 2737:
case 182:
case 1910:
case 1035:
case 3210:
case 3525:
case 179:
case 3172:
case 2984:
case 3932:
case 2786:
case 3536:
case 2226:
case 547:
case 1877:
case 2913:
case 2156:
case 3906:
case 2140:
case 3704:
case 2356:
case 3967:
case 3494:
case 2000:
case 2515:
case 1267:
case 4016:
case 1512:
case 1821:
case 889:
case 2454:
case 3372:
case 1844:
case 2778:
case 769:
case 915:
case 474:
case 3216:
case 3601:
case 2579:
case 2705:
case 359:
case 1725:
case 1259:
case 5:
case 3328:
case 4034:
case 1347:
case 785:
case 2027:
case 2473:
case 127:
case 2063:
case 3234:
case 255:
case 397:
case 1934:
case 2118:
case 3583:
case 186:
case 1374:
case 3842:
case 1611:
case 2318:
case 3489:
case 803:
case 2309:
case 1958:
case 3514:
case 3128:
case 2870:
case 2495:
case 2733:
case 520:
case 462:
case 2461:
case 284:
case 3738:
case 3090:
case 1335:
case 3891:
case 4093:
case 3865:
case 1573:
case 957:
case 910:
case 2253:
case 1993:
case 1326:
case 2046:
case 2306:
case 3486:
case 1479:
case 408:
case 1126:
case 1256:
case 707:
case 3113:
case 2106:
case 746:
case 3754:
case 1240:
case 3552:
case 2972:
case 3275:
case 3184:
case 2794:
case 1975:
case 1303:
case 1043:
case 2359:
case 1538:
case 3208:
case 4019:
case 525:
case 1360:
case 4008:
case 2864:
case 1382:
case 1198:
case 3422:
case 2665:
case 3433:
case 293:
case 3199:
case 1218:
case 1182:
case 2185:
case 2274:
case 217:
case 250:
case 3918:
case 2229:
case 2755:
case 3909:
case 532:
case 3532:
case 1759:
case 1202:
case 3690:
case 2584:
case 2205:
case 3902:
case 2152:
case 3925:
case 1897:
case 2760:
case 3176:
case 2513:
case 1236:
case 3447:
case 826:
case 2782:
case 1428:
case 2650:
case 3388:
case 2408:
case 3192:
case 436:
case 1785:
case 177:
case 3668:
case 468:
case 1912:
case 416:
case 3188:
case 3212:
case 3567:
case 887:
case 3758:
case 1355:
case 143:
case 2352:
case 3474:
case 3523:
case 3064:
case 570:
case 3631:
case 814:
case 2139:
case 399:
case 2979:
case 1194:
case 129:
case 1037:
case 43:
case 2493:
case 2726:
case 1706:
case 2924:
case 3585:
case 2599:
case 2065:
case 1283:
case 248:
case 330:
case 2890:
case 1472:
case 2278:
case 3914:
case 1080:
case 1558:
case 111:
case 1214:
case 2703:
case 41:
case 972:
case 1657:
case 3846:
case 3708:
case 2302:
case 2747:
case 913:
case 1973:
case 575:
case 794:
case 3460:
case 3849:
case 566:
case 3556:
case 2136:
case 3261:
case 1848:
case 2774:
case 3540:
case 1718:
case 682:
case 2458:
case 3295:
case 2992:
case 1575:
case 1252:
case 2255:
case 4061:
case 2572:
case 2125:
case 3952:
case 2596:
case 933:
case 4095:
case 805:
case 221:
case 1938:
case 2528:
case 3001:
case 1508:
case 2753:
case 56:
case 2627:
case 3426:
case 941:
case 3793:
case 2183:
case 1519:
case 3324:
case 1484:
case 2416:
case 1756:
case 3403:
case 3617:
case 3518:
case 1740:
case 315:
case 3254:
case 192:
case 661:
case 1810:
case 1954:
case 2314:
case 219:
case 2294:
case 2649:
case 3775:
case 1378:
case 4054:
case 1668:
case 1376:
case 2215:
case 1188:
case 2418:
case 1523:
case 3643:
case 2173:
case 952:
case 1064:
case 4036:
case 1532:
case 3155:
case 1690:
case 3202:
case 3897:
case 2373:
case 571:
case 3236:
case 2161:
case 702:
case 1447:
case 483:
case 2526:
case 1734:
case 3189:
case 1192:
case 676:
case 4014:
case 1983:
case 104:
case 130:
case 3767:
case 2354:
case 3472:
case 232:
case 1850:
case 2138:
case 1051:
case 3080:
case 2440:
case 3214:
case 3881:
case 1716:
case 2456:
case 517:
case 494:
case 3723:
case 1631:
case 2279:
case 199:
case 3732:
case 2241:
case 331:
case 3194:
case 537:
case 2986:
case 2560:
case 945:
case 3706:
case 2713:
case 1453:
case 1585:
case 1204:
case 801:
case 2582:
case 212:
case 225:
case 1556:
case 3961:
case 73:
case 2276:
case 1261:
case 3848:
case 273:
case 2312:
case 2292:
case 3620:
case 1295:
case 1540:
case 358:
case 1498:
case 986:
case 1952:
case 3333:
case 1708:
case 3499:
case 2610:
case 2728:
case 3133:
case 3973:
case 927:
case 1460:
case 71:
case 2288:
case 2112:
case 2459:
case 1719:
case 1070:
case 98:
case 2423:
case 940:
case 1403:
case 3740:
case 1518:
case 1124:
case 115:
case 3954:
case 2104:
case 2574:
case 220:
case 1141:
case 1939:
case 1775:
case 1179:
case 1509:
case 3378:
case 3186:
case 2796:
case 660:
case 1800:
case 888:
case 3178:
case 291:
case 2406:
case 3386:
case 467:
case 555:
case 3607:
case 2547:
case 1426:
case 135:
case 2432:
case 1324:
case 2304:
case 2044:
case 1435:
case 2193:
case 1967:
case 3512:
case 2439:
case 3267:
case 3714:
case 1372:
case 340:
case 3223:
case 3916:
case 992:
case 1396:
case 1923:
case 2533:
case 1216:
case 1172:
case 1525:
case 4006:
case 3232:
case 2811:
case 2284:
case 2522:
case 1932:
case 2926:
case 1536:
case 4032:
case 2393:
case 2213:
case 44:
case 141:
case 275:
case 2724:
case 687:
case 1670:
case 1583:
case 386:
case 519:
case 1017:
case 958:
case 2845:
case 3611:
case 1842:
case 3492:
case 2108:
case 62:
case 3066:
case 553:
case 3476:
case 2308:
case 446:
case 634:
case 1959:
case 3725:
case 159:
case 3702:
case 2621:
case 2960:
case 407:
case 2586:
case 708:
case 539:
case 3504:
case 26:
case 2319:
case 197:
case 2299:
case 2644:
case 3126:
case 911:
case 1068:
case 3256:
case 485:
case 1956:
case 270:
case 1478:
case 172:
case 4056:
case 3739:
case 1552:
case 3135:
case 1275:
case 2272:
case 398:
case 3975:
case 2483:
case 2296:
case 1384:
case 1090:
case 1891:
case 3103:
case 2862:
case 929:
case 3993:
case 3479:
case 249:
case 3441:
case 2776:
case 3662:
case 4009:
case 1433:
case 3398:
case 2974:
case 3182:
case 1199:
case 2134:
case 223:
case 2594:
case 605:
case 3415:
case 2929:
case 3209:
case 3680:
case 4018:
case 3057:
case 1887:
case 2228:
case 663:
case 3908:
case 2158:
case 1208:
case 977:
case 3360:
case 3637:
case 469:
case 3382:
case 1399:
case 1219:
case 2788:
case 3:
case 2484:
case 3304:
case 966:
case 3432:
case 3021:
case 83:
case 654:
case 139:
case 3648:
case 1114:
case 513:
case 414:
case 975:
case 1753:
case 3406:
case 597:
case 2378:
case 2239:
case 3994:
case 1314:
case 3529:
case 119:
case 1294:
case 646:
case 400:
case 434:
case 3077:
case 533:
case 3423:
case 2954:
case 320:
case 1336:
case 836:
case 3459:
case 3866:
case 1988:
case 426:
case 3112:
case 1325:
case 1042:
case 1302:
case 3728:
case 3610:
case 2045:
case 3485:
case 347:
case 3553:
case 1747:
case 306:
case 96:
case 1255:
case 1125:
case 1102:
case 2575:
case 2105:
case 258:
case 2252:
case 4092:
case 788:
case 2620:
case 868:
case 3989:
case 1992:
case 2995:
case 373:
case 64:
case 2848:
case 3312:
case 1600:
case 1726:
case 312:
case 3224:
case 325:
case 1924:
case 195:
case 3241:
case 1979:
case 2194:
case 229:
case 3784:
case 1941:
case 1735:
case 3560:
case 949:
case 3440:
case 3978:
case 2080:
case 2214:
case 1339:
case 1278:
case 796:
case 3138:
case 564:
case 970:
case 463:
case 2723:
case 3456:
case 1703:
case 2657:
case 2062:
case 3697:
case 669:
case 148:
case 951:
case 3526:
case 1513:
case 3857:
case 1408:
case 277:
case 1782:
case 685:
case 1584:
case 1222:
case 3535:
case 1152:
case 1419:
case 2155:
case 2897:
case 1352:
case 3418:
case 2355:
case 3503:
case 2516:
case 1233:
case 701:
case 572:
case 3933:
case 2643:
case 3409:
case 1798:
case 1831:
case 2912:
case 1864:
case 3334:
case 3788:
case 2919:
case 1385:
case 2382:
case 1359:
case 557:
case 1247:
case 3436:
case 2637:
case 3929:
case 2752:
case 862:
case 2209:
case 3594:
case 1229:
case 3358:
case 1159:
case 504:
case 2057:
case 2662:
case 3097:
case 1665:
case 1274:
case 117:
case 3792:
case 3134:
case 1691:
case 2554:
case 193:
case 252:
case 2182:
case 609:
case 1687:
case 2993:
case 349:
case 3880:
case 3081:
case 1851:
case 1332:
case 245:
case 171:
case 1404:
case 184:
case 2335:
case 1253:
case 3862:
case 3116:
case 912:
case 47:
case 3272:
case 1794:
case 298:
case 1132:
case 3555:
case 1972:
case 1996:
case 1323:
case 932:
case 3483:
case 2303:
case 2561:
case 1106:
case 1576:
case 2126:
case 3837:
case 2256:
case 3414:
case 2240:
case 1592:
case 370:
case 1367:
case 1630:
case 947:
case 2736:
case 906:
case 1282:
case 1524:
case 227:
case 2504:
case 2285:
case 3982:
case 1999:
case 3621:
case 3048:
case 3308:
case 1722:
case 3586:
case 744:
case 1027:
case 535:
case 2347:
case 3960:
case 756:
case 1071:
case 667:
case 1461:
case 3677:
case 515:
case 460:
case 522:
case 286:
case 2611:
case 1298:
case 3715:
case 3452:
case 1226:
case 2877:
case 3926:
case 991:
case 3393:
case 375:
case 1235:
case 3522:
case 318:
case 3811:
case 3779:
case 1642:
case 3935:
case 1984:
case 366:
case 1786:
case 240:
case 2844:
case 3375:
case 1778:
case 1454:
case 142:
case 3533:
case 920:
case 2783:
case 75:
case 3193:
case 3439:
case 2020:
case 1801:
case 1515:
case 1929:
case 1358:
case 2651:
case 3229:
case 2887:
case 2761:
case 1097:
case 511:
case 1776:
case 4029:
case 1792:
case 3185:
case 3789:
case 123:
case 1974:
case 393:
case 3864:
case 4047:
case 1334:
case 2422:
case 1425:
case 2399:
case 2219:
case 624:
case 3928:
case 2208:
case 2830:
case 3359:
case 1228:
case 846:
case 1947:
case 3132:
case 1555:
case 2552:
case 2664:
case 948:
case 3996:
case 1483:
case 2956:
case 2113:
case 3106:
case 3576:
case 1837:
case 2068:
case 1414:
case 2754:
case 1589:
case 3592:
case 3367:
case 3630:
case 2940:
case 2313:
case 2486:
case 3306:
case 2293:
case 3687:
case 616:
case 668:
case 1081:
case 880:
case 84:
case 3851:
case 456:
case 3332:
case 2738:
case 2090:
case 1862:
case 3253:
case 577:
case 1953:
case 1116:
case 2128:
case 2514:
case 3049:
case 2489:
case 3733:
case 77:
case 2583:
case 3318:
case 1715:
case 1845:
case 3473:
case 297:
case 1319:
case 1644:
case 1299:
case 869:
case 3999:
case 3063:
case 2234:
case 259:
case 2328:
case 1308:
case 2601:
case 1048:
case 3705:
case 3109:
case 4082:
case 1586:
case 1375:
case 3778:
case 2923:
case 990:
case 3203:
case 1903:
case 919:
case 765:
case 2967:
case 3340:
case 2494:
case 3000:
case 3801:
case 3226:
case 921:
case 3156:
case 939:
case 4035:
case 2536:
case 1213:
case 703:
case 482:
case 1724:
case 1010:
case 1779:
case 2932:
case 1284:
case 1522:
case 2525:
case 2502:
case 3984:
case 2196:
case 166:
case 586:
case 278:
case 3671:
case 894:
case 3294:
case 1796:
case 1077:
case 3416:
case 942:
case 1423:
case 120:
case 2518:
case 222:
case 2254:
case 3183:
case 2793:
case 401:
case 1304:
case 809:
case 235:
case 2324:
case 191:
case 2379:
case 1820:
case 662:
case 3528:
case 321:
case 3114:
case 1648:
case 2341:
case 2426:
case 49:
case 3753:
case 3125:
case 1955:
case 2863:
case 2261:
case 4055:
case 3976:
case 540:
case 2540:
case 3458:
case 2315:
case 1312:
case 1292:
case 3600:
case 3774:
case 3336:
case 2460:
case 763:
case 2871:
case 2115:
case 1459:
case 3988:
case 2849:
case 1288:
case 3325:
case 681:
case 1728:
case 2708:
case 147:
case 955:
case 1978:
case 1440:
case 726:
case 2914:
case 1138:
case 2846:
case 1697:
case 1354:
case 132:
case 348:
case 3475:
case 3091:
case 1713:
case 984:
case 1843:
case 3599:
case 4086:
case 3924:
case 2204:
case 867:
case 1241:
case 1338:
case 3941:
case 3139:
case 3735:
case 299:
case 787:
case 3286:
case 488:
case 1986:
case 3352:
case 2474:
case 1418:
case 1173:
case 2523:
case 714:
case 2668:
case 598:
case 2376:
case 2392:
case 1409:
case 3798:
case 2429:
case 3831:
case 3087:
case 2447:
case 700:
case 734:
case 1161:
case 545:
case 3408:
case 1681:
case 1799:
case 3222:
case 3205:
case 1535:
case 3152:
case 2690:
case 1373:
case 937:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755313202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,];
var gg_b = "1755313202/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
