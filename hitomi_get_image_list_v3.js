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
case 3451:
case 1825:
case 2089:
case 439:
case 1975:
case 564:
case 673:
case 956:
case 453:
case 1266:
case 3944:
case 827:
case 2830:
case 3778:
case 3682:
case 1465:
case 2077:
case 435:
case 2807:
case 2424:
case 1516:
case 3383:
case 2222:
case 2371:
case 3491:
case 427:
case 252:
case 853:
case 43:
case 381:
case 484:
case 2864:
case 921:
case 2786:
case 308:
case 2315:
case 550:
case 4053:
case 2177:
case 243:
case 129:
case 3964:
case 501:
case 1592:
case 2534:
case 2587:
case 3693:
case 4082:
case 291:
case 868:
case 3907:
case 566:
case 2394:
case 3474:
case 318:
case 6:
case 3272:
case 1006:
case 486:
case 1950:
case 2189:
case 3532:
case 2560:
case 1633:
case 323:
case 3919:
case 137:
case 2579:
case 2962:
case 960:
case 3653:
case 1552:
case 2472:
case 1073:
case 1934:
case 278:
case 110:
case 2590:
case 3816:
case 713:
case 1212:
case 885:
case 565:
case 2319:
case 56:
case 2330:
case 88:
case 151:
case 3362:
case 3777:
case 2808:
case 728:
case 331:
case 1979:
case 1562:
case 1829:
case 2085:
case 3883:
case 2871:
case 2307:
case 2550:
case 3994:
case 2921:
case 569:
case 2815:
case 2638:
case 1470:
case 2364:
case 2241:
case 3128:
case 1469:
case 3789:
case 955:
case 1602:
case 2101:
case 1781:
case 648:
case 3342:
case 95:
case 3461:
case 2588:
case 2575:
case 1718:
case 3821:
case 3236:
case 1376:
case 3435:
case 1256:
case 3028:
case 538:
case 3908:
case 2261:
case 767:
case 2344:
case 3186:
case 192:
case 1220:
case 187:
case 1449:
case 3576:
case 4063:
case 2235:
case 1940:
case 124:
case 1296:
case 1303:
case 3892:
case 3238:
case 3641:
case 3906:
case 684:
case 1258:
case 1877:
case 1614:
case 1007:
case 1927:
case 545:
case 1064:
case 63:
case 3090:
case 2513:
case 2981:
case 1669:
case 3973:
case 3823:
case 549:
case 2905:
case 1670:
case 2438:
case 976:
case 3111:
case 3729:
case 3188:
case 3175:
case 3050:
case 639:
case 3463:
case 1783:
case 2103:
case 642:
case 3818:
case 1509:
case 1721:
case 230:
case 3011:
case 2125:
case 4041:
case 3088:
case 3075:
case 3150:
case 532:
case 668:
case 1130:
case 2923:
case 8:
case 2003:
case 686:
case 3881:
case 4:
case 796:
case 2734:
case 198:
case 1280:
case 3443:
case 377:
case 3190:
case 1164:
case 747:
case 974:
case 3309:
case 1762:
case 3284:
case 3237:
case 1377:
case 1801:
case 1665:
case 2750:
case 1928:
case 2029:
case 1257:
case 1885:
case 685:
case 3179:
case 3622:
case 3725:
case 4074:
case 3651:
case 1015:
case 3589:
case 1194:
case 3160:
case 68:
case 79:
case 258:
case 2484:
case 2437:
case 1297:
case 2282:
case 795:
case 2790:
case 3040:
case 689:
case 3200:
case 2726:
case 390:
case 4010:
case 171:
case 1154:
case 3691:
case 4022:
case 3817:
case 3674:
case 3318:
case 1699:
case 3140:
case 848:
case 207:
case 1986:
case 312:
case 2373:
case 3087:
case 3034:
case 597:
case 3305:
case 862:
case 1054:
case 263:
case 582:
case 975:
case 3639:
case 1913:
case 2129:
case 97:
case 1659:
case 2788:
case 448:
case 940:
case 2711:
case 3079:
case 1094:
case 1115:
case 1433:
case 2293:
case 913:
case 3708:
case 1918:
case 820:
case 1103:
case 3771:
case 1513:
case 2669:
case 1981:
case 3386:
case 2144:
case 3715:
case 804:
case 1905:
case 2889:
case 1025:
case 1438:
case 388:
case 1740:
case 2247:
case 1263:
case 3313:
case 366:
case 1586:
case 404:
case 3498:
case 2385:
case 420:
case 4020:
case 2877:
case 172:
case 2927:
case 3142:
case 806:
case 3404:
case 1076:
case 3827:
case 2517:
case 508:
case 3328:
case 414:
case 1636:
case 311:
case 2792:
case 3042:
case 581:
case 298:
case 2695:
case 903:
case 461:
case 733:
case 1003:
case 2130:
case 2119:
case 2402:
case 1873:
case 1243:
case 2267:
case 1528:
case 2509:
case 130:
case 2044:
case 2721:
case 967:
case 406:
case 1624:
case 1917:
case 3448:
case 409:
case 4046:
case 1484:
case 117:
case 1282:
case 3764:
case 3886:
case 2248:
case 2015:
case 721:
case 1132:
case 2194:
case 3719:
case 3730:
case 2071:
case 3083:
case 2801:
case 2665:
case 405:
case 2377:
case 40:
case 2008:
case 2257:
case 1029:
case 369:
case 3052:
case 1032:
case 3744:
case 2094:
case 3901:
case 1293:
case 3327:
case 819:
case 754:
case 2115:
case 415:
case 2505:
case 531:
case 693:
case 1129:
case 3468:
case 1672:
case 1788:
case 41:
case 2986:
case 365:
case 2742:
case 36:
case 2054:
case 3506:
case 2268:
case 419:
case 180:
case 2699:
case 760:
case 107:
case 1637:
case 620:
case 3657:
case 2106:
case 1786:
case 3466:
case 3826:
case 604:
case 4068:
case 1424:
case 2516:
case 3976:
case 3231:
case 1807:
case 999:
case 2173:
case 3181:
case 2266:
case 1819:
case 3105:
case 2911:
case 2583:
case 3697:
case 1089:
case 2825:
case 2975:
case 995:
case 3118:
case 1274:
case 3387:
case 4048:
case 2073:
case 606:
case 1354:
case 3299:
case 3005:
case 779:
case 3245:
case 2709:
case 2521:
case 3446:
case 237:
case 4057:
case 1844:
case 2552:
case 2717:
case 740:
case 3259:
case 1394:
case 2926:
case 370:
case 2332:
case 34:
case 2246:
case 2990:
case 775:
case 1177:
case 143:
case 614:
case 2592:
case 1534:
case 1587:
case 345:
case 2723:
case 1241:
case 1364:
case 3390:
case 2470:
case 2469:
case 3214:
case 3412:
case 605:
case 3109:
case 3519:
case 3647:
case 1078:
case 2829:
case 2960:
case 1921:
case 3326:
case 3507:
case 3350:
case 994:
case 3269:
case 3270:
case 3698:
case 382:
case 2934:
case 2987:
case 3840:
case 4080:
case 922:
case 2325:
case 1590:
case 4047:
case 3667:
case 2542:
case 3375:
case 1235:
case 2296:
case 1436:
case 2940:
case 224:
case 619:
case 3255:
case 3887:
case 3834:
case 2220:
case 287:
case 1727:
case 3604:
case 1916:
case 3311:
case 2449:
case 1894:
case 2832:
case 3860:
case 1511:
case 344:
case 3929:
case 3680:
case 3295:
case 615:
case 2256:
case 947:
case 1178:
case 1185:
case 2705:
case 2781:
case 1101:
case 3420:
case 1588:
case 1883:
case 3960:
case 326:
case 1994:
case 2932:
case 3562:
case 131:
case 2530:
case 483:
case 1128:
case 854:
case 2214:
case 2412:
case 1789:
case 2658:
case 460:
case 968:
case 3470:
case 860:
case 507:
case 246:
case 454:
case 3934:
case 310:
case 1362:
case 1441:
case 297:
case 351:
case 715:
case 883:
case 2507:
case 3212:
case 3414:
case 2604:
case 1576:
case 984:
case 856:
case 1186:
case 3220:
case 300:
case 558:
case 3296:
case 3940:
case 2255:
case 2834:
case 927:
case 2456:
case 70:
case 2667:
case 1643:
case 93:
case 3495:
case 2375:
case 953:
case 676:
case 1342:
case 1915:
case 1461:
case 2929:
case 2680:
case 2544:
case 2295:
case 709:
case 3256:
case 1028:
case 939:
case 3718:
case 1821:
case 1971:
case 2496:
case 1236:
case 456:
case 85:
case 2826:
case 855:
case 3516:
case 1491:
case 2976:
case 1383:
case 2231:
case 2648:
case 108:
case 2657:
case 936:
case 4033:
case 706:
case 3431:
case 1224:
case 67:
case 2340:
case 2903:
case 1451:
case 530:
case 675:
case 3975:
case 714:
case 2105:
case 3911:
case 1316:
case 3465:
case 2850:
case 2697:
case 3173:
case 232:
case 2181:
case 833:
case 45:
case 2123:
case 249:
case 123:
case 3552:
case 32:
case 3950:
case 704:
case 2811:
case 2245:
case 720:
case 2875:
case 2925:
case 1410:
case 2005:
case 2668:
case 1392:
case 2334:
case 2081:
case 985:
case 1693:
case 3445:
case 572:
case 245:
case 24:
case 3246:
case 1907:
case 1027:
case 3006:
case 3926:
case 1321:
case 3332:
case 118:
case 270:
case 157:
case 2379:
case 3717:
case 1323:
case 2886:
case 474:
case 3389:
case 371:
case 1691:
case 654:
case 1577:
case 4059:
case 1134:
case 1187:
case 1200:
case 102:
case 3928:
case 3878:
case 660:
case 2719:
case 4045:
case 2730:
case 3801:
case 3665:
case 1482:
case 2497:
case 3015:
case 874:
case 1651:
case 3194:
case 3631:
case 1622:
case 1179:
case 3248:
case 2152:
case 2813:
case 2573:
case 2468:
case 3581:
case 3108:
case 3505:
case 2183:
case 1703:
case 1639:
case 1610:
case 2021:
case 3094:
case 1060:
case 3433:
case 2327:
case 3115:
case 1809:
case 2052:
case 2978:
case 2985:
case 1079:
case 476:
case 2828:
case 1453:
case 1318:
case 3699:
case 876:
case 1817:
case 578:
case 1674:
case 1305:
case 112:
case 3986:
case 2233:
case 1087:
case 2092:
case 948:
case 65:
case 3298:
case 3670:
case 2612:
case 2715:
case 655:
case 1578:
case 1585:
case 1463:
case 475:
case 962:
case 3783:
case 1175:
case 2708:
case 1026:
case 3258:
case 3877:
case 1906:
case 3301:
case 2142:
case 3007:
case 87:
case 1641:
case 659:
case 1238:
case 201:
case 543:
case 4055:
case 1090:
case 840:
case 3064:
case 3247:
case 633:
case 552:
case 2042:
case 2656:
case 1443:
case 2467:
case 1126:
case 398:
case 3695:
case 3280:
case 211:
case 2754:
case 2328:
case 2202:
case 2404:
case 2827:
case 4069:
case 3164:
case 1190:
case 2977:
case 3649:
case 1011:
case 1818:
case 3509:
case 1732:
case 3130:
case 4014:
case 1881:
case 1075:
case 1088:
case 1150:
case 1805:
case 3400:
case 467:
case 906:
case 2622:
case 3750:
case 1083:
case 2482:
case 524:
case 1016:
case 4072:
case 3917:
case 1448:
case 2577:
case 3624:
case 2187:
case 1707:
case 1192:
case 803:
case 202:
case 3726:
case 3484:
case 3282:
case 317:
case 1764:
case 914:
case 500:
case 1457:
case 592:
case 867:
case 587:
case 551:
case 16:
case 428:
case 363:
case 1116:
case 78:
case 785:
case 813:
case 2381:
case 212:
case 165:
case 2087:
case 1092:
case 380:
case 307:
case 1506:
case 2817:
case 734:
case 2674:
case 510:
case 1901:
case 3306:
case 2060:
case 1744:
case 169:
case 2809:
case 1985:
case 1052:
case 3711:
case 2453:
case 789:
case 2079:
case 3672:
case 1573:
case 695:
case 3775:
case 3788:
case 69:
case 2610:
case 2703:
case 1183:
case 828:
case 166:
case 3586:
case 919:
case 786:
case 2090:
case 768:
case 372:
case 2906:
case 1142:
case 2641:
case 529:
case 101:
case 2578:
case 1708:
case 2175:
case 2050:
case 537:
case 3905:
case 3438:
case 525:
case 696:
case 3981:
case 1715:
case 3923:
case 3003:
case 3873:
case 2150:
case 2661:
case 3779:
case 164:
case 2317:
case 1480:
case 3760:
case 2818:
case 2732:
case 739:
case 1827:
case 277:
case 1404:
case 1977:
case 2190:
case 1656:
case 3787:
case 1042:
case 2443:
case 111:
case 3330:
case 1698:
case 1270:
case 2441:
case 2816:
case 1507:
case 3526:
case 1269:
case 3590:
case 748:
case 3992:
case 146:
case 2086:
case 378:
case 1840:
case 1214:
case 2128:
case 2013:
case 1658:
case 3815:
case 603:
case 3638:
case 3364:
case 2525:
case 2883:
case 3871:
case 3550:
case 1932:
case 3921:
case 667:
case 1519:
case 1647:
case 3952:
case 2028:
case 2908:
case 1860:
case 3894:
case 2821:
case 495:
case 2236:
case 3983:
case 1496:
case 1773:
case 2915:
case 3185:
case 3178:
case 1255:
case 1456:
case 499:
case 1375:
case 2643:
case 1604:
case 1017:
case 1311:
case 3344:
case 2186:
case 89:
case 2778:
case 2785:
case 2682:
case 1850:
case 1697:
case 7:
case 2316:
case 496:
case 1571:
case 1181:
case 132:
case 2529:
case 3830:
case 1118:
case 2422:
case 3713:
case 993:
case 3089:
case 3600:
case 1515:
case 447:
case 3786:
case 1890:
case 1466:
case 3684:
case 1265:
case 352:
case 3308:
case 3077:
case 1826:
case 896:
case 3807:
case 2491:
case 3222:
case 2907:
case 1259:
case 3394:
case 2474:
case 218:
case 2272:
case 2321:
case 3210:
case 3239:
case 1379:
case 422:
case 494:
case 145:
case 773:
case 14:
case 3177:
case 343:
case 1888:
case 1299:
case 1005:
case 2392:
case 3274:
case 894:
case 1668:
case 1081:
case 1123:
case 3579:
case 1446:
case 2653:
case 3844:
case 3728:
case 4037:
case 3560:
case 1151:
case 2621:
case 2533:
case 1660:
case 977:
case 2418:
case 3963:
case 651:
case 1679:
case 3131:
case 1122:
case 1880:
case 209:
case 3059:
case 3568:
case 3473:
case 3720:
case 2206:
case 471:
case 599:
case 3165:
case 2843:
case 4008:
case 20:
case 1634:
case 205:
case 1368:
case 2795:
case 59:
case 2353:
case 2749:
case 3205:
case 1804:
case 626:
case 1427:
case 21:
case 1091:
case 3223:
case 797:
case 1289:
case 162:
case 782:
case 2714:
case 215:
case 1898:
case 1537:
case 4094:
case 148:
case 1174:
case 2769:
case 3838:
case 1500:
case 1357:
case 624:
case 219:
case 1858:
case 2146:
case 3031:
case 1902:
case 692:
case 2863:
case 1847:
case 1110:
case 1139:
case 3597:
case 3671:
case 2683:
case 1380:
case 340:
case 3504:
case 2417:
case 770:
case 3095:
case 2745:
case 4030:
case 375:
case 2642:
case 3114:
case 2056:
case 3567:
case 2937:
case 1141:
case 745:
case 173:
case 3217:
case 1868:
case 912:
case 2020:
case 1772:
case 220:
case 2759:
case 1688:
case 379:
case 1304:
case 3982:
case 3055:
case 3580:
case 1428:
case 2853:
case 4064:
case 1035:
case 732:
case 990:
case 2882:
case 1897:
case 1161:
case 2120:
case 3070:
case 3069:
case 2012:
case 1486:
case 3993:
case 206:
case 3884:
case 3837:
case 3766:
case 547:
case 4044:
case 3338:
case 3149:
case 1278:
case 1857:
case 625:
case 1848:
case 3195:
case 637:
case 2363:
case 1347:
case 3598:
case 185:
case 2198:
case 426:
case 2067:
case 383:
case 2361:
case 18:
case 810:
case 2874:
case 2617:
case 134:
case 2549:
case 1396:
case 923:
case 3444:
case 957:
case 2158:
case 189:
case 918:
case 671:
case 2555:
case 3951:
case 3768:
case 2839:
case 2810:
case 451:
case 1163:
case 2147:
case 826:
case 3336:
case 1931:
case 1276:
case 3922:
case 2972:
case 2180:
case 3512:
case 2569:
case 2207:
case 1959:
case 3939:
case 2570:
case 321:
case 738:
case 400:
case 908:
case 2851:
case 424:
case 3430:
case 2264:
case 3797:
case 1999:
case 2098:
case 3748:
case 3824:
case 2891:
case 3407:
case 1143:
case 887:
case 567:
case 1737:
case 1866:
case 2230:
case 1490:
case 293:
case 2219:
case 3757:
case 1312:
case 1945:
case 356:
case 2605:
case 2197:
case 1970:
case 2702:
case 1182:
case 1572:
case 1969:
case 2618:
case 1479:
case 1053:
case 3546:
case 3033:
case 3780:
case 184:
case 2374:
case 3494:
case 764:
case 1460:
case 2157:
case 1914:
case 139:
case 3704:
case 2599:
case 1346:
case 711:
case 1232:
case 3372:
case 2492:
case 2545:
case 2294:
case 355:
case 3454:
case 2339:
case 153:
case 2310:
case 42:
case 788:
case 168:
case 3566:
case 1995:
case 766:
case 2322:
case 829:
case 2048:
case 3798:
case 2097:
case 1955:
case 3324:
case 2565:
case 3471:
case 2391:
case 3408:
case 2623:
case 2531:
case 3216:
case 1153:
case 825:
case 82:
case 698:
case 3415:
case 3961:
case 3758:
case 3133:
case 1839:
case 2356:
case 658:
case 3395:
case 2475:
case 3561:
case 945:
case 2163:
case 3859:
case 3403:
case 2628:
case 1080:
case 970:
case 2411:
case 3753:
case 3349:
case 3138:
case 1874:
case 3355:
case 1924:
case 2396:
case 234:
case 1617:
case 1549:
case 3275:
case 3288:
case 1335:
case 576:
case 949:
case 3211:
case 1198:
case 285:
case 2043:
case 1595:
case 1244:
case 3966:
case 2784:
case 1104:
case 39:
case 3370:
case 1219:
case 193:
case 2686:
case 2312:
case 2945:
case 395:
case 2225:
case 3541:
case 141:
case 1098:
case 790:
case 932:
case 1891:
case 1167:
case 2450:
case 3865:
case 3314:
case 0:
case 1341:
case 3946:
case 3290:
case 680:
case 2613:
case 1569:
case 1058:
case 1972:
case 1180:
case 1207:
case 2959:
case 3038:
case 3425:
case 1851:
case 574:
case 663:
case 3260:
case 1492:
case 2232:
case 1545:
case 1294:
case 2856:
case 852:
case 1310:
case 253:
case 777:
case 3849:
case 944:
case 2914:
case 2346:
case 239:
case 2053:
case 1618:
case 1452:
case 1254:
case 3100:
case 284:
case 672:
case 2896:
case 2460:
case 1374:
case 3234:
case 3287:
case 3432:
case 1861:
case 2820:
case 23:
case 452:
case 2970:
case 3539:
case 3510:
case 227:
case 1681:
case 3345:
case 235:
case 1559:
case 3522:
case 1531:
case 579:
case 1623:
case 2738:
case 946:
case 2153:
case 3869:
case 3870:
case 3551:
case 3920:
case 322:
case 2955:
case 1483:
case 394:
case 3240:
case 1168:
case 443:
case 242:
case 57:
case 3365:
case 1351:
case 3956:
case 540:
case 1057:
case 2995:
case 3331:
case 1936:
case 3084:
case 286:
case 367:
case 1353:
case 2074:
case 556:
case 1273:
case 3333:
case 2427:
case 2804:
case 303:
case 10:
case 1692:
case 105:
case 2634:
case 1795:
case 3227:
case 1481:
case 3761:
case 911:
case 2010:
case 1405:
case 2039:
case 3735:
case 2151:
case 417:
case 3632:
case 1621:
case 950:
case 2122:
case 1418:
case 458:
case 2679:
case 1652:
case 2880:
case 109:
case 3553:
case 521:
case 901:
case 3629:
case 731:
case 2847:
case 1863:
case 2357:
case 2500:
case 1769:
case 1146:
case 119:
case 1423:
case 2858:
case 2902:
case 2022:
case 554:
case 2584:
case 4032:
case 1066:
case 248:
case 3024:
case 1382:
case 313:
case 2397:
case 262:
case 1714:
case 2304:
case 104:
case 1096:
case 3833:
case 2611:
case 652:
case 1853:
case 723:
case 2035:
case 3739:
case 1502:
case 2868:
case 2772:
case 1020:
case 2367:
case 2688:
case 2675:
case 1759:
case 3957:
case 1745:
case 2141:
case 1893:
case 116:
case 3676:
case 555:
case 3213:
case 55:
case 161:
case 781:
case 2041:
case 2724:
case 106:
case 430:
case 2278:
case 2285:
case 2690:
case 1731:
case 559:
case 830:
case 2413:
case 3968:
case 2135:
case 1012:
case 3478:
case 3563:
case 1765:
case 2897:
case 3401:
case 2933:
case 3286:
case 1120:
case 2:
case 608:
case 3688:
case 4026:
case 2710:
case 2603:
case 3428:
case 3035:
case 3304:
case 2833:
case 1746:
case 3611:
case 1055:
case 2997:
case 1170:
case 1504:
case 2948:
case 791:
case 2774:
case 17:
case 373:
case 1095:
case 2957:
case 1567:
case 175:
case 1664:
case 3285:
case 1338:
case 3690:
case 3857:
case 1837:
case 877:
case 3201:
case 752:
case 2136:
case 3724:
case 3848:
case 3626:
case 3897:
case 3933:
case 3161:
case 1547:
case 2563:
case 2485:
case 1953:
case 3413:
case 2751:
case 477:
case 1155:
case 1070:
case 2722:
case 1800:
case 203:
case 541:
case 890:
case 3867:
case 3191:
case 2124:
case 3074:
case 2333:
case 1281:
case 267:
case 2998:
case 631:
case 1205:
case 593:
case 2947:
case 3880:
case 1796:
case 3151:
case 1694:
case 2632:
case 490:
case 402:
case 998:
case 1165:
case 2227:
case 1473:
case 1568:
case 1059:
case 2802:
case 2761:
case 1384:
case 3858:
case 3902:
case 3022:
case 3500:
case 3357:
case 1712:
case 3051:
case 4087:
case 4034:
case 1065:
case 412:
case 1597:
case 1159:
case 1145:
case 3898:
case 2024:
case 1223:
case 213:
case 2477:
case 1548:
case 3397:
case 812:
case 1557:
case 4079:
case 3174:
case 1199:
case 3584:
case 3640:
case 778:
case 247:
case 339:
case 1704:
case 808:
case 2849:
case 1606:
case 3914:
case 1454:
case 2895:
case 15:
case 2279:
case 353:
case 3232:
case 155:
case 2359:
case 3093:
case 3969:
case 3572:
case 2345:
case 2912:
case 335:
case 481:
case 3820:
case 2539:
case 327:
case 3182:
case 133:
case 2100:
case 3896:
case 1033:
case 1494:
case 2287:
case 2234:
case 1292:
case 2432:
case 3053:
case 987:
case 159:
case 2399:
case 3479:
case 992:
case 730:
case 514:
case 520:
case 1935:
case 951:
case 3082:
case 1747:
case 1324:
case 2996:
case 294:
case 2240:
case 2870:
case 2000:
case 457:
case 1758:
case 1961:
case 2522:
case 1216:
case 910:
case 418:
case 3738:
case 3812:
case 4027:
case 2869:
case 818:
case 3440:
case 3229:
case 857:
case 368:
case 423:
case 926:
case 2814:
case 1798:
case 772:
case 2591:
case 3949:
case 2677:
case 342:
case 3411:
case 3965:
case 2753:
case 2138:
case 2535:
case 389:
case 690:
case 602:
case 1922:
case 3276:
case 3163:
case 2859:
case 929:
case 3356:
case 1951:
case 831:
case 2395:
case 183:
case 1556:
case 2793:
case 515:
case 3320:
case 2966:
case 763:
case 3536:
case 2211:
case 2275:
case 2288:
case 2899:
case 160:
case 925:
case 2476:
case 334:
case 1407:
case 1824:
case 3143:
case 3225:
case 2541:
case 2369:
case 3312:
case 3945:
case 717:
case 295:
case 2250:
case 3737:
case 4028:
case 1464:
case 1262:
case 2370:
case 758:
case 509:
case 1939:
case 1910:
case 612:
case 3700:
case 3959:
case 299:
case 1419:
case 2290:
case 2678:
case 1102:
case 3063:
case 1797:
case 3450:
case 2601:
case 2865:
case 2314:
case 2033:
case 1100:
case 1287:
case 3374:
case 3421:
case 2292:
case 3618:
case 1399:
case 2546:
case 601:
case 3254:
case 1345:
case 666:
case 2673:
case 3681:
case 5:
case 3068:
case 3559:
case 3605:
case 688:
case 3861:
case 1539:
case 3197:
case 233:
case 3702:
case 25:
case 3339:
case 798:
case 2372:
case 3545:
case 1260:
case 2836:
case 1743:
case 2767:
case 255:
case 1359:
case 147:
case 1137:
case 2606:
case 845:
case 2798:
case 573:
case 1591:
case 4005:
case 2283:
case 1331:
case 870:
case 1956:
case 3351:
case 2566:
case 2415:
case 1000:
case 2758:
case 2133:
case 122:
case 611:
case 978:
case 2216:
case 1869:
case 2935:
case 3168:
case 44:
case 650:
case 2747:
case 445:
case 1240:
case 2324:
case 3565:
case 1996:
case 2471:
case 1288:
case 1899:
case 3617:
case 846:
case 3549:
case 3924:
case 2991:
case 1793:
case 2556:
case 882:
case 283:
case 3442:
case 638:
case 1966:
case 3361:
case 3595:
case 897:
case 3198:
case 3147:
case 2336:
case 2922:
case 1403:
case 2768:
case 3810:
case 1561:
case 497:
case 2520:
case 1138:
case 1753:
case 446:
case 2242:
case 3609:
case 3158:
case 3080:
case 1678:
case 2430:
case 1685:
case 3462:
case 1946:
case 3341:
case 2102:
case 2797:
case 1314:
case 66:
case 2939:
case 3570:
case 2910:
case 1425:
case 3851:
case 3972:
case 1226:
case 3180:
case 2512:
case 844:
case 3569:
case 3822:
case 4017:
case 3207:
case 256:
case 1369:
case 195:
case 19:
case 3230:
case 393:
case 2824:
case 2407:
case 771:
case 2974:
case 3167:
case 669:
case 3098:
case 27:
case 1302:
case 4062:
case 2095:
case 3745:
case 542:
case 1957:
case 3642:
case 729:
case 1228:
case 2567:
case 3799:
case 3417:
case 586:
case 1948:
case 1676:
case 888:
case 568:
case 1774:
case 240:
case 737:
case 2644:
case 2580:
case 3853:
case 488:
case 3096:
case 2746:
case 304:
case 2170:
case 1997:
case 963:
case 320:
case 401:
case 3900:
case 3759:
case 2217:
case 1603:
case 1739:
case 3502:
case 864:
case 1968:
case 584:
case 2069:
case 3012:
case 2558:
case 1722:
case 958:
case 1625:
case 1401:
case 3882:
case 670:
case 535:
case 53:
case 2619:
case 2547:
case 2630:
case 1478:
case 3662:
case 3765:
case 2953:
case 649:
case 2598:
case 553:
case 2195:
case 811:
case 1213:
case 850:
case 2993:
case 2837:
case 3405:
case 2165:
case 646:
case 2568:
case 4016:
case 1072:
case 1958:
case 697:
case 2963:
case 3755:
case 1947:
case 838:
case 1553:
case 274:
case 309:
case 1735:
case 3621:
case 1632:
case 2406:
case 3166:
case 2281:
case 3273:
case 167:
case 438:
case 1998:
case 792:
case 3353:
case 2205:
case 3692:
case 305:
case 2756:
case 1593:
case 4083:
case 2045:
case 3843:
case 103:
case 2218:
case 3066:
case 2300:
case 2557:
case 4052:
case 469:
case 2199:
case 534:
case 710:
case 58:
case 86:
case 3714:
case 315:
case 31:
case 1024:
case 3382:
case 644:
case 2548:
case 3616:
case 465:
case 3683:
case 128:
case 1172:
case 46:
case 2608:
case 3863:
case 2337:
case 2384:
case 319:
case 3423:
case 2031:
case 2838:
case 1489:
case 589:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1770742802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,];
var gg_b = "1770742802/";

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
