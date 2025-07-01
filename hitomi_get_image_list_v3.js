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
case 3177:
case 3734:
case 1328:
case 2610:
case 3093:
case 3355:
case 2366:
case 2441:
case 3702:
case 3674:
case 1506:
case 890:
case 225:
case 486:
case 3495:
case 1099:
case 3846:
case 2771:
case 3493:
case 1320:
case 807:
case 1472:
case 2618:
case 902:
case 3161:
case 3546:
case 1547:
case 1523:
case 1811:
case 3720:
case 1920:
case 2217:
case 1679:
case 2388:
case 4027:
case 4043:
case 2241:
case 830:
case 1825:
case 205:
case 869:
case 1847:
case 1823:
case 1511:
case 3507:
case 4045:
case 3190:
case 3558:
case 1755:
case 1530:
case 2380:
case 3829:
case 1935:
case 2884:
case 2966:
case 3529:
case 3728:
case 3850:
case 3675:
case 1334:
case 3342:
case 4009:
case 1176:
case 1272:
case 3673:
case 2353:
case 3366:
case 575:
case 1780:
case 3980:
case 2093:
case 679:
case 742:
case 3610:
case 3883:
case 84:
case 623:
case 2734:
case 2942:
case 2177:
case 3885:
case 4060:
case 3618:
case 2546:
case 1651:
case 2161:
case 552:
case 80:
case 112:
case 702:
case 399:
case 3771:
case 123:
case 1788:
case 3041:
case 103:
case 2558:
case 2190:
case 2507:
case 339:
case 2939:
case 3241:
case 3388:
case 3217:
case 164:
case 1016:
case 722:
case 2858:
case 643:
case 4086:
case 2354:
case 2673:
case 2675:
case 2094:
case 2850:
case 2728:
case 3584:
case 470:
case 2829:
case 1766:
case 664:
case 3884:
case 3380:
case 218:
case 2293:
case 1367:
case 3986:
case 3864:
case 363:
case 1121:
case 2492:
case 2909:
case 1115:
case 640:
case 2079:
case 3251:
case 4066:
case 2548:
case 1113:
case 473:
case 429:
case 1210:
case 2927:
case 344:
case 3119:
case 530:
case 2840:
case 2705:
case 2092:
case 3582:
case 2344:
case 2952:
case 590:
case 2732:
case 3968:
case 2196:
case 787:
case 2292:
case 409:
case 1010:
case 2181:
case 757:
case 2704:
case 2672:
case 620:
case 1418:
case 4088:
case 2856:
case 3051:
case 3863:
case 3601:
case 1018:
case 324:
case 3391:
case 4080:
case 1031:
case 547:
case 449:
case 2309:
case 3386:
case 3565:
case 120:
case 3563:
case 1987:
case 3787:
case 1760:
case 277:
case 4055:
case 2564:
case 1473:
case 1808:
case 19:
case 37:
case 1475:
case 204:
case 2251:
case 316:
case 3537:
case 2986:
case 1508:
case 1557:
case 910:
case 46:
case 2368:
case 3344:
case 1332:
case 2582:
case 69:
case 3352:
case 1500:
case 1197:
case 3840:
case 3703:
case 1274:
case 1743:
case 3943:
case 3927:
case 1727:
case 1800:
case 3540:
case 244:
case 3479:
case 1075:
case 1073:
case 52:
case 1304:
case 1745:
case 1178:
case 957:
case 3343:
case 3345:
case 3672:
case 1273:
case 3704:
case 63:
case 1744:
case 1932:
case 651:
case 1693:
case 3292:
case 1305:
case 488:
case 3196:
case 1303:
case 1074:
case 987:
case 4042:
case 875:
case 3699:
case 1822:
case 3309:
case 181:
case 893:
case 4054:
case 1536:
case 1522:
case 2865:
case 1349:
case 511:
case 1170:
case 2051:
case 3856:
case 224:
case 3005:
case 3792:
case 1244:
case 3655:
case 3136:
case 1252:
case 1635:
case 2666:
case 3374:
case 1027:
case 3975:
case 1775:
case 34:
case 3122:
case 3226:
case 1773:
case 1045:
case 2310:
case 3570:
case 1581:
case 3049:
case 2331:
case 30:
case 1896:
case 3578:
case 3779:
case 3878:
case 825:
case 290:
case 1881:
case 2169:
case 1659:
case 1596:
case 899:
case 3100:
case 686:
case 2688:
case 736:
case 860:
case 839:
case 3432:
case 3404:
case 3249:
case 2751:
case 3897:
case 1379:
case 2515:
case 1243:
case 1634:
case 1245:
case 2910:
case 3026:
case 3004:
case 57:
case 3373:
case 2821:
case 2513:
case 984:
case 3032:
case 3205:
case 3157:
case 1774:
case 3974:
case 516:
case 1602:
case 2487:
case 156:
case 1137:
case 403:
case 2973:
case 2226:
case 2122:
case 347:
case 211:
case 2449:
case 3310:
case 524:
case 2975:
case 694:
case 3666:
case 2653:
case 2374:
case 2792:
case 2232:
case 1086:
case 996:
case 2878:
case 2639:
case 390:
case 374:
case 3318:
case 3331:
case 2049:
case 20:
case 1091:
case 2897:
case 1951:
case 544:
case 134:
case 1718:
case 2426:
case 22:
case 936:
case 2432:
case 1286:
case 1468:
case 3688:
case 1819:
case 1060:
case 1460:
case 3815:
case 2203:
case 784:
case 818:
case 412:
case 3521:
case 2108:
case 2654:
case 1710:
case 479:
case 3821:
case 2373:
case 2004:
case 2375:
case 1701:
case 1184:
case 1917:
case 87:
case 3316:
case 4010:
case 2259:
case 3071:
case 1480:
case 3467:
case 2876:
case 545:
case 1687:
case 2999:
case 3660:
case 1088:
case 816:
case 3741:
case 560:
case 1162:
case 2138:
case 2652:
case 755:
case 1488:
case 2002:
case 505:
case 4018:
case 2111:
case 3067:
case 539:
case 2147:
case 2034:
case 785:
case 2125:
case 673:
case 2645:
case 961:
case 695:
case 2643:
case 400:
case 525:
case 2124:
case 599:
case 497:
case 1280:
case 3267:
case 173:
case 393:
case 3271:
case 2609:
case 2433:
case 3686:
case 1183:
case 129:
case 1341:
case 2435:
case 1466:
case 1185:
case 375:
case 195:
case 440:
case 3301:
case 167:
case 919:
case 1150:
case 3999:
case 1799:
case 2467:
case 518:
case 158:
case 2071:
case 1454:
case 3220:
case 3576:
case 877:
case 2316:
case 4074:
case 3434:
case 804:
case 844:
case 1042:
case 1394:
case 3228:
case 1626:
case 985:
case 1890:
case 481:
case 1054:
case 2471:
case 3793:
case 1107:
case 451:
case 1590:
case 1632:
case 3233:
case 1158:
case 738:
case 1255:
case 2668:
case 3138:
case 3235:
case 1995:
case 3002:
case 3459:
case 66:
case 49:
case 1393:
case 3202:
case 1053:
case 2189:
case 3028:
case 3234:
case 3643:
case 1146:
case 3420:
case 2512:
case 761:
case 2691:
case 824:
case 3428:
case 275:
case 4075:
case 2686:
case 1455:
case 4017:
case 500:
case 2052:
case 3460:
case 256:
case 2392:
case 2044:
case 1513:
case 1821:
case 597:
case 3710:
case 3164:
case 2634:
case 1515:
case 630:
case 780:
case 3519:
case 334:
case 3718:
case 2140:
case 3951:
case 1751:
case 1931:
case 3731:
case 127:
case 3291:
case 2444:
case 3671:
case 3060:
case 1688:
case 2009:
case 647:
case 2881:
case 2659:
case 3086:
case 370:
case 190:
case 2427:
case 2979:
case 174:
case 394:
case 3091:
case 2896:
case 717:
case 2581:
case 1331:
case 2620:
case 537:
case 439:
case 2045:
case 1310:
case 147:
case 901:
case 2027:
case 520:
case 2252:
case 2156:
case 674:
case 3268:
case 3165:
case 2244:
case 3227:
case 1642:
case 1375:
case 980:
case 1373:
case 2710:
case 3148:
case 2667:
case 950:
case 1157:
case 1205:
case 1108:
case 843:
case 356:
case 3137:
case 1203:
case 3602:
case 2060:
case 2819:
case 2182:
case 1432:
case 2671:
case 1249:
case 2291:
case 4093:
case 12:
case 2718:
case 234:
case 4095:
case 864:
case 2951:
case 418:
case 10:
case 741:
case 812:
case 1049:
case 3620:
case 3581:
case 71:
case 3443:
case 3427:
case 1578:
case 1779:
case 270:
case 2260:
case 1403:
case 1878:
case 3596:
case 611:
case 3659:
case 823:
case 3881:
case 60:
case 1136:
case 3633:
case 3244:
case 1005:
case 1792:
case 3409:
case 3992:
case 1374:
case 1653:
case 3775:
case 3628:
case 551:
case 3045:
case 3773:
case 701:
case 1973:
case 53:
case 14:
case 1020:
case 267:
case 4092:
case 36:
case 837:
case 2716:
case 2317:
case 820:
case 1399:
case 2466:
case 1059:
case 1433:
case 229:
case 3605:
case 2280:
case 3393:
case 1033:
case 3055:
case 778:
case 3053:
case 3439:
case 3603:
case 1124:
case 4079:
case 3561:
case 3994:
case 1028:
case 1372:
case 1125:
case 1228:
case 1147:
case 3626:
case 3604:
case 1972:
case 3158:
case 1644:
case 3632:
case 3255:
case 249:
case 2080:
case 1793:
case 1795:
case 1002:
case 1652:
case 953:
case 2088:
case 2687:
case 3799:
case 235:
case 800:
case 358:
case 1130:
case 388:
case 1576:
case 3454:
case 2184:
case 1434:
case 2917:
case 3898:
case 3129:
case 3183:
case 1271:
case 881:
case 444:
case 175:
case 2877:
case 3185:
case 3341:
case 2577:
case 3317:
case 367:
case 2649:
case 1691:
case 732:
case 682:
case 693:
case 512:
case 2242:
case 2561:
case 2861:
case 978:
case 2053:
case 1189:
case 2603:
case 2605:
case 523:
case 3280:
case 2055:
case 579:
case 477:
case 424:
case 3266:
case 3162:
case 2253:
case 753:
case 2590:
case 8:
case 1668:
case 2632:
case 503:
case 1471:
case 1067:
case 783:
case 2626:
case 2442:
case 1717:
case 3184:
case 2129:
case 1901:
case 3701:
case 288:
case 89:
case 1467:
case 133:
case 3480:
case 1071:
case 309:
case 2150:
case 335:
case 2830:
case 639:
case 2176:
case 789:
case 3416:
case 490:
case 1584:
case 2928:
case 908:
case 2753:
case 2935:
case 1966:
case 1884:
case 145:
case 474:
case 343:
case 1380:
case 2692:
case 407:
case 509:
case 2959:
case 3371:
case 2823:
case 2299:
case 715:
case 160:
case 2538:
case 948:
case 2679:
case 2525:
case 364:
case 645:
case 1217:
case 1862:
case 2920:
case 2811:
case 2547:
case 3651:
case 3889:
case 2824:
case 2806:
case 3001:
case 3112:
case 2472:
case 1631:
case 312:
case 323:
case 1771:
case 379:
case 3589:
case 1988:
case 3788:
case 125:
case 2506:
case 2524:
case 1366:
case 1585:
case 928:
case 1980:
case 1767:
case 469:
case 1610:
case 2754:
case 567:
case 3401:
case 4087:
case 3692:
case 243:
case 2367:
case 3530:
case 1955:
case 1733:
case 1735:
case 1198:
case 3302:
case 1295:
case 3334:
case 3928:
case 989:
case 3272:
case 2416:
case 588:
case 3176:
case 1354:
case 1720:
case 3547:
case 3525:
case 264:
case 1494:
case 3838:
case 3825:
case 3299:
case 3538:
case 3959:
case 1558:
case 915:
case 3823:
case 203:
case 44:
case 2371:
case 2589:
case 1846:
case 1339:
case 3099:
case 870:
case 3524:
case 2971:
case 1493:
case 4026:
case 223:
case 279:
case 3359:
case 2216:
case 4032:
case 3320:
case 894:
case 2651:
case 3328:
case 2401:
case 1734:
case 3742:
case 1177:
case 3754:
case 1954:
case 728:
case 1355:
case 1093:
case 2780:
case 42:
case 1702:
case 3902:
case 1095:
case 1674:
case 3335:
case 1353:
case 3474:
case 1699:
case 2987:
case 2760:
case 726:
case 895:
case 1556:
case 2641:
case 1309:
case 3822:
case 3170:
case 2410:
case 3349:
case 962:
case 4002:
case 3178:
case 3275:
case 3273:
case 1726:
case 3904:
case 2431:
case 2010:
case 1181:
case 2768:
case 2569:
case 1732:
case 3932:
case 3752:
case 3303:
case 3074:
case 4020:
case 67:
case 1344:
case 1705:
case 3:
case 1703:
case 3500:
case 1352:
case 1540:
case 1943:
case 1927:
case 3727:
case 4059:
case 2210:
case 3073:
case 17:
case 3808:
case 2231:
case 1548:
case 1749:
case 914:
case 2218:
case 3475:
case 1079:
case 200:
case 835:
case 1537:
case 265:
case 2387:
case 4028:
case 3508:
case 1909:
case 1492:
case 3709:
case 2786:
case 3018:
case 1601:
case 3617:
case 1863:
case 2349:
case 337:
case 1391:
case 4067:
case 762:
case 281:
case 926:
case 3760:
case 3987:
case 1787:
case 2474:
case 3641:
case 320:
case 2074:
case 2303:
case 2693:
case 1968:
case 3569:
case 433:
case 2273:
case 4071:
case 3869:
case 3431:
case 1451:
case 594:
case 2178:
case 1882:
case 493:
case 144:
case 2694:
case 971:
case 475:
case 2727:
case 2743:
case 340:
case 2197:
case 946:
case 677:
case 2508:
case 3121:
case 452:
case 1986:
case 3786:
case 1864:
case 644:
case 300:
case 1360:
case 714:
case 2475:
case 3115:
case 2473:
case 2857:
case 177:
case 1564:
case 1874:
case 2715:
case 3240:
case 1370:
case 802:
case 11:
case 408:
case 1422:
case 2465:
case 3109:
case 2721:
case 990:
case 1574:
case 3456:
case 2463:
case 2063:
case 2689:
case 1997:
case 1257:
case 1208:
case 1105:
case 2065:
case 448:
case 1022:
case 842:
case 101:
case 4090:
case 3145:
case 74:
case 3143:
case 947:
case 2919:
case 1378:
case 121:
case 3623:
case 1978:
case 254:
case 3879:
case 284:
case 3256:
case 1400:
case 2263:
case 1607:
case 2265:
case 3144:
case 3611:
case 3996:
case 3630:
case 1457:
case 1408:
case 621:
case 2082:
case 813:
case 1000:
case 969:
case 2714:
case 428:
case 822:
case 3892:
case 2464:
case 3448:
case 72:
case 591:
case 1314:
case 2456:
case 1685:
case 1069:
case 3721:
case 1921:
case 2109:
case 557:
case 459:
case 117:
case 3191:
case 2240:
case 94:
case 2127:
case 911:
case 1719:
case 1518:
case 747:
case 2381:
case 2145:
case 1531:
case 617:
case 1831:
case 2056:
case 3851:
case 2624:
case 1818:
case 2606:
case 2144:
case 3482:
case 2611:
case 384:
case 354:
case 3319:
case 2625:
case 2440:
case 2579:
case 180:
case 2981:
case 2647:
case 2623:
case 2892:
case 1313:
case 727:
case 92:
case 2040:
case 1315:
case 866:
case 1914:
case 3160:
case 3714:
case 680:
case 236:
case 1269:
case 1167:
case 513:
case 3180:
case 238:
case 2608:
case 2058:
case 868:
case 462:
case 3062:
case 1289:
case 2450:
case 2142:
case 3484:
case 183:
case 1516:
case 1664:
case 2154:
case 522:
case 1912:
case 3712:
case 2594:
case 2029:
case 2961:
case 2894:
case 3188:
case 3462:
case 683:
case 2407:
case 1682:
case 3283:
case 1171:
case 2139:
case 775:
case 3085:
case 2250:
case 4019:
case 3669:
case 793:
case 3083:
case 2893:
case 3284:
case 2446:
case 2895:
case 1501:
case 2046:
case 2377:
case 3841:
case 3517:
case 502:
case 831:
case 2776:
case 2207:
case 3483:
case 1665:
case 782:
case 632:
case 414:
case 1089:
case 3541:
case 3817:
case 1663:
case 3262:
case 1023:
case 1376:
case 1047:
case 1648:
case 2484:
case 3977:
case 426:
case 1025:
case 2062:
case 1038:
case 566:
case 1102:
case 3398:
case 255:
case 1637:
case 0:
case 3450:
case 3608:
case 2180:
case 1011:
case 1430:
case 3058:
case 810:
case 3050:
case 3894:
case 1640:
case 1761:
case 2084:
case 2712:
case 3446:
case 3361:
case 3893:
case 678:
case 3593:
case 1230:
case 975:
case 2085:
case 3139:
case 1006:
case 1798:
case 2817:
case 1135:
case 2262:
case 2541:
case 1656:
case 2166:
case 3155:
case 3258:
case 3207:
case 887:
case 398:
case 361:
case 3622:
case 1976:
case 2517:
case 3533:
case 1290:
case 3930:
case 598:
case 1730:
case 3828:
case 999:
case 3750:
case 3199:
case 1553:
case 1853:
case 2784:
case 1477:
case 202:
case 1670:
case 561:
case 4008:
case 4057:
case 3276:
case 1723:
case 3859:
case 242:
case 1077:
case 1839:
case 1461:
case 4000:
case 3925:
case 2389:
case 3938:
case 1298:
case 3324:
case 3306:
case 1193:
case 1711:
case 3707:
case 1907:
case 3559:
case 3820:
case 3906:
case 1724:
case 1098:
case 3338:
case 2989:
case 1697:
case 1358:
case 718:
case 1307:
case 41:
case 2571:
case 108:
case 3076:
case 3347:
case 476:
case 3746:
case 1946:
case 3534:
case 1261:
case 3802:
case 3476:
case 2212:
case 608:
case 148:
case 4022:
case 960:
case 2567:
case 1854:
case 2785:
case 1842:
case 1498:
case 2729:
case 1866:
case 3784:
case 450:
case 2835:
case 896:
case 1566:
case 1141:
case 480:
case 2535:
case 1383:
case 2533:
case 799:
case 2911:
case 2696:
case 2559:
case 3762:
case 2938:
case 2925:
case 2923:
case 2947:
case 2276:
case 3412:
case 2172:
case 2520:
case 2325:
case 2746:
case 572:
case 159:
case 519:
case 417:
case 3571:
case 2311:
case 2924:
case 1588:
case 836:
case 3785:
case 1985:
case 115:
case 555:
case 2330:
case 3567:
case 689:
case 1621:
case 313:
case 3212:
case 2476:
case 3867:
case 659:
case 1880:
case 3116:
case 322:
case 2534:
case 1615:
case 2802:
case 744:
case 3887:
case 2175:
case 3415:
case 1860:
case 1019:
case 2173:
case 2922:
case 3413:
case 268:
case 2357:
case 2936:
case 432:
case 3765:
case 3763:
case 1963:
case 2698:
case 3587:
case 1560:
case 584:
case 2300:
case 2532:
case 2690:
case 763:
case 916:
case 3021:
case 2804:
case 2832:
case 2270:
case 3013:
case 2504:
case 2526:
case 1419:
case 554:
case 704:
case 453:
case 3213:
case 1612:
case 2661:
case 2803:
case 3118:
case 2900:
case 2503:
case 2505:
case 3782:
case 2849:
case 1586:
case 492:
case 387:
case 662:
case 3414:
case 1363:
case 1219:
case 2677:
case 2748:
case 231:
case 3110:
case 2470:
case 357:
case 2322:
case 3756:
case 855:
case 1337:
case 536:
case 2587:
case 3698:
case 1296:
case 1192:
case 2765:
case 3936:
case 2413:
case 1676:
case 3922:
case 1722:
case 171:
case 944:
case 1281:
case 3278:
case 1179:
case 4024:
case 977:
case 3832:
case 1844:
case 3504:
case 3526:
case 2013:
case 1544:
case 3532:
case 3804:
case 819:
case 2021:
case 106:
case 210:
case 1496:
case 4047:
case 3505:
case 2782:
case 1827:
case 3900:
case 3503:
case 4025:
case 1543:
case 4038:
case 1940:
case 2215:
case 2118:
case 3478:
case 1481:
case 3470:
case 2764:
case 331:
case 3549:
case 4030:
case 3322:
case 3677:
case 596:
case 3737:
case 2414:
case 1937:
case 3297:
case 3849:
case 1708:
case 1509:
case 38:
case 1757:
case 2498:
case 315:
case 1785:
case 3985:
case 3580:
case 553:
case 1567:
case 3621:
case 113:
case 3880:
case 3613:
case 1867:
case 3384:
case 2261:
case 2542:
case 2277:
case 2194:
case 821:
case 613:
case 592:
case 1571:
case 2358:
case 743:
case 2490:
case 3789:
case 1989:
case 2706:
case 2724:
case 2907:
case 2958:
case 2193:
case 602:
case 2711:
case 2298:
case 3962:
case 2539:
case 2346:
case 532:
case 142:
case 801:
case 2747:
case 1412:
case 1012:
case 841:
case 102:
case 3117:
case 2477:
case 1784:
case 2929:
case 2553:
case 3566:
case 3385:
case 3614:
case 454:
case 779:
case 2730:
case 642:
case 2290:
case 723:
case 3329:
case 3542:
case 4056:
case 3261:
case 3554:
case 2880:
case 2983:
case 348:
case 2580:
case 3350:
case 166:
case 1834:
case 2985:
case 943:
case 2588:
case 1906:
case 3724:
case 308:
case 1311:
case 3307:
case 1076:
case 1323:
case 666:
case 2888:
case 3277:
case 3946:
case 496:
case 3194:
case 880:
case 1859:
case 1681:
case 1923:
case 1172:
case 436:
case 3678:
case 3839:
case 3077:
case 3298:
case 3738:
case 1938:
case 3539:
case 2962:
case 3958:
case 1707:
case 3711:
case 1911:
case 3193:
case 578:
case 4048:
case 1533:
case 2385:
case 2566:
case 923:
case 1535:
case 2141:
case 3553:
case 979:
case 2614:
case 3950:
case 1750:
case 2984:
case 3477:
case 2866:
case 3061:
case 3929:
case 817:
case 3809:
case 51:
case 2886:
case 1748:
case 541:
case 1470:
case 3081:
case 2219:
case 4050:
case 1078:
case 2363:
case 3356:
case 1737:
case 1174:
case 576:
case 18:
case 3096:
case 1957:
case 1849:
case 1336:
case 65:
case 781:
case 631:
case 920:
case 1900:
case 3700:
case 1803:
case 3543:
case 1661:
case 1070:
case 3481:
case 4058:
case 68:
case 3545:
case 751:
case 1805:
case 3852:
case 214:
case 1504:
case 892:
case 668:
case 2868:
case 1832:
case 3844:
case 1270:
case 2769:
case 3544:
case 1690:
case 3552:
case 4046:
case 1300:
case 1698:
case 346:
case 3337:
case 1756:
case 3956:
case 7:
case 3736:
case 853:
case 2965:
case 168:
case 3192:
case 1308:
case 3296:
case 940:
case 1357:
case 883:
case 3281:
case 1173:
case 3722:
case 1278:
case 2860:
case 3891:
case 187:
case 3586:
case 3365:
case 2356:
case 3363:
case 4084:
case 3219:
case 3591:
case 157:
case 2948:
case 419:
case 1764:
case 1110:
case 362:
case 1131:
case 2940:
case 951:
case 2543:
case 3151:
case 4062:
case 1014:
case 981:
case 485:
case 2843:
case 2700:
case 1369:
case 3982:
case 1782:
case 765:
case 550:
case 206:
case 3568:
case 1969:
case 3769:
case 1013:
case 2844:
case 3868:
case 2852:
case 580:
case 2179:
case 2340:
case 1015:
case 1415:
case 3860:
case 2348:
case 4083:
case 2281:
case 2722:
case 1413:
case 3965:
case 1765:
case 2736:
case 1421:
case 2296:
case 2337:
case 246:
case 1587:
case 1763:
case 3963:
case 9:
case 2956:
case 1464:
case 3313:
case 3315:
case 2575:
case 3684:
case 3914:
case 1714:
case 3187:
case 2875:
case 442:
case 1082:
case 2873:
case 2796:
case 402:
case 2236:
case 808:
case 1168:
case 350:
case 2397:
case 3662:
case 1263:
case 184:
case 380:
case 154:
case 2126:
case 2104:
case 2222:
case 986:
case 1919:
case 2022:
case 413:
case 1065:
case 3469:
case 2036:
case 2103:
case 1851:
case 1063:
case 1689:
case 2200:
case 3685:
case 2436:
case 1282:
case 1186:
case 1465:
case 3810:
case 1191:
case 21:
case 1713:
case 2370:
case 3510:
case 794:
case 2874:
case 3408:
case 3873:
case 1630:
case 2187:
case 546:
case 136:
case 815:
case 3575:
case 2315:
case 2684:
case 3970:
case 1892:
case 889:
case 1647:
case 3104:
case 321:
case 1048:
case 3781:
case 1981:
case 636:
case 280:
case 1440:
case 1778:
case 1579:
case 1638:
case 1256:
case 250:
case 756:
case 3397:
case 1037:
case 3057:
case 1611:
case 1996:
case 859:
case 3008:
case 2818:
case 1056:
case 1797:
case 3036:
case 2831:
case 3105:
case 3257:
case 1396:
case 2531:
case 1248:
case 3022:
case 466:
case 3646:
case 1143:
case 3874:
case 31:
case 3422:
case 3149:
case 3370:
case 970:
case 1109:
case 2069:
case 2683:
case 1456:
case 2685:
case 376:
case 196:
case 2314:
case 3574:
case 2089:
case 3135:
case 1153:
case 3798:
case 3599:
case 1998:
case 2801:
case 3024:
case 378:
case 1258:
case 161:
case 1046:
case 3128:
case 3225:
case 1446:
case 232:
case 76:
case 2312:
case 862:
case 3572:
case 3159:
case 1990:
case 491:
case 1250:
case 3406:
case 973:
case 45:
case 3030:
case 1390:
case 1600:
case 3438:
case 814:
case 1961:
case 3761:
case 3640:
case 1029:
case 48:
case 3423:
case 638:
case 1154:
case 283:
case 3025:
case 1142:
case 3777:
case 949:
case 3637:
case 1450:
case 3206:
case 1398:
case 3102:
case 3038:
case 4070:
case 1007:
case 1657:
case 3011:
case 2167:
case 410:
case 2247:
case 2976:
case 2223:
case 4013:
case 278:
case 2133:
case 1483:
case 1541:
case 2135:
case 1262:
case 1166:
case 1485:
case 2656:
case 2024:
case 2599:
case 2406:
case 1085:
case 826:
case 2790:
case 1669:
case 2230:
case 2572:
case 767:
case 96:
case 3912:
case 1712:
case 487:
case 2761:
case 1084:
case 655:
case 1188:
case 2030:
case 559:
case 1283:
case 3682:
case 119:
case 672:
case 1180:
case 3816:
case 3167:
case 2206:
case 846:
case 2038:
case 2025:
case 2777:
case 3664:
case 619:
case 2047:
case 2376:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751378401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,];
var gg_b = "1751378401/";

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
