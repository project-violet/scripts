// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 1608:
case 3239:
case 3568:
case 1427:
case 1697:
case 377:
case 2609:
case 3094:
case 712:
case 544:
case 2753:
case 1540:
case 3241:
case 1397:
case 3885:
case 1696:
case 2731:
case 3288:
case 2201:
case 381:
case 1828:
case 2897:
case 1934:
case 445:
case 2549:
case 3329:
case 4051:
case 1577:
case 1038:
case 1949:
case 1448:
case 2175:
case 2771:
case 322:
case 1219:
case 517:
case 364:
case 3425:
case 3286:
case 3131:
case 1472:
case 1327:
case 722:
case 3375:
case 1738:
case 26:
case 1637:
case 1876:
case 48:
case 3358:
case 220:
case 1534:
case 8:
case 2706:
case 2684:
case 2316:
case 504:
case 2140:
case 1901:
case 706:
case 5:
case 965:
case 133:
case 1081:
case 2290:
case 3856:
case 3461:
case 566:
case 1662:
case 2473:
case 3883:
case 2716:
case 667:
case 2957:
case 1:
case 1808:
case 1106:
case 1586:
case 1955:
case 393:
case 1430:
case 3297:
case 3804:
case 1254:
case 3230:
case 1158:
case 106:
case 1821:
case 2194:
case 1272:
case 2096:
case 44:
case 205:
case 1159:
case 3752:
case 929:
case 942:
case 3830:
case 2570:
case 557:
case 813:
case 3514:
case 1768:
case 335:
case 2180:
case 313:
case 1401:
case 3789:
case 1086:
case 2546:
case 987:
case 3444:
case 2390:
case 751:
case 3672:
case 2929:
case 2157:
case 254:
case 1196:
case 1096:
case 817:
case 691:
case 2666:
case 2517:
case 2743:
case 2603:
case 1111:
case 2985:
case 3777:
case 3696:
case 1226:
case 3136:
case 908:
case 2728:
case 3707:
case 3917:
case 3365:
case 1088:
case 1774:
case 537:
case 3687:
case 2124:
case 206:
case 1860:
case 1844:
case 2486:
case 1268:
case 199:
case 105:
case 2691:
case 2687:
case 2111:
case 584:
case 2522:
case 2009:
case 2471:
case 1857:
case 2015:
case 600:
case 2003:
case 331:
case 833:
case 3705:
case 3487:
case 179:
case 1140:
case 1832:
case 2153:
case 1273:
case 1227:
case 3387:
case 638:
case 932:
case 2095:
case 1307:
case 854:
case 686:
case 4076:
case 1973:
case 162:
case 2226:
case 2014:
case 350:
case 2475:
case 1501:
case 1883:
case 2403:
case 3971:
case 793:
case 2989:
case 421:
case 4058:
case 2933:
case 2559:
case 831:
case 1489:
case 1633:
case 1995:
case 1782:
case 1561:
case 1015:
case 143:
case 2735:
case 1244:
case 822:
case 2999:
case 3302:
case 3499:
case 2819:
case 328:
case 1900:
case 919:
case 1113:
case 3749:
case 2842:
case 2565:
case 3231:
case 2873:
case 3087:
case 1166:
case 2795:
case 1161:
case 2665:
case 1049:
case 2381:
case 1383:
case 1190:
case 3182:
case 95:
case 2113:
case 2000:
case 166:
case 2950:
case 3261:
case 1420:
case 1920:
case 2075:
case 1773:
case 2740:
case 2345:
case 1310:
case 358:
case 1727:
case 2196:
case 6:
case 4014:
case 1692:
case 4094:
case 2613:
case 2551:
case 619:
case 2331:
case 1864:
case 2996:
case 3851:
case 999:
case 2262:
case 4067:
case 2830:
case 1664:
case 3783:
case 3491:
case 2793:
case 4032:
case 1635:
case 1213:
case 1362:
case 1322:
case 2808:
case 4044:
case 2341:
case 3111:
case 1833:
case 3132:
case 4053:
case 4090:
case 1456:
case 1597:
case 500:
case 4091:
case 1483:
case 2233:
case 645:
case 3073:
case 197:
case 789:
case 2468:
case 1972:
case 1680:
case 414:
case 2100:
case 2520:
case 4081:
case 747:
case 3965:
case 573:
case 3352:
case 2790:
case 1550:
case 2467:
case 3379:
case 4089:
case 3970:
case 3646:
case 1389:
case 3961:
case 282:
case 203:
case 2307:
case 2248:
case 1739:
case 2225:
case 941:
case 3795:
case 875:
case 2043:
case 742:
case 1904:
case 100:
case 3451:
case 2130:
case 730:
case 3590:
case 1854:
case 3035:
case 838:
case 1335:
case 2962:
case 1228:
case 1218:
case 746:
case 2452:
case 3835:
case 3512:
case 1326:
case 3096:
case 385:
case 2975:
case 1986:
case 1320:
case 1888:
case 3604:
case 3223:
case 2372:
case 1451:
case 3635:
case 625:
case 3293:
case 139:
case 3981:
case 2705:
case 78:
case 29:
case 287:
case 2806:
case 2089:
case 181:
case 3299:
case 42:
case 3698:
case 3045:
case 2588:
case 3038:
case 3769:
case 2297:
case 3812:
case 2965:
case 2853:
case 967:
case 2415:
case 583:
case 2997:
case 3458:
case 2670:
case 2529:
case 894:
case 2803:
case 3682:
case 1970:
case 1655:
case 3440:
case 3596:
case 2811:
case 2174:
case 2736:
case 3097:
case 2376:
case 2512:
case 2834:
case 455:
case 1916:
case 2789:
case 1529:
case 345:
case 1301:
case 3301:
case 2459:
case 1847:
case 1065:
case 3520:
case 1422:
case 3294:
case 3157:
case 1645:
case 1357:
case 154:
case 178:
case 513:
case 1002:
case 1702:
case 2063:
case 3739:
case 3517:
case 1939:
case 1816:
case 3772:
case 858:
case 4059:
case 1187:
case 3247:
case 1263:
case 180:
case 548:
case 668:
case 1135:
case 3962:
case 2697:
case 3766:
case 2491:
case 890:
case 2360:
case 2574:
case 3758:
case 2207:
case 1946:
case 3295:
case 3775:
case 1067:
case 3057:
case 1495:
case 3621:
case 3219:
case 564:
case 2303:
case 2963:
case 3390:
case 1874:
case 2387:
case 68:
case 3376:
case 2301:
case 2797:
case 3114:
case 2775:
case 2202:
case 2540:
case 3796:
case 1755:
case 2967:
case 3993:
case 280:
case 429:
case 3322:
case 415:
case 1376:
case 1554:
case 3957:
case 2429:
case 1083:
case 3546:
case 2679:
case 807:
case 1358:
case 2681:
case 3305:
case 1324:
case 760:
case 2076:
case 1438:
case 2106:
case 1365:
case 1210:
case 1092:
case 4046:
case 2864:
case 1910:
case 402:
case 2409:
case 3353:
case 398:
case 4074:
case 3083:
case 2584:
case 290:
case 1801:
case 534:
case 1099:
case 2048:
case 3318:
case 2993:
case 887:
case 1531:
case 3024:
case 756:
case 3522:
case 3143:
case 623:
case 54:
case 1976:
case 4029:
case 2880:
case 391:
case 292:
case 934:
case 847:
case 1155:
case 3442:
case 2814:
case 3968:
case 418:
case 2820:
case 2792:
case 2380:
case 200:
case 3996:
case 3314:
case 953:
case 2179:
case 4055:
case 3548:
case 1840:
case 3211:
case 2558:
case 3676:
case 1898:
case 3220:
case 195:
case 1841:
case 3406:
case 1009:
case 3632:
case 4003:
case 1413:
case 2249:
case 2812:
case 719:
case 2772:
case 3309:
case 863:
case 3559:
case 1669:
case 700:
case 2478:
case 1131:
case 3624:
case 2870:
case 1982:
case 361:
case 3825:
case 2577:
case 4018:
case 958:
case 363:
case 2351:
case 1984:
case 2265:
case 2685:
case 541:
case 2488:
case 2354:
case 2894:
case 450:
case 662:
case 2349:
case 1012:
case 3368:
case 3853:
case 2487:
case 56:
case 1041:
case 4025:
case 1312:
case 1171:
case 1859:
case 3431:
case 3689:
case 2294:
case 2961:
case 2215:
case 3928:
case 1132:
case 2094:
case 24:
case 3280:
case 3577:
case 906:
case 466:
case 3012:
case 588:
case 3194:
case 1977:
case 1035:
case 690:
case 3930:
case 207:
case 1499:
case 3155:
case 2500:
case 2421:
case 2970:
case 3859:
case 2774:
case 2521:
case 728:
case 3683:
case 2205:
case 1262:
case 524:
case 3567:
case 3572:
case 1431:
case 2597:
case 4019:
case 1574:
case 1507:
case 2779:
case 2295:
case 2398:
case 3932:
case 871:
case 3534:
case 898:
case 840:
case 902:
case 1716:
case 1271:
case 2711:
case 2119:
case 1355:
case 1636:
case 2087:
case 721:
case 2849:
case 2509:
case 2189:
case 2064:
case 3362:
case 3785:
case 294:
case 3655:
case 1747:
case 1911:
case 3088:
case 3177:
case 2223:
case 3881:
case 3004:
case 4006:
case 1457:
case 2161:
case 3459:
case 3162:
case 3105:
case 1545:
case 1733:
case 2426:
case 3399:
case 1319:
case 2040:
case 224:
case 804:
case 3805:
case 4002:
case 2440:
case 1532:
case 3100:
case 1715:
case 1070:
case 255:
case 2406:
case 1465:
case 1679:
case 1164:
case 2889:
case 2011:
case 2724:
case 2932:
case 3104:
case 1938:
case 2846:
case 50:
case 2126:
case 3019:
case 3541:
case 3833:
case 3373:
case 814:
case 3245:
case 3887:
case 2435:
case 269:
case 520:
case 1968:
case 3592:
case 1985:
case 2472:
case 3637:
case 688:
case 2287:
case 3311:
case 732:
case 2855:
case 2636:
case 3334:
case 267:
case 515:
case 2890:
case 1761:
case 2964:
case 230:
case 2696:
case 912:
case 2238:
case 2185:
case 734:
case 451:
case 3319:
case 886:
case 986:
case 1802:
case 1345:
case 1657:
case 2928:
case 432:
case 2154:
case 791:
case 3465:
case 3250:
case 2419:
case 577:
case 397:
case 2455:
case 1404:
case 1043:
case 410:
case 1024:
case 636:
case 1297:
case 1316:
case 249:
case 245:
case 3336:
case 828:
case 3154:
case 1612:
case 3039:
case 529:
case 3486:
case 1524:
case 2044:
case 1643:
case 1462:
case 3554:
case 3187:
case 1736:
case 3841:
case 28:
case 3258:
case 3355:
case 2860:
case 2418:
case 1347:
case 3186:
case 3734:
case 2244:
case 861:
case 1765:
case 3639:
case 3765:
case 652:
case 3146:
case 1288:
case 283:
case 991:
case 2542:
case 927:
case 1837:
case 3544:
case 3553:
case 3326:
case 1305:
case 1536:
case 530:
case 957:
case 2883:
case 2352:
case 324:
case 71:
case 3599:
case 658:
case 2976:
case 2799:
case 3010:
case 3190:
case 2648:
case 3005:
case 3903:
case 2758:
case 2700:
case 321:
case 3346:
case 2192:
case 1766:
case 3900:
case 2395:
case 964:
case 2276:
case 2734:
case 2602:
case 3381:
case 1114:
case 1247:
case 90:
case 407:
case 1133:
case 1677:
case 2994:
case 46:
case 2240:
case 2169:
case 868:
case 1806:
case 219:
case 3341:
case 57:
case 2480:
case 3583:
case 3411:
case 703:
case 2534:
case 2002:
case 1610:
case 3792:
case 1759:
case 2788:
case 2694:
case 149:
case 1658:
case 3259:
case 1557:
case 4049:
case 1442:
case 539:
case 589:
case 405:
case 1230:
case 1285:
case 1195:
case 3771:
case 3681:
case 3180:
case 161:
case 3058:
case 3854:
case 2662:
case 3173:
case 279:
case 1646:
case 2910:
case 1526:
case 2867:
case 35:
case 1691:
case 2885:
case 3983:
case 3501:
case 2432:
case 7:
case 2332:
case 3665:
case 554:
case 3482:
case 36:
case 94:
case 2389:
case 3026:
case 3878:
case 882:
case 443:
case 3212:
case 794:
case 1652:
case 824:
case 2041:
case 1071:
case 2057:
case 1069:
case 2778:
case 320:
case 2992:
case 2741:
case 3064:
case 892:
case 3102:
case 2247:
case 4040:
case 2611:
case 2525:
case 497:
case 3415:
case 3161:
case 0:
case 110:
case 805:
case 1930:
case 2474:
case 2898:
case 186:
case 3032:
case 1072:
case 3742:
case 2554:
case 1622:
case 1724:
case 3342:
case 2084:
case 2227:
case 2:
case 3579:
case 1615:
case 2160:
case 2801:
case 2159:
case 3735:
case 1651:
case 359:
case 3944:
case 1908:
case 1714:
case 2600:
case 903:
case 1649:
case 3951:
case 788:
case 80:
case 1856:
case 1592:
case 2674:
case 739:
case 1241:
case 2363:
case 1066:
case 866:
case 470:
case 1922:
case 1893:
case 120:
case 2747:
case 3623:
case 1880:
case 4005:
case 3980:
case 3508:
case 4037:
case 3982:
case 3018:
case 2913:
case 3172:
case 2058:
case 2035:
case 411:
case 241:
case 2626:
case 1479:
case 2945:
case 795:
case 3424:
case 3129:
case 3636:
case 1673:
case 423:
case 2296:
case 2637:
case 1894:
case 581:
case 3098:
case 3120:
case 3020:
case 1204:
case 1871:
case 551:
case 591:
case 1172:
case 2591:
case 2695:
case 4026:
case 3897:
case 3046:
case 1037:
case 1684:
case 4072:
case 1189:
case 51:
case 689:
case 3167:
case 1915:
case 1584:
case 3940:
case 2986:
case 1286:
case 1183:
case 2348:
case 608:
case 3563:
case 3050:
case 2921:
case 1154:
case 2632:
case 2908:
case 213:
case 2825:
case 3891:
case 193:
case 1206:
case 55:
case 1392:
case 1334:
case 295:
case 2329:
case 2379:
case 3648:
case 1016:
case 2253:
case 49:
case 3673:
case 2759:
case 3750:
case 844:
case 3477:
case 1926:
case 2028:
case 2657:
case 1509:
case 1580:
case 2920:
case 1458:
case 61:
case 2777:
case 1437:
case 1843:
case 3076:
case 3340:
case 2875:
case 1632:
case 1351:
case 3500:
case 1570:
case 1245:
case 650:
case 2355:
case 1882:
case 301:
case 1352:
case 820:
case 1469:
case 288:
case 2178:
case 3828:
case 388:
case 765:
case 2664:
case 3141:
case 2587:
case 2624:
case 1450:
case 2827:
case 1928:
case 2750:
case 1793:
case 4009:
case 2135:
case 3426:
case 1455:
case 881:
case 2971:
case 2754:
case 1598:
case 1370:
case 3532:
case 2635:
case 914:
case 2702:
case 3040:
case 3724:
case 3181:
case 950:
case 1170:
case 1169:
case 599:
case 1667:
case 803:
case 884:
case 1391:
case 1851:
case 2083:
case 1279:
case 2383:
case 3529:
case 3587:
case 3882:
case 169:
case 3061:
case 2220:
case 1045:
case 3702:
case 3536:
case 519:
case 4060:
case 3418:
case 1306:
case 303:
case 3914:
case 2217:
case 931:
case 2712:
case 2569:
case 257:
case 1824:
case 3265:
case 3566:
case 1785:
case 2007:
case 543:
case 561:
case 989:
case 498:
case 3349:
case 556:
case 2188:
case 2841:
case 3537:
case 1902:
case 3396:
case 45:
case 2590:
case 145:
case 346:
case 3802:
case 1315:
case 2422:
case 1590:
case 1799:
case 1141:
case 582:
case 3811:
case 3556:
case 2231:
case 759:
case 3338:
case 1405:
case 2594:
case 1752:
case 3589:
case 2453:
case 2537:
case 474:
case 2176:
case 1343:
case 3684:
case 1006:
case 648:
case 613:
case 3803:
case 845:
case 286:
case 1862:
case 3242:
case 3078:
case 1101:
case 1830:
case 1057:
case 683:
case 1333:
case 977:
case 1945:
case 204:
case 275:
case 1617:
case 1618:
case 2229:
case 985:
case 3562:
case 3985:
case 3660:
case 526:
case 3693:
case 2392:
case 2462:
case 2634:
case 3937:
case 2004:
case 1685:
case 830:
case 3907:
case 1050:
case 1165:
case 3292:
case 2362:
case 3594:
case 2402:
case 856:
case 2458:
case 601:
case 3403:
case 1525:
case 3719:
case 1378:
case 462:
case 1145:
case 3685:
case 846:
case 2396:
case 2714:
case 3457:
case 330:
case 1728:
case 3754:
case 1797:
case 2125:
case 2607:
case 3840:
case 2821:
case 718:
case 1510:
case 1613:
case 3593:
case 1403:
case 521:
case 306:
case 3290:
case 4082:
case 3868:
case 598:
case 2744:
case 1203:
case 25:
case 1290:
case 240:
case 125:
case 142:
case 2378:
case 1039:
case 1569:
case 1771:
case 2476:
case 710:
case 3960:
case 2672:
case 1473:
case 1826:
case 3371:
case 3608:
case 3759:
case 1255:
case 4086:
case 252:
case 873:
case 1795:
case 2871:
case 535:
case 384:
case 2661:
case 446:
case 1991:
case 990:
case 2571:
case 3580:
case 2568:
case 1178:
case 2193:
case 2346:
case 1663:
case 2785:
case 984:
case 3333:
case 3041:
case 30:
case 2099:
case 545:
case 1481:
case 1463:
case 248:
case 2260:
case 63:
case 1250:
case 1259:
case 610:
case 553:
case 3913:
case 1432:
case 3389:
case 3925:
case 880:
case 307:
case 2938:
case 2816:
case 3667:
case 2359:
case 3393:
case 969:
case 2203:
case 3768:
case 2187:
case 1407:
case 1741:
case 1735:
case 1959:
case 163:
case 3628:
case 2555:
case 1152:
case 3139:
case 1927:
case 2615:
case 816:
case 2904:
case 725:
case 3877:
case 1594:
case 3313:
case 2835:
case 1707:
case 1845:
case 3462:
case 127:
case 2365:
case 2256:
case 709:
case 777:
case 571:
case 3654:
case 3069:
case 711:
case 2012:
case 2766:
case 2436:
case 2566:
case 2051:
case 899:
case 2682:
case 2514:
case 371:
case 3397:
case 727:
case 3794:
case 1700:
case 895:
case 2837:
case 152:
case 2686:
case 124:
case 1426:
case 2172:
case 3956:
case 4077:
case 766:
case 586:
case 1098:
case 2442:
case 1999:
case 737:
case 1614:
case 2526:
case 2184:
case 1416:
case 2861:
case 3848:
case 872:
case 773:
case 223:
case 1593:
case 3506:
case 3911:
case 1482:
case 975:
case 3090:
case 3880:
case 1074:
case 960:
case 2464:
case 3602:
case 743:
case 1865:
case 434:
case 3560:
case 3716:
case 790:
case 1925:
case 1717:
case 1571:
case 281:
case 1947:
case 1539:
case 14:
case 1137:
case 3679:
case 514:
case 1803:
case 956:
case 3153:
case 1013:
case 1350:
case 3138:
case 3171:
case 2469:
case 2638:
case 701:
case 1122:
case 1750:
case 1444:
case 755:
case 3234:
case 3906:
case 488:
case 1835:
case 2461:
case 1387:
case 342:
case 1381:
case 1537:
case 3384:
case 666:
case 1011:
case 2280:
case 3423:
case 1731:
case 3515:
case 99:
case 1794:
case 3678:
case 4041:
case 797:
case 3062:
case 3260:
case 3328:
case 1353:
case 3126:
case 1459:
case 505:
case 684:
case 3964:
case 1464:
case 1256:
case 1543:
case 2865:
case 1935:
case 1891:
case 3820:
case 3861:
case 687:
case 2513:
case 300:
case 3416:
case 98:
case 2239:
case 3987:
case 318:
case 3748:
case 2738:
case 3158:
case 2407:
case 2006:
case 3837:
case 3732:
case 3224:
case 1480:
case 3307:
case 338:
case 2327:
case 4045:
case 3240:
case 3450:
case 647:
case 109:
case 815:
case 291:
case 3814:
case 3103:
case 738:
case 695:
case 3481:
case 2411:
case 4015:
case 2720:
case 642:
case 1191:
case 2255:
case 1211:
case 1681:
case 2139:
case 568:
case 2446:
case 449:
case 2838:
case 2023:
case 396:
case 3774:
case 16:
case 1767:
case 827:
case 1596:
case 3801:
case 1897:
case 629:
case 3614:
case 1869:
case 2539:
case 1726:
case 806:
case 134:
case 2623:
case 2501:
case 2580:
case 1102:
case 319:
case 2813:
case 3800:
case 1941:
case 576:
case 1654:
case 955:
case 285:
case 3263:
case 2895:
case 1398:
case 1445:
case 552:
case 3611:
case 3344:
case 2851:
case 4031:
case 2072:
case 3429:
case 173:
case 2333:
case 140:
case 1225:
case 2210:
case 463:
case 3435:
case 1269:
case 1399:
case 2118:
case 2302:
case 3842:
case 1130:
case 274:
case 918:
case 3082:
case 1061:
case 611:
case 2338:
case 3531:
case 2237:
case 2325:
case 876:
case 2601:
case 1831:
case 2822:
case 2668:
case 1505:
case 3433:
case 1179:
case 3668:
case 595:
case 1558:
case 1660:
case 1023:
case 3720:
case 750:
case 3741:
case 1786:
case 2610:
case 3025:
case 2197:
case 3304:
case 3320:
case 2400:
case 1713:
case 168:
case 1621:
case 2543:
case 2109:
case 3495:
case 3744:
case 3955:
case 782:
case 3694:
case 2541:
case 525:
case 3767:
case 3176:
case 2940:
case 1549:
case 2900:
case 1375:
case 1030:
case 2773:
case 2266:
case 628:
case 1653:
case 2437:
case 772:
case 272:
case 437:
case 2918:
case 2050:
case 32:
case 836:
case 596:
case 2221:
case 3808:
case 1981:
case 1674:
case 1323:
case 3779:
case 1260:
case 1393:
case 4063:
case 810:
case 783:
case 1705:
case 2385:
case 367:
case 1954:
case 1838:
case 2721:
case 1885:
case 1678:
case 1212:
case 234:
case 784:
case 3884:
case 2155:
case 1084:
case 612:
case 3659:
case 1238:
case 265:
case 1257:
case 2901:
case 232:
case 3232:
case 2671:
case 3407:
case 1151:
case 376:
case 2293:
case 2326:
case 3119:
case 1018:
case 1666:
case 352:
case 438:
case 2589:
case 3042:
case 2053:
case 1361:
case 3030:
case 2511:
case 3366:
case 3652:
case 1535:
case 3975:
case 3420:
case 1528:
case 3369:
case 312:
case 3516:
case 3437:
case 2208:
case 1932:
case 1634:
case 843:
case 1961:
case 2701:
case 3378:
case 2317:
case 2907:
case 2658:
case 1200:
case 3630:
case 3203:
case 3896:
case 1029:
case 2604:
case 2952:
case 2583:
case 1395:
case 3421:
case 2575:
case 1626:
case 3892:
case 1321:
case 916:
case 3703:
case 1781:
case 1229:
case 2578:
case 3374:
case 1147:
case 1054:
case 3708:
case 3414:
case 3542:
case 1631:
case 1116:
case 2022:
case 2966:
case 1552:
case 3401:
case 2760:
case 2016:
case 96:
case 809:
case 2131:
case 1251:
case 3179:
case 2479:
case 2114:
case 1303:
case 1703:
case 622:
case 1047:
case 767:
case 2667:
case 705:
case 1942:
case 1556:
case 1493:
case 2496:
case 2323:
case 2675:
case 2318:
case 1156:
case 1396:
case 422:
case 1676:
case 1075:
case 1640:
case 740:
case 3470:
case 1157:
case 3257:
case 1953:
case 1711:
case 943:
case 408:
case 3006:
case 473:
case 1647:
case 2710:
case 3978:
case 316:
case 2947:
case 2449:
case 3620:
case 2414:
case 2852:
case 2273:
case 3128:
case 2840:
case 1331:
case 1778:
case 3943:
case 2505:
case 256:
case 1120:
case 2129:
case 1749:
case 3000:
case 3505:
case 4033:
case 702:
case 592:
case 1068:
case 2286:
case 10:
case 4093:
case 3571:
case 2259:
case 1933:
case 679:
case 2428:
case 538:
case 1805:
case 3484:
case 278:
case 3866:
case 3607:
case 2831:
case 1252:
case 1224:
case 1127:
case 3479:
case 62:
case 150:
case 4008:
case 141:
case 2250:
case 819:
case 3300:
case 3199:
case 1368:
case 3967:
case 1877:
case 13:
case 182:
case 3540:
case 456:
case 3894:
case 3472:
case 2067:
case 1602:
case 3252:
case 1058:
case 2530:
case 2328:
case 3209:
case 3059:
case 428:
case 2998:
case 2386:
case 380:
case 550:
case 81:
case 2105:
case 651:
case 2156:
case 1500:
case 2484:
case 976:
case 378:
case 440:
case 1184:
case 959:
case 1853:
case 1429:
case 2749:
case 631:
case 3449:
case 1581:
case 426:
case 3168:
case 1208:
case 167:
case 4054:
case 3582:
case 1242:
case 2643:
case 228:
case 1951:
case 2447:
case 937:
case 1095:
case 401:
case 298:
case 172:
case 2815:
case 2477:
case 2958:
case 3573:
case 729:
case 480:
case 3289:
case 3047:
case 482:
case 1967:
case 1512:
case 604:
case 2391:
case 2490:
case 2727:
case 1579:
case 2230:
case 2762:
case 936:
case 2545:
case 1609:
case 3557:
case 1825:
case 2242:
case 1892:
case 2673:
case 3476:
case 1296:
case 2278:
case 1814:
case 878:
case 128:
case 3065:
case 731:
case 1589:
case 2045:
case 1048:
case 3142:
case 3591:
case 3015:
case 3786:
case 1783:
case 1760:
case 1619:
case 1682:
case 1852:
case 430:
case 2337:
case 3926:
case 558:
case 3436:
case 1566:
case 259:
case 1990:
case 184:
case 3671:
case 3834:
case 2173:
case 1146:
case 3222:
case 2649:
case 137:
case 567:
case 888:
case 1490:
case 3780:
case 1091:
case 2524:
case 296:
case 1197:
case 1270:
case 85:
case 3564:
case 2371:
case 3879:
case 841:
case 674:
case 1723:
case 3947:
case 1921:
case 2654:
case 392:
case 2767:
case 3392:
case 3502:
case 2281:
case 225:
case 1583:
case 1889:
case 2572:
case 2272:
case 3714:
case 1975:
case 507:
case 2136:
case 4017:
case 1082:
case 3558:
case 1485:
case 4050:
case 4078:
case 3507:
case 516:
case 2498:
case 2856:
case 2533:
case 2612:
case 1112:
case 1056:
case 3610:
case 41:
case 4057:
case 3201:
case 3807:
case 2561:
case 1769:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1658926802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,];
var gg_b = "1658926802/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
