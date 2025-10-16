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
var o = 1;
switch (g) {
case 3809:
case 3101:
case 2621:
case 1027:
case 2770:
case 3781:
case 674:
case 1642:
case 4020:
case 3586:
case 224:
case 3248:
case 876:
case 946:
case 1426:
case 1251:
case 2268:
case 973:
case 1325:
case 2981:
case 3970:
case 744:
case 843:
case 3075:
case 1395:
case 1836:
case 1934:
case 1496:
case 2955:
case 2557:
case 4090:
case 2691:
case 2039:
case 3883:
case 3755:
case 3195:
case 3217:
case 1882:
case 68:
case 3205:
case 3221:
case 3777:
case 3456:
case 1262:
case 266:
case 364:
case 3355:
case 3263:
case 4006:
case 2977:
case 3668:
case 2575:
case 1865:
case 3057:
case 1803:
case 3802:
case 2134:
case 3550:
case 2888:
case 2032:
case 1181:
case 2116:
case 1011:
case 2210:
case 2370:
case 3291:
case 3896:
case 3559:
case 1880:
case 2541:
case 3994:
case 3523:
case 1613:
case 3612:
case 2966:
case 2219:
case 2154:
case 1218:
case 2794:
case 1483:
case 3037:
case 3946:
case 2864:
case 1378:
case 217:
case 858:
case 3098:
case 155:
case 1135:
case 405:
case 3684:
case 1973:
case 2052:
case 1409:
case 2408:
case 920:
case 501:
case 2807:
case 3530:
case 1640:
case 757:
case 30:
case 4022:
case 3593:
case 570:
case 3414:
case 202:
case 1247:
case 477:
case 1604:
case 2093:
case 2372:
case 161:
case 2212:
case 352:
case 795:
case 2815:
case 1529:
case 3619:
case 919:
case 1553:
case 3552:
case 2173:
case 2284:
case 3800:
case 2935:
case 1778:
case 4029:
case 71:
case 2598:
case 359:
case 3041:
case 608:
case 2346:
case 3366:
case 1260:
case 2059:
case 1402:
case 2061:
case 1058:
case 2445:
case 534:
case 1644:
case 2491:
case 1757:
case 1197:
case 1215:
case 2139:
case 2831:
case 2671:
case 3338:
case 1812:
case 3397:
case 3534:
case 3287:
case 4070:
case 1570:
case 863:
case 764:
case 2860:
case 2150:
case 3840:
case 2790:
case 3516:
case 3933:
case 966:
case 3711:
case 2463:
case 1442:
case 1884:
case 887:
case 2417:
case 1111:
case 1264:
case 2927:
case 1819:
case 2818:
case 2186:
case 3906:
case 2280:
case 3804:
case 2390:
case 2132:
case 3271:
case 1081:
case 381:
case 2016:
case 413:
case 3311:
case 1055:
case 726:
case 2320:
case 3797:
case 2847:
case 2034:
case 1939:
case 2938:
case 1357:
case 3656:
case 2595:
case 273:
case 1775:
case 623:
case 2353:
case 3614:
case 1524:
case 212:
case 1328:
case 2203:
case 1440:
case 1930:
case 3128:
case 1609:
case 486:
case 2792:
case 2152:
case 3573:
case 3484:
case 1572:
case 511:
case 2862:
case 2054:
case 752:
case 395:
case 95:
case 3137:
case 1546:
case 207:
case 3198:
case 3758:
case 1741:
case 1035:
case 472:
case 3922:
case 625:
case 49:
case 2399:
case 1398:
case 219:
case 3078:
case 1923:
case 4024:
case 1337:
case 1961:
case 1959:
case 2774:
case 3141:
case 618:
case 2578:
case 1579:
case 2645:
case 235:
case 2161:
case 1798:
case 2799:
case 1602:
case 220:
case 2123:
case 3999:
case 3208:
case 2322:
case 3554:
case 3358:
case 184:
case 1066:
case 902:
case 432:
case 357:
case 428:
case 439:
case 1952:
case 2282:
case 2130:
case 17:
case 2885:
case 2729:
case 1404:
case 436:
case 3587:
case 704:
case 18:
case 2853:
case 2785:
case 2829:
case 1828:
case 1515:
case 2105:
case 3625:
case 1917:
case 2769:
case 1768:
case 1497:
case 3695:
case 2556:
case 1898:
case 3110:
case 2439:
case 680:
case 1438:
case 2949:
case 3475:
case 3969:
case 3951:
case 1270:
case 3080:
case 3376:
case 1655:
case 3571:
case 2580:
case 1149:
case 2148:
case 134:
case 3858:
case 3457:
case 1841:
case 482:
case 3056:
case 216:
case 2369:
case 3349:
case 285:
case 2225:
case 4064:
case 1921:
case 1411:
case 494:
case 2295:
case 2117:
case 3962:
case 954:
case 2616:
case 476:
case 2892:
case 443:
case 3742:
case 756:
case 1681:
case 1743:
case 738:
case 3437:
case 729:
case 3082:
case 3273:
case 3838:
case 1083:
case 3897:
case 2747:
case 3313:
case 3498:
case 3767:
case 3112:
case 4088:
case 283:
case 2967:
case 2331:
case 3036:
case 1384:
case 2806:
case 1294:
case 57:
case 2718:
case 2589:
case 242:
case 291:
case 655:
case 3428:
case 445:
case 3340:
case 371:
case 541:
case 592:
case 722:
case 2008:
case 108:
case 2760:
case 2890:
case 3304:
case 805:
case 3254:
case 969:
case 697:
case 2940:
case 1319:
case 111:
case 250:
case 3960:
case 1104:
case 877:
case 1279:
case 2833:
case 2459:
case 648:
case 2913:
case 998:
case 3065:
case 2423:
case 778:
case 962:
case 76:
case 2582:
case 1712:
case 2820:
case 661:
case 458:
case 3700:
case 3344:
case 2364:
case 1569:
case 2568:
case 1551:
case 2879:
case 1233:
case 1756:
case 3232:
case 2091:
case 1076:
case 3286:
case 1290:
case 3396:
case 356:
case 1144:
case 1697:
case 3043:
case 3517:
case 2063:
case 3915:
case 2005:
case 1220:
case 2715:
case 2257:
case 916:
case 1126:
case 4069:
case 985:
case 4051:
case 2307:
case 1585:
case 1481:
case 123:
case 2824:
case 2632:
case 3563:
case 3239:
case 3907:
case 3521:
case 487:
case 3726:
case 2846:
case 3156:
case 206:
case 1780:
case 3591:
case 304:
case 2944:
case 4062:
case 3744:
case 3300:
case 1206:
case 2764:
case 1455:
case 1971:
case 1049:
case 3250:
case 1789:
case 2788:
case 1314:
case 839:
case 465:
case 1801:
case 1274:
case 3084:
case 3628:
case 2108:
case 1109:
case 1825:
case 1222:
case 3309:
case 36:
case 2241:
case 3114:
case 3261:
case 1547:
case 490:
case 3877:
case 3136:
case 1895:
case 3230:
case 4018:
case 2454:
case 1435:
case 832:
case 247:
case 692:
case 1253:
case 700:
case 1466:
case 942:
case 2983:
case 1067:
case 2512:
case 1102:
case 2623:
case 4060:
case 668:
case 3641:
case 2145:
case 1782:
case 67:
case 2661:
case 3709:
case 1004:
case 684:
case 3189:
case 1299:
case 2298:
case 886:
case 949:
case 2388:
case 118:
case 1389:
case 2909:
case 879:
case 3019:
case 4031:
case 983:
case 2237:
case 3372:
case 35:
case 3093:
case 1124:
case 3212:
case 645:
case 1887:
case 2619:
case 3815:
case 3528:
case 2552:
case 775:
case 1172:
case 719:
case 712:
case 3394:
case 3537:
case 3284:
case 3779:
case 960:
case 3061:
case 2366:
case 3346:
case 259:
case 1647:
case 1978:
case 2465:
case 1022:
case 811:
case 2766:
case 3541:
case 2896:
case 2335:
case 121:
case 2612:
case 565:
case 2436:
case 2482:
case 3966:
case 3794:
case 448:
case 1631:
case 2028:
case 590:
case 1053:
case 3724:
case 497:
case 3408:
case 2593:
case 3772:
case 20:
case 957:
case 1267:
case 2777:
case 2456:
case 1020:
case 2205:
case 4027:
case 1242:
case 2539:
case 1538:
case 480:
case 3648:
case 1845:
case 587:
case 2802:
case 3487:
case 733:
case 834:
case 1685:
case 2550:
case 3888:
case 3116:
case 4038:
case 636:
case 3617:
case 1901:
case 1527:
case 1276:
case 2291:
case 3086:
case 3621:
case 1407:
case 2101:
case 2125:
case 1808:
case 643:
case 1716:
case 3605:
case 2586:
case 324:
case 993:
case 676:
case 689:
case 226:
case 874:
case 3050:
case 2532:
case 1249:
case 694:
case 453:
case 1006:
case 103:
case 88:
case 2075:
case 3557:
case 3955:
case 2377:
case 1734:
case 2610:
case 1464:
case 2195:
case 981:
case 1848:
case 3161:
case 3799:
case 3645:
case 3578:
case 2665:
case 3869:
case 3374:
case 2603:
case 1122:
case 320:
case 43:
case 940:
case 2208:
case 870:
case 1323:
case 90:
case 2999:
case 186:
case 257:
case 2358:
case 690:
case 172:
case 3073:
case 1283:
case 1928:
case 2419:
case 3392:
case 3130:
case 1072:
case 3282:
case 1752:
case 1688:
case 2689:
case 1024:
case 3753:
case 558:
case 2245:
case 1352:
case 3353:
case 3265:
case 21:
case 2992:
case 3329:
case 1202:
case 1460:
case 3608:
case 1805:
case 2128:
case 4066:
case 484:
case 1153:
case 1793:
case 3862:
case 2484:
case 2573:
case 295:
case 1891:
case 825:
case 139:
case 2682:
case 2758:
case 128:
case 307:
case 1079:
case 2078:
case 319:
case 545:
case 2412:
case 2922:
case 3958:
case 3774:
case 1941:
case 492:
case 3525:
case 3818:
case 1615:
case 3417:
case 3501:
case 3333:
case 3186:
case 1332:
case 1750:
case 3132:
case 2271:
case 3280:
case 2804:
case 2906:
case 1485:
case 3016:
case 281:
case 1739:
case 2738:
case 724:
case 1577:
case 3448:
case 2867:
case 293:
case 1469:
case 2797:
case 1451:
case 2157:
case 1975:
case 926:
case 1226:
case 346:
case 589:
case 3938:
case 543:
case 2656:
case 3491:
case 2410:
case 3831:
case 2095:
case 3139:
case 1555:
case 2175:
case 1957:
case 4081:
case 988:
case 2813:
case 3720:
case 2534:
case 2287:
case 2397:
case 2840:
case 3150:
case 3860:
case 1581:
case 2711:
case 1200:
case 1462:
case 2025:
case 3463:
case 3405:
case 3733:
case 663:
case 1350:
case 1732:
case 3256:
case 677:
case 1886:
case 3673:
case 1235:
case 2740:
case 3890:
case 1984:
case 769:
case 3430:
case 1509:
case 231:
case 2508:
case 1118:
case 3493:
case 3940:
case 1088:
case 3833:
case 2089:
case 1624:
case 605:
case 1832:
case 3514:
case 1694:
case 798:
case 861:
case 528:
case 539:
case 3461:
case 1912:
case 3045:
case 2065:
case 3913:
case 3582:
case 4009:
case 1474:
case 1646:
case 1583:
case 145:
case 762:
case 2713:
case 2931:
case 96:
case 2273:
case 1839:
case 1131:
case 2437:
case 367:
case 2498:
case 2767:
case 1499:
case 2897:
case 3654:
case 586:
case 1502:
case 2112:
case 2036:
case 2678:
case 3967:
case 3718:
case 3904:
case 200:
case 391:
case 1160:
case 2014:
case 572:
case 3589:
case 72:
case 2340:
case 2704:
case 637:
case 2428:
case 855:
case 2918:
case 1919:
case 3360:
case 59:
case 3008:
case 3452:
case 271:
case 48:
case 1823:
case 2776:
case 1791:
case 2168:
case 1910:
case 316:
case 3369:
case 2056:
case 513:
case 3225:
case 1544:
case 3295:
case 3117:
case 4044:
case 3385:
case 496:
case 1490:
case 3486:
case 1015:
case 1943:
case 1526:
case 3616:
case 1721:
case 3087:
case 754:
case 1185:
case 2742:
case 904:
case 434:
case 1321:
case 706:
case 2342:
case 1363:
case 3785:
case 603:
case 1162:
case 3853:
case 2625:
case 3105:
case 1748:
case 3556:
case 3769:
case 3191:
case 194:
case 1064:
case 1500:
case 2110:
case 2216:
case 2969:
case 2951:
case 143:
case 176:
case 2376:
case 1391:
case 3071:
case 1281:
case 94:
case 521:
case 2252:
case 87:
case 900:
case 3983:
case 2302:
case 537:
case 69:
case 1674:
case 1047:
case 672:
case 1834:
case 222:
case 3512:
case 3145:
case 841:
case 1494:
case 971:
case 1914:
case 1424:
case 1708:
case 229:
case 1692:
case 1540:
case 3693:
case 615:
case 783:
case 884:
case 3909:
case 3630:
case 3298:
case 1472:
case 1653:
case 3788:
case 3108:
case 3519:
case 398:
case 2988:
case 362:
case 151:
case 278:
case 2259:
case 2114:
case 628:
case 632:
case 1567:
case 2012:
case 927:
case 1965:
case 4004:
case 2478:
case 401:
case 3902:
case 931:
case 2293:
case 3454:
case 1031:
case 1699:
case 2182:
case 2698:
case 2230:
case 1745:
case 347:
case 577:
case 3315:
case 3187:
case 3707:
case 3632:
case 3416:
case 1085:
case 3926:
case 3017:
case 3543:
case 1873:
case 1238:
case 2239:
case 1387:
case 2726:
case 1115:
case 2521:
case 4076:
case 2907:
case 3944:
case 2866:
case 1576:
case 2591:
case 1227:
case 306:
case 1771:
case 2796:
case 3846:
case 2964:
case 1620:
case 3510:
case 3996:
case 1980:
case 2744:
case 2250:
case 1051:
case 3048:
case 2700:
case 163:
case 1549:
case 2232:
case 3879:
case 2675:
case 3568:
case 3900:
case 256:
case 187:
case 1371:
case 2396:
case 2835:
case 3639:
case 354:
case 1211:
case 1956:
case 1164:
case 2010:
case 2915:
case 613:
case 1107:
case 3021:
case 2326:
case 1787:
case 3307:
case 785:
case 3719:
case 3140:
case 2850:
case 809:
case 1340:
case 2919:
case 2266:
case 1918:
case 2429:
case 2453:
case 171:
case 640:
case 3083:
case 1838:
case 1082:
case 3272:
case 1437:
case 60:
case 1498:
case 1313:
case 990:
case 2502:
case 802:
case 557:
case 770:
case 718:
case 3224:
case 2694:
case 1441:
case 2147:
case 3002:
case 2422:
case 1065:
case 2646:
case 4008:
case 2474:
case 951:
case 2583:
case 3666:
case 652:
case 1367:
case 1931:
case 2235:
case 2886:
case 1304:
case 2984:
case 560:
case 127:
case 1811:
case 467:
case 131:
case 2509:
case 1960:
case 2492:
case 1089:
case 3279:
case 3104:
case 2832:
case 1695:
case 3898:
case 723:
case 396:
case 1110:
case 2064:
case 1951:
case 2968:
case 1969:
case 3310:
case 3948:
case 3096:
case 1376:
case 2391:
case 276:
case 1080:
case 544:
case 374:
case 626:
case 1587:
case 2305:
case 2321:
case 2363:
case 2255:
case 1342:
case 6:
case 2007:
case 1143:
case 3917:
case 1601:
case 3427:
case 3515:
case 3921:
case 2830:
case 3905:
case 3963:
case 963:
case 987:
case 2705:
case 2526:
case 2433:
case 2277:
case 2721:
case 2317:
case 2185:
case 3710:
case 2823:
case 3841:
case 2151:
case 1168:
case 1457:
case 1571:
case 2596:
case 334:
case 2861:
case 3149:
case 114:
case 2420:
case 2910:
case 3564:
case 3991:
case 1012:
case 3945:
case 1877:
case 3547:
case 3013:
case 2903:
case 3292:
case 1136:
case 1383:
case 3183:
case 2745:
case 1230:
case 3895:
case 1182:
case 1698:
case 2031:
case 711:
case 3703:
case 552:
case 807:
case 3789:
case 3314:
case 3109:
case 3518:
case 330:
case 3801:
case 3274:
case 1223:
case 1988:
case 2989:
case 251:
case 3222:
case 1261:
case 2258:
case 2060:
case 178:
case 3040:
case 16:
case 820:
case 2424:
case 301:
case 469:
case 2816:
case 1709:
case 2540:
case 1189:
case 2188:
case 657:
case 3560:
case 1881:
case 3908:
case 447:
case 3714:
case 3389:
case 370:
case 540:
case 2472:
case 50:
case 1019:
case 3531:
case 265:
case 498:
case 2345:
case 1302:
case 3229:
case 2982:
case 3303:
case 958:
case 2513:
case 2047:
case 122:
case 2834:
case 3782:
case 1783:
case 1641:
case 2494:
case 462:
case 1425:
case 3042:
case 1915:
case 734:
case 2107:
case 1043:
case 3220:
case 2787:
case 1326:
case 588:
case 3585:
case 1700:
case 1548:
case 1180:
case 263:
case 287:
case 1286:
case 3076:
case 3380:
case 1835:
case 2371:
case 1396:
case 3697:
case 2956:
case 1591:
case 2576:
case 4021:
case 78:
case 1964:
case 1156:
case 2771:
case 4005:
case 3100:
case 5:
case 681:
case 2980:
case 3971:
case 1657:
case 2051:
case 1068:
case 3356:
case 1250:
case 3049:
case 796:
case 644:
case 3481:
case 526:
case 2470:
case 994:
case 2085:
case 2542:
case 1239:
case 2873:
case 2297:
case 1726:
case 693:
case 1907:
case 454:
case 4091:
case 3611:
case 846:
case 1521:
case 1028:
case 2029:
case 3973:
case 529:
case 538:
case 1972:
case 1684:
case 799:
case 1530:
case 867:
case 2053:
case 3409:
case 784:
case 883:
case 3640:
case 3247:
case 849:
case 0:
case 1826:
case 986:
case 1924:
case 1414:
case 2267:
case 237:
case 2179:
case 77:
case 1335:
case 2871:
case 1896:
case 3880:
case 2558:
case 45:
case 1612:
case 1523:
case 1436:
case 3613:
case 671:
case 64:
case 3574:
case 1482:
case 1844:
case 4030:
case 355:
case 792:
case 3135:
case 741:
case 3378:
case 2631:
case 1098:
case 2146:
case 3599:
case 205:
case 3778:
case 3166:
case 3260:
case 277:
case 932:
case 3402:
case 627:
case 1041:
case 1465:
case 2978:
case 2194:
case 631:
case 850:
case 2022:
case 2092:
case 3604:
case 2373:
case 361:
case 409:
case 152:
case 939:
case 2488:
case 348:
case 578:
case 3529:
case 417:
case 1552:
case 2172:
case 3231:
case 1:
case 3285:
case 3836:
case 3395:
case 504:
case 4032:
case 1480:
case 3177:
case 1377:
case 1610:
case 3520:
case 1195:
case 2464:
case 3882:
case 3038:
case 1101:
case 2407:
case 466:
case 2808:
case 3642:
case 3027:
case 3533:
case 3269:
case 1248:
case 2249:
case 3814:
case 1532:
case 3325:
case 1970:
case 3181:
case 1550:
case 3506:
case 3725:
case 913:
case 3011:
case 2901:
case 188:
case 2925:
case 1291:
case 2276:
case 885:
case 2415:
case 1221:
case 2020:
case 1777:
case 424:
case 2334:
case 1205:
case 2538:
case 2242:
case 3262:
case 2651:
case 1668:
case 3865:
case 3155:
case 2845:
case 4050:
case 556:
case 1802:
case 3803:
case 3810:
case 1137:
case 898:
case 2723:
case 761:
case 3741:
case 3683:
case 678:
case 1876:
case 3035:
case 2566:
case 3546:
case 228:
case 2759:
case 66:
case 2761:
case 239:
case 2199:
case 3413:
case 3398:
case 1636:
case 3288:
case 2079:
case 1412:
case 862:
case 748:
case 1614:
case 2730:
case 1992:
case 797:
case 905:
case 3993:
case 527:
case 977:
case 3609:
case 847:
case 3572:
case 1484:
case 2793:
case 33:
case 1842:
case 1953:
case 3952:
case 921:
case 1929:
case 2283:
case 4054:
case 368:
case 1689:
case 2192:
case 82:
case 392:
case 755:
case 571:
case 341:
case 419:
case 3404:
case 3798:
case 3467:
case 2848:
case 3158:
case 2447:
case 1141:
case 3868:
case 1665:
case 2094:
case 399:
case 3737:
case 2209:
case 1554:
case 1208:
case 1999:
case 2998:
case 2174:
case 638:
case 286:
case 1358:
case 384:
case 2359:
case 3066:
case 656:
case 1840:
case 2786:
case 4034:
case 1327:
case 2581:
case 1711:
case 1516:
case 2106:
case 3626:
case 1001:
case 2462:
case 1443:
case 3884:
case 2200:
case 3986:
case 3442:
case 473:
case 2607:
case 2350:
case 3197:
case 3215:
case 3757:
case 2664:
case 1920:
case 1410:
case 3375:
case 3138:
case 2339:
case 1397:
case 1287:
case 3077:
case 2739:
case 3055:
case 1867:
case 2577:
case 2975:
case 1157:
case 2469:
case 3600:
case 3357:
case 3775:
case 3207:
case 1656:
case 2615:
case 3819:
case 3111:
case 2750:
case 2386:
case 1804:
case 3081:
case 604:
case 2133:
case 1906:
case 2485:
case 1311:
case 3950:
case 864:
case 2507:
case 2411:
case 2921:
case 3490:
case 1942:
case 3721:
case 1087:
case 1432:
case 3277:
case 3526:
case 3705:
case 1616:
case 787:
case 1892:
case 3763:
case 3893:
case 2681:
case 2743:
case 3670:
case 1634:
case 2710:
case 1148:
case 2149:
case 1580:
case 3596:
case 2655:
case 2841:
case 336:
case 1369:
case 116:
case 3910:
case 3420:
case 2991:
case 1976:
case 1225:
case 1201:
case 2564:
case 1874:
case 2000:
case 1191:
case 2176:
case 2497:
case 2768:
case 1769:
case 1899:
case 3064:
case 296:
case 2837:
case 1439:
case 2044:
case 923:
case 2948:
case 573:
case 3968:
case 2310:
case 389:
case 274:
case 3391:
case 546:
case 2270:
case 2096:
case 1071:
case 624:
case 1450:
case 2026:
case 3305:
case 3406:
case 28:
case 3007:
case 3162:
case 1163:
case 2515:
case 4056:
case 2828:
case 2427:
case 414:
case 507:
case 1459:
case 2002:
case 2458:
case 2857:
case 4014:
case 3694:
case 400:
case 3912:
case 3422:
case 1045:
case 2666:
case 1582:
case 1820:
case 575:
case 751:
case 1760:
case 3886:
case 1890:
case 3235:
case 3118:
case 1940:
case 3492:
case 211:
case 1318:
case 1514:
case 1833:
case 2279:
case 1904:
case 2294:
case 2588:
case 4003:
case 191:
case 142:
case 3429:
case 1360:
case 2009:
case 1008:
case 2272:
case 431:
case 520:
case 901:
case 3839:
case 427:
case 1654:
case 602:
case 149:
case 918:
case 1503:
case 3502:
case 183:
case 1967:
case 2224:
case 3679:
case 80:
case 1331:
case 2780:
case 3227:
case 1846:
case 3771:
case 3576:
case 782:
case 4043:
case 98:
case 1510:
case 2100:
case 2206:
case 1894:
case 2971:
case 1764:
case 3980:
case 1048:
case 2049:
case 3069:
case 3051:
case 1315:
case 893:
case 1187:
case 2481:
case 646:
case 3085:
case 1416:
case 1926:
case 996:
case 1632:
case 223:
case 3873:
case 4010:
case 789:
case 974:
case 743:
case 3297:
case 934:
case 1005:
case 1021:
case 3787:
case 2126:
case 1257:
case 3606:
case 1715:
case 2987:
case 633:
case 1364:
case 2878:
case 2233:
case 1171:
case 2477:
case 2290:
case 154:
case 2380:
case 1639:
case 387:
case 3956:
case 3211:
case 2144:
case 3708:
case 3914:
case 3424:
case 2560:
case 390:
case 1870:
case 2004:
case 3540:
case 3188:
case 1630:
case 218:
case 1388:
case 2714:
case 502:
case 1298:
case 2299:
case 1909:
case 1237:
case 4084:
case 2736:
case 2531:
case 2253:
case 3674:
case 2303:
case 1228:
case 1983:
case 3622:
case 3834:
case 2102:
case 46:
case 478:
case 3047:
case 3936:
case 1623:
case 12:
case 758:
case 410:
case 2658:
case 1659:
case 2547:
case 3479:
case 429:
case 2945:
case 860:
case 3567:
case 2292:
case 2382:
case 3699:
case 3745:
case 2336:
case 2895:
case 1454:
case 2765:
case 2183:
case 2703:
case 147:
case 225:
case 2789:
case 3653:
case 675:
case 2274:
case 55:
case 2825:
case 2109:
case 1519:
case 162:
case 745:
case 3308:
case 3989:
case 607:
case 1241:
case 2040:
case 422:
case 3060:
case 3504:
case 2889:
case 616:
case 2181:
case 1032:
case 685:
case 4075:
case 2701:
case 2725:
case 1116:
case 4:
case 2506:
case 3316:
case 3276:
case 814:
case 3090:
case 3597:
case 426:
case 3995:
case 2262:
case 3242:
case 3538:
case 253:
case 2155:
case 3845:
case 1575:
case 3669:
case 3651:
case 2803:
case 2395:
case 1471:
case 506:
case 1557:
case 488:
case 2444:
case 1691:
case 1605:
case 3716:
case 1621:
case 3407:
case 3662:
case 124:
case 2590:
case 1663:
case 4057:
case 3249:
case 2916:
case 2251:
case 2426:
case 2533:
case 3006:
case 1394:
case 297:
case 1284:
case 1537:
case 650:
case 569:
case 1935:
case 2778:
case 2954:
case 2166:
case 1598:
case 3146:
case 2856:
case 1346:
case 2058:
case 1059:
case 1445:
case 732:
case 3647:
case 3754:
case 1023:
case 3978:
case 3124:
case 598:
case 3373:
case 3092:
case 15:
case 728:
case 1212:
case 261:
case 1815:
case 248:
case 2553:
case 1173:
case 1324:
case 4037:
case 649:
case 3029:
case 1408:
case 683:
case 1807:
case 3053:
case 3773:
case 2640:
case 1772:
case 459:
case 2880:
case 3558:
case 3871:
case 337:
case 84:
case 800:
case 2522:
case 321:
case 3354:
case 97:
case 2483:
case 941:
case 52:
case 1864:
case 79:
case 2574:
case 3631:
case 642:
case 2135:
case 3975:
case 1847:
case 3451:
case 1320:
case 3226:
case 1034:
case 1448:
case 2939:
case 2600:
case 173:
case 2207:
case 2775:
case 4001:
case 1927:
case 2264:
case 2111:
case 1417:
case 2819:
case 4095:
case 3615:
case 804:
case 3750:
case 1333:
case 3133:
case 606:
case 2081:
case 1132:
case 3070:
case 1687:
case 1016:
case 3581:
case 654:
case 2570:
case 3786:
case 1790:
case 493:
case 1150:
case 2932:
case 2442:
case 953:
case 1463:
case 2986:
case 1306:
case 3462:
case 3350:
case 856:
case 1405:
case 3664:
case 2197:
case 2215:
case 1491:
case 2476:
case 2757:
case 1139:
case 2375:
case 3957:
case 481:
case 3339:
case 2696:
case 1671:
case 516:
case 585:
case 721:
case 542:
case 372:
case 495:
case 1392:
case 268:
case 3817:
case 1282:
case 62:
case 3928:
case 1073:
case 3418:
case 27:
case 3393:
case 292:
case 1885:
case 3330:
case 3688:
case 2404:
case 4078:
case 822:
case 838:
case 3447:
case 1851:
case 2868:
case 1799:
case 135:
case 1214:
case 1645:
case 3122:
case 2737:
case 299:
case 1123:
case 3094:
case 3323:
case 583:
case 3998:
case 3209:
case 1322:
case 2066:
case 3535:
case 549:
case 379:
case 284:
case 315:
case 3937:
case 2341:
case 386:
case 3046:
case 662:
case 1054:
case 3431:
case 3759:
case 3761:
case 2035:
case 2741:
case 961:
case 3891:
case 878:
case 86:
case 1289:
case 2288:
case 948:
case 119:
case 2398:
case 1399:
case 698:
case 2594:
case 2961:
case 1353:
case 2524:
case 3352:
case 3730:
case 705:
case 112:
case 1329:
case 2993:
case 2440:
case 2930:
case 332:
case 457:
case 3129:
case 3863:
case 777:
case 3793:
case 23:
case 1862:
case 669:
case 2572:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760576402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,];
var gg_b = "1760576402/";

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
