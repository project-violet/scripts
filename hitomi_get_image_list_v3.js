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
case 603:
case 4016:
case 3064:
case 2243:
case 3756:
case 2955:
case 3298:
case 300:
case 1871:
case 229:
case 1553:
case 2116:
case 2253:
case 159:
case 1979:
case 2945:
case 2286:
case 1971:
case 1666:
case 496:
case 1879:
case 3783:
case 2845:
case 771:
case 3724:
case 2094:
case 1562:
case 326:
case 3519:
case 999:
case 2268:
case 2076:
case 910:
case 2262:
case 1733:
case 5:
case 1503:
case 1386:
case 3226:
case 82:
case 3706:
case 2052:
case 2784:
case 304:
case 2767:
case 1435:
case 4095:
case 796:
case 2418:
case 162:
case 947:
case 2131:
case 2412:
case 3319:
case 1860:
case 3638:
case 3772:
case 914:
case 786:
case 3311:
case 1037:
case 3165:
case 1960:
case 915:
case 3797:
case 1129:
case 593:
case 3244:
case 3254:
case 1353:
case 1499:
case 3696:
case 2979:
case 878:
case 3140:
case 259:
case 1253:
case 3150:
case 2871:
case 2553:
case 1008:
case 129:
case 3344:
case 3592:
case 2586:
case 545:
case 2303:
case 3607:
case 2879:
case 3470:
case 1845:
case 544:
case 3326:
case 1855:
case 3504:
case 2666:
case 2682:
case 1076:
case 3219:
case 356:
case 1917:
case 3181:
case 4021:
case 1784:
case 85:
case 1052:
case 3236:
case 1195:
case 3990:
case 71:
case 2733:
case 2386:
case 1042:
case 3100:
case 3615:
case 2860:
case 1131:
case 3622:
case 1412:
case 2368:
case 691:
case 2435:
case 1418:
case 2960:
case 1027:
case 2129:
case 592:
case 681:
case 2499:
case 3544:
case 3392:
case 2353:
case 540:
case 809:
case 239:
case 3554:
case 3398:
case 66:
case 2343:
case 3647:
case 1311:
case 3037:
case 1797:
case 1165:
case 3960:
case 608:
case 2647:
case 3343:
case 0:
case 627:
case 3353:
case 1254:
case 820:
case 3733:
case 3491:
case 1226:
case 1706:
case 104:
case 2236:
case 2990:
case 2304:
case 141:
case 3435:
case 1632:
case 236:
case 2622:
case 2615:
case 3362:
case 3860:
case 3971:
case 2734:
case 2326:
case 824:
case 1336:
case 4081:
case 2470:
case 1724:
case 1204:
case 2607:
case 3303:
case 2181:
case 1519:
case 268:
case 256:
case 3568:
case 2696:
case 4040:
case 1511:
case 679:
case 1087:
case 2189:
case 2344:
case 1756:
case 2592:
case 3710:
case 3871:
case 2150:
case 100:
case 2674:
case 2577:
case 2598:
case 1746:
case 2354:
case 3979:
case 3543:
case 3063:
case 971:
case 3027:
case 2165:
case 2797:
case 377:
case 1461:
case 1392:
case 1544:
case 2254:
case 1657:
case 710:
case 1554:
case 850:
case 1377:
case 4065:
case 1647:
case 1304:
case 2093:
case 660:
case 835:
case 1526:
case 204:
case 1236:
case 3048:
case 2226:
case 54:
case 2706:
case 3058:
case 205:
case 1100:
case 1615:
case 415:
case 3131:
case 3412:
case 2319:
case 136:
case 2632:
case 241:
case 414:
case 3418:
case 715:
case 3094:
case 1607:
case 1470:
case 2783:
case 1326:
case 986:
case 855:
case 3286:
case 3076:
case 156:
case 1219:
case 2485:
case 2519:
case 3268:
case 3917:
case 489:
case 2087:
case 410:
case 1211:
case 1696:
case 2292:
case 3002:
case 830:
case 665:
case 1577:
case 996:
case 1674:
case 3955:
case 3008:
case 2756:
case 3243:
case 1592:
case 664:
case 1701:
case 3827:
case 1221:
case 3496:
case 3863:
case 2231:
case 81:
case 2993:
case 1090:
case 3952:
case 294:
case 3730:
case 3500:
case 295:
case 75:
case 3958:
case 2295:
case 1316:
case 3848:
case 284:
case 3144:
case 2466:
case 285:
case 3842:
case 3407:
case 2714:
case 3858:
case 709:
case 348:
case 2529:
case 924:
case 3927:
case 3389:
case 2482:
case 478:
case 1539:
case 925:
case 3265:
case 3177:
case 3902:
case 3045:
case 2216:
case 219:
case 2143:
case 3894:
case 2691:
case 3713:
case 3192:
case 906:
case 1516:
case 2153:
case 1339:
case 1751:
case 409:
case 143:
case 1741:
case 3422:
case 4043:
case 316:
case 2168:
case 2864:
case 3661:
case 2887:
case 3976:
case 45:
case 3581:
case 920:
case 1759:
case 3017:
case 1331:
case 4062:
case 73:
case 2473:
case 64:
case 3802:
case 3447:
case 4068:
case 560:
case 3457:
case 2531:
case 2221:
case 1295:
case 3136:
case 1103:
case 3200:
case 194:
case 72:
case 1993:
case 1714:
case 2316:
case 2229:
case 3685:
case 954:
case 3060:
case 886:
case 3565:
case 1239:
case 1488:
case 1529:
case 698:
case 3240:
case 190:
case 1143:
case 1691:
case 527:
case 3250:
case 3079:
case 1329:
case 2741:
case 2612:
case 243:
case 2625:
case 3438:
case 3289:
case 361:
case 934:
case 2618:
case 1964:
case 3432:
case 1987:
case 3119:
case 2331:
case 2759:
case 1864:
case 973:
case 950:
case 1887:
case 3281:
case 1168:
case 871:
case 180:
case 3071:
case 1699:
case 39:
case 1186:
case 467:
case 116:
case 1661:
case 434:
case 2281:
case 1976:
case 1581:
case 2119:
case 3780:
case 814:
case 29:
case 4019:
case 815:
case 28:
case 1198:
case 1192:
case 1908:
case 640:
case 2240:
case 1550:
case 2111:
case 2432:
case 1876:
case 3339:
case 1428:
case 261:
case 92:
case 1589:
case 1415:
case 343:
case 3625:
case 2289:
case 3741:
case 1422:
case 2365:
case 3612:
case 617:
case 1848:
case 773:
case 750:
case 1340:
case 1842:
case 1670:
case 2565:
case 1389:
case 430:
case 2937:
case 502:
case 3539:
case 3229:
case 2685:
case 455:
case 3531:
case 3221:
case 1863:
case 454:
case 601:
case 1474:
case 889:
case 3090:
case 767:
case 1948:
case 644:
case 1952:
case 576:
case 1730:
case 735:
case 1958:
case 1119:
case 2017:
case 3864:
case 2661:
case 4004:
case 3321:
case 3775:
case 380:
case 1071:
case 3699:
case 2802:
case 19:
case 2447:
case 3473:
case 2550:
case 2713:
case 1240:
case 2540:
case 2177:
case 1250:
case 2045:
case 18:
case 319:
case 1079:
case 3216:
case 2422:
case 3329:
case 1365:
case 472:
case 2415:
case 2669:
case 693:
case 1438:
case 1289:
case 3635:
case 2428:
case 2589:
case 342:
case 1111:
case 1432:
case 2670:
case 772:
case 720:
case 3893:
case 3466:
case 384:
case 2350:
case 2852:
case 1685:
case 1937:
case 2389:
case 3482:
case 503:
case 93:
case 4054:
case 2927:
case 1565:
case 248:
case 3231:
case 425:
case 978:
case 706:
case 3521:
case 2496:
case 2381:
case 2942:
case 2005:
case 1136:
case 3295:
case 3103:
case 2474:
case 2126:
case 3993:
case 868:
case 2839:
case 1921:
case 3774:
case 2931:
case 1829:
case 856:
case 2610:
case 2105:
case 33:
case 3252:
case 224:
case 3248:
case 2293:
case 2995:
case 3258:
case 225:
case 1593:
case 3242:
case 2026:
case 2782:
case 1409:
case 2788:
case 2895:
case 3227:
case 3707:
case 2414:
case 1364:
case 1929:
case 513:
case 1160:
case 3634:
case 2766:
case 2831:
case 3715:
case 150:
case 173:
case 3053:
case 2916:
case 3202:
case 2098:
case 220:
case 2077:
case 1451:
case 309:
case 3208:
case 1623:
case 1684:
case 2287:
case 3337:
case 836:
case 3276:
case 2117:
case 990:
case 67:
case 3747:
case 3068:
case 2816:
case 942:
case 1459:
case 134:
case 1393:
case 3294:
case 167:
case 2004:
case 3086:
case 4017:
case 35:
case 1610:
case 3376:
case 826:
case 611:
case 3552:
case 3190:
case 1995:
case 3558:
case 79:
case 1293:
case 2036:
case 3308:
case 1895:
case 607:
case 1788:
case 3800:
case 3237:
case 3563:
case 2929:
case 2160:
case 628:
case 1939:
case 3683:
case 761:
case 120:
case 1098:
case 1916:
case 1092:
case 1155:
case 3950:
case 597:
case 3508:
case 3738:
case 461:
case 3989:
case 3881:
case 2684:
case 1264:
case 3363:
case 2667:
case 2623:
case 3327:
case 4071:
case 2480:
case 841:
case 3594:
case 3342:
case 1475:
case 3358:
case 805:
case 3697:
case 587:
case 3678:
case 267:
case 234:
case 3352:
case 2171:
case 1276:
case 1062:
case 2889:
case 3480:
case 863:
case 2576:
case 1068:
case 961:
case 3171:
case 3459:
case 22:
case 3393:
case 2678:
case 367:
case 2594:
case 2358:
case 2672:
case 15:
case 1053:
case 2738:
case 2950:
case 1202:
case 1043:
case 2732:
case 2502:
case 1728:
case 109:
case 3179:
case 443:
case 1208:
case 3451:
case 622:
case 1413:
case 2327:
case 2881:
case 2606:
case 3011:
case 2989:
case 829:
case 3409:
case 2800:
case 178:
case 2308:
case 2624:
case 3821:
case 1537:
case 1707:
case 3364:
case 1263:
case 3387:
case 2683:
case 3929:
case 743:
case 3160:
case 4090:
case 3921:
case 2646:
case 2420:
case 674:
case 13:
case 3036:
case 1003:
case 2394:
case 355:
case 1258:
case 2552:
case 306:
case 2068:
case 2747:
case 551:
case 1889:
case 480:
case 2757:
case 1981:
case 1672:
case 795:
case 1594:
case 2086:
case 3475:
case 1678:
case 1348:
case 3816:
case 1940:
case 320:
case 3098:
case 372:
case 2043:
case 2722:
case 916:
case 2202:
case 3155:
case 1950:
case 442:
case 839:
case 1508:
case 1738:
case 2337:
case 3633:
case 490:
case 652:
case 623:
case 419:
case 3287:
case 1363:
case 3264:
case 1327:
case 3895:
case 790:
case 3788:
case 3044:
case 278:
case 1800:
case 3054:
case 2634:
case 1237:
case 2965:
case 484:
case 3939:
case 1683:
case 632:
case 2707:
case 1420:
case 2774:
case 495:
case 3931:
case 494:
case 2430:
case 3839:
case 1376:
case 3026:
case 780:
case 2796:
case 1190:
case 2258:
case 2242:
case 325:
case 948:
case 669:
case 1542:
case 3293:
case 1394:
case 23:
case 3105:
case 2252:
case 532:
case 1089:
case 3446:
case 3456:
case 2862:
case 299:
case 2255:
case 1545:
case 2579:
case 4064:
case 210:
case 1050:
case 3108:
case 3016:
case 4087:
case 1279:
case 3194:
case 705:
case 3785:
case 2843:
case 2986:
case 3877:
case 569:
case 2853:
case 3892:
case 3390:
case 2968:
case 929:
case 3176:
case 1614:
case 1517:
case 1081:
case 3590:
case 89:
case 3926:
case 214:
case 2371:
case 441:
case 2725:
case 3095:
case 1735:
case 2718:
case 3854:
case 977:
case 1000:
case 1317:
case 3031:
case 405:
case 726:
case 4093:
case 404:
case 3406:
case 861:
case 2560:
case 2065:
case 1799:
case 2680:
case 552:
case 1260:
case 3497:
case 1355:
case 3478:
case 3944:
case 88:
case 2659:
case 2379:
case 963:
case 1675:
case 3954:
case 1862:
case 90:
case 2410:
case 1868:
case 1187:
case 3911:
case 1601:
case 1953:
case 2555:
case 1245:
case 110:
case 2279:
case 199:
case 1886:
case 1853:
case 1571:
case 189:
case 1986:
case 1843:
case 959:
case 574:
case 1962:
case 3434:
case 2517:
case 736:
case 2614:
case 3811:
case 1968:
case 3290:
case 3936:
case 2000:
case 115:
case 2505:
case 1903:
case 1371:
case 1193:
case 1712:
case 2433:
case 768:
case 3613:
case 816:
case 1423:
case 1484:
case 3137:
case 2799:
case 570:
case 1560:
case 522:
case 1379:
case 2345:
case 962:
case 1659:
case 2355:
case 1163:
case 1039:
case 3355:
case 697:
case 819:
case 1944:
case 3345:
case 462:
case 2769:
case 1152:
case 687:
case 1148:
case 3735:
case 880:
case 2290:
case 1031:
case 2613:
case 3433:
case 3791:
case 1406:
case 1194:
case 1785:
case 21:
case 3305:
case 1898:
case 895:
case 1390:
case 762:
case 1483:
case 196:
case 2811:
case 3517:
case 2434:
case 2919:
case 3089:
case 1446:
case 2630:
case 186:
case 1456:
case 1620:
case 3410:
case 459:
case 968:
case 3545:
case 884:
case 3050:
case 1992:
case 1016:
case 3279:
case 1804:
case 956:
case 507:
case 3555:
case 3680:
case 843:
case 538:
case 1029:
case 2163:
case 3649:
case 4027:
case 2954:
case 1836:
case 1761:
case 2472:
case 2944:
case 2497:
case 347:
case 1936:
case 3651:
case 3718:
case 3903:
case 2854:
case 1769:
case 2095:
case 3641:
case 4048:
case 4052:
case 1021:
case 3484:
case 4076:
case 2390:
case 2904:
case 3571:
case 2877:
case 2194:
case 1919:
case 763:
case 3962:
case 4094:
case 1434:
case 2176:
case 1811:
case 3217:
case 296:
case 900:
case 3862:
case 3360:
case 777:
case 2620:
case 4002:
case 558:
case 613:
case 566:
case 286:
case 1630:
case 4008:
case 1911:
case 2804:
case 3601:
case 3245:
case 2108:
case 2992:
case 3579:
case 3943:
case 3886:
case 2102:
case 926:
case 2357:
case 3901:
case 625:
case 2574:
case 369:
case 4069:
case 2698:
case 3373:
case 2677:
case 1274:
case 624:
case 3809:
case 3191:
case 7:
case 3643:
case 1067:
case 1748:
case 2920:
case 1752:
case 3421:
case 1742:
case 1611:
case 596:
case 111:
case 2315:
case 3429:
case 2820:
case 2322:
case 1465:
case 1619:
case 793:
case 586:
case 3668:
case 128:
case 1830:
case 1332:
case 2328:
case 3582:
case 332:
case 2161:
case 2604:
case 3199:
case 107:
case 2737:
case 3686:
case 352:
case 3880:
case 3382:
case 2238:
case 2528:
case 1215:
case 808:
case 1222:
case 2232:
case 2010:
case 2522:
case 238:
case 1913:
case 1708:
case 1538:
case 2515:
case 1228:
case 94:
case 2440:
case 620:
case 3849:
case 2307:
case 672:
case 493:
case 3603:
case 3941:
case 3859:
case 2626:
case 3949:
case 571:
case 3851:
case 2654:
case 2644:
case 606:
case 27:
case 1185:
case 3980:
case 1794:
case 1813:
case 3034:
case 2396:
case 1400:
case 1347:
case 51:
case 998:
case 1677:
case 401:
case 1357:
case 3495:
case 654:
case 1692:
case 3006:
case 3118:
case 2296:
case 2611:
case 3112:
case 445:
case 1920:
case 2748:
case 2067:
case 1169:
case 1596:
case 1328:
case 1161:
case 792:
case 3288:
case 417:
case 2338:
case 3282:
case 1737:
case 864:
case 3072:
case 740:
case 2763:
case 207:
case 3097:
case 3078:
case 630:
case 865:
case 2708:
case 2538:
case 2913:
case 370:
case 1515:
case 1010:
case 1232:
case 2222:
case 1489:
case 2215:
case 1528:
case 673:
case 3416:
case 1626:
case 3764:
case 2636:
case 3787:
case 1440:
case 857:
case 634:
case 4085:
case 1374:
case 635:
case 1170:
case 1547:
case 2776:
case 1481:
case 1396:
case 2813:
case 2185:
case 701:
case 17:
case 1573:
case 2975:
case 3257:
case 1851:
case 2273:
case 992:
case 62:
case 1959:
case 3185:
case 1980:
case 3794:
case 2024:
case 3813:
case 2046:
case 123:
case 3222:
case 1388:
case 3538:
case 253:
case 1849:
case 2764:
case 3636:
case 2787:
case 982:
case 1941:
case 1859:
case 1366:
case 233:
case 2282:
case 1429:
case 945:
case 3465:
case 328:
case 2439:
case 3332:
case 944:
case 2914:
case 1582:
case 132:
case 1199:
case 307:
case 2078:
case 2097:
case 901:
case 3763:
case 2266:
case 1686:
case 1653:
case 2495:
case 4018:
case 169:
case 1373:
case 1809:
case 1191:
case 488:
case 3023:
case 2112:
case 2431:
case 917:
case 2118:
case 311:
case 3296:
case 3930:
case 3644:
case 1273:
case 514:
case 2573:
case 1975:
case 3654:
case 515:
case 3396:
case 2980:
case 1024:
case 37:
case 1083:
case 881:
case 3232:
case 9:
case 2388:
case 1056:
case 3522:
case 2880:
case 3489:
case 3528:
case 2941:
case 86:
case 3450:
case 3626:
case 983:
case 1787:
case 2603:
case 3307:
case 3328:
case 1914:
case 366:
case 2429:
case 3322:
case 358:
case 2588:
case 3315:
case 2662:
case 1282:
case 802:
case 1266:
case 2686:
case 678:
case 2566:
case 2199:
case 1097:
case 1078:
case 3400:
case 269:
case 589:
case 3677:
case 2373:
case 3698:
case 3357:
case 1495:
case 3574:
case 876:
case 1118:
case 2135:
case 2421:
case 3033:
case 1814:
case 1112:
case 1793:
case 1431:
case 4091:
case 3920:
case 1125:
case 174:
case 3169:
case 3596:
case 3695:
case 610:
case 578:
case 757:
case 1600:
case 699:
case 2051:
case 1477:
case 4038:
case 2834:
case 1122:
case 3631:
case 1956:
case 313:
case 3779:
case 464:
case 1128:
case 1883:
case 437:
case 2132:
case 1946:
case 2411:
case 1856:
case 2665:
case 2419:
case 3810:
case 3312:
case 3771:
case 801:
case 2934:
case 3325:
case 231:
case 1924:
case 1846:
case 2080:
case 2585:
case 3639:
case 2270:
case 1147:
case 1075:
case 689:
case 2049:
case 844:
case 2385:
case 3518:
case 3933:
case 460:
case 3525:
case 1569:
case 3512:
case 2436:
case 55:
case 1370:
case 615:
case 1640:
case 1878:
case 3291:
case 2001:
case 1650:
case 840:
case 1107:
case 765:
case 737:
case 1444:
case 1997:
case 3760:
case 764:
case 647:
case 3833:
case 457:
case 1806:
case 1681:
case 2261:
case 892:
case 1051:
case 4015:
case 3443:
case 3399:
case 4028:
case 3453:
case 479:
case 1411:
case 2361:
case 2883:
case 2128:
case 2115:
case 3755:
case 2983:
case 246:
case 3335:
case 131:
case 2846:
case 1934:
case 3629:
case 1419:
case 3173:
case 2075:
case 2147:
case 3391:
case 3486:
case 1049:
case 2404:
case 3717:
case 1059:
case 2157:
case 1270:
case 1790:
case 3218:
case 96:
case 221:
case 2196:
case 3225:
case 1269:
case 1385:
case 2426:
case 2650:
case 981:
case 2174:
case 2897:
case 2878:
case 387:
case 1001:
case 2370:
case 2872:
case 2978:
case 3166:
case 3599:
case 991:
case 2972:
case 2107:
case 1009:
case 2454:
case 218:
case 2681:
case 3867:
case 2561:
case 2806:
case 2014:
case 3454:
case 4088:
case 1299:
case 3107:
case 2599:
case 2166:
case 1760:
case 3997:
case 550:
case 1833:
case 3014:
case 4066:
case 3806:
case 2867:
case 2188:
case 2823:
case 3906:
case 1518:
case 1525:
case 2218:
case 1235:
case 3196:
case 321:
case 3569:
case 2923:
case 927:
case 2591:
case 776:
case 908:
case 2403:
case 535:
case 3878:
case 3897:
case 1291:
case 287:
case 534:
case 3650:
case 3856:
case 2629:
case 1810:
case 1312:
case 2462:
case 1771:
case 4073:
case 3924:
case 1318:
case 346:
case 791:
case 3157:
case 979:
case 3404:
case 2391:
case 2486:
case 2173:
case 2453:
case 3492:
case 3600:
case 249:
case 3498:
case 2755:
case 1631:
case 3956:
case 3115:
case 1910:
case 113:
case 3361:
case 1779:
case 3128:
case 3883:
case 3824:
case 2299:
case 3009:
case 520:
case 1823:
case 703:
case 3261:
case 960:
case 1182:
case 2020:
case 3790:
case 1218:
case 2525:
case 2235:
case 1225:
case 3269:
case 351:
case 1535:
case 506:
case 671:
case 1403:
case 937:
case 2639:
case 331:
case 1335:
case 2318:
case 1462:
case 3934:
case 1629:
case 3665:
case 2312:
case 965:
case 1173:
case 1391:
case 1486:
case 525:
case 149:
case 403:
case 3051:
case 1443:
case 3041:
case 1621:
case 3132:
case 3411:
case 2779:
case 898:
case 686:
case 3138:
case 213:
case 3834:
case 2631:
case 3151:
case 2372:
case 2870:
case 365:
case 2711:
case 2378:
case 2397:
case 629:
case 1885:
case 1256:
case 102:
case 2546:
case 833:
case 3038:
case 548:
case 1113:
case 2234:
case 2524:
case 1283:
case 1534:
case 1704:
case 1224:
case 2627:
case 3149:
case 2719:
case 3471:
case 2969:
case 3233:
case 1334:
case 3567:
case 3584:
case 2861:
case 2736:
case 2506:
case 3687:
case 3935:
case 2324:
case 516:
case 2490:
case 3101:
case 3899:
case 3991:
case 1272:
case 357:
case 2597:
case 2694:
case 3891:
case 16:
case 2572:
case 1088:
case 713:
case 677:
case 3835:
case 870:
case 181:
case 2346:
case 822:
case 2676:
case 797:
case 1652:
case 1397:
case 1642:
case 4013:
case 1372:
case 3445:
case 3022:
case 2792:
case 1556:
case 103:
case 449:
case 202:
case 2777:
case 3028:
case 1583:
case 1306:
case 2985:
case 3786:
case 3057:
case 787:
case 1719:
case 3175:
case 60:
case 2073:
case 291:
case 487:
case 2130:
case 662:
case 3703:
case 1506:
case 3267:
case 2726:
case 1969:
case 3925:
case 2334:
case 3405:
case 1602:
case 918:
case 4030:
case 1490:
case 1608:
case 3074:
case 921:
case 2297:
case 2278:
case 1694:
case 1597:
case 1676:
case 281:
case 3818:
case 852:
case 3812:
case 3310:
case 1999:
case 3272:
case 4014:
case 1891:
case 418:
case 3088:
case 2310:
case 2812:
case 1460:
case 2818:
case 3754:
case 2925:
case 1233:
case 3206:
case 1584:
case 87:
case 3726:
case 2267:
case 1664:
case 1687:
case 636:
case 2223:
case 1935:
case 2703:
case 2533:
case 160:
case 1101:
case 1899:
case 2405:
case 3637:
case 2786:
case 1180:
case 3985:
case 1384:
case 3283:
case 1367:
case 668:
case 949:
case 3704:
case 3534:
case 3224:
case 3073:
case 2047:
case 2768:
case 2762:
case 912:
case 1479:
case 1151:
case 165:
case 1141:
case 164:
case 1210:
case 3256:
case 302:
case 3798:
case 2753:
case 3246:
case 718:
case 3113:
case 3572:
case 3694:
case 3597:
case 1114:
case 2835:
case 3346:
case 1825:
case 3356:
case 4009:
case 108:
case 1812:
case 1310:
case 3324:
case 641:
case 1223:
case 1533:
case 1703:
case 3506:
case 3736:
case 3861:
case 3383:
case 2687:
case 731:
case 2567:
case 1912:
case 2584:
case 2523:
case 3969:
case 2233:
case 1925:
case 3120:
case 1405:
case 3608:
case 451:
case 260:
case 1417:
case 2323:
case 811:
case 751:
case 2180:
case 4059:
case 1333:
case 1786:
case 2159:
case 431:
case 1175:
case 1768:
case 1047:
case 595:
case 584:
case 3652:
case 600:
case 1455:
case 2141:
case 237:
case 585:
case 3658:
case 3372:
case 2151:
case 1510:
case 828:
case 1022:
case 2038:
case 4051:
case 303:
case 179:
case 4041:
case 1807:
case 3201:
case 3375:
case 1458:
case 958:
case 1448:
case 694:
case 1974:
case 966:
case 3655:
case 2530:
case 1996:
case 1025:
case 3069:
case 2437:
case 3514:
case 2313:
case 1427:
case 1896:
case 812:
case 198:
case 1463:
case 432:
case 3729:
case 3209:
case 684:
case 1922:
case 3110:
case 2938:
case 2513:
case 1156:
case 1928:
case 1213:
case 1146:
case 1408:
case 3251:
case 97:
case 690:
case 2789:
case 897:
case 3241:
case 1847:
case 619:
case 1957:
case 680:
case 1947:
case 505:
case 887:
case 3575:
case 3:
case 1815:
case 2838:
case 3280:
case 2134:
case 1320:
case 1822:
case 2832:
case 541:
case 3493:
case 3501:
case 3866:
case 2448:
case 3359:
case 4006:
case 2452:
case 344:
case 2442:
case 3349:
case 2458:
case 2807:
case 3795:
case 3167:
case 2025:
case 2230:
case 3888:
case 3123:
case 2520:
case 1700:
case 907:
case 556:
case 3380:
case 770:
case 2896:
case 722:
case 298:
case 1313:
case 3214:
case 2427:
case 4078:
case 1437:
case 813:
case 1099:
case 317:
case 2178:
case 2197:
case 911:
case 3671:
case 2172:
case 433:
case 3739:
case 3487:
case 1740:
case 2213:
case 2915:
case 643:
case 1513:
case 1938:
case 2922:
case 3716:
case 4056:
case 2402:
case 3309:
case 2847:
case 3551:
case 453:
case 1789:
case 3873:
case 2408:
case 340:
case 3973:
case 2494:
case 3559:
case 2957:
case 4024:
case 3301:
case 2828:
case 382:
case 3580:
case 536:
case 2124:
case 1832:
case 2476:
case 1134:
case 3660:
case 2275:
case 3957:
case 2301:
case 1249:
case 2559:
case 953:
case 970:
case 1259:
case 69:
case 2973:
case 851:
case 3815:
case 2660:
case 3828:
case 2716:
case 3915:
case 193:
case 3156:
case 3928:
case 292:
case 1314:
case 728:
case 2541:
case 2551:
case 539:
case 1605:
case 3402:
case 68:
case 1241:
case 2982:
case 407:
case 3427:
case 3896:
case 2988:
case 3463:
case 398:
case 2509:
case 559:
case 3907:
case 2966:
case 217:
case 3197:
case 3178:
case 975:
case 1375:
case 3458:
case 1201:
case 4084:
case 50:
case 933:
case 1645:
case 4067:
case 3448:
case 2359:
case 244:
case 3452:
case 3974:
case 2731:
case 2501:
case 2882:
case 2380:
case 201:
case 1133:
case 2123:
case 3996:
case 3520:
case 2795:
case 2167:
case 3025:
case 2575:
case 1549:
case 2070:
case 3781:
case 1275:
case 2249:
case 821:
case 616:
case 1580:
case 3330:
case 3832:
case 283:
case 3838:
case 1464:
case 3932:
case 3740:
case 766:
case 192:
case 818:
case 758:
case 1716:
case 438:
case 1873:
case 2251:
case 140:
case 1541:
case 1988:
case 969:
case 738:
case 1214:
case 3099:
case 117:
case 1341:
case 466:
case 2209:
case 529:
case 1671:
case 1351:
case 1739:
case 1493:
case 4033:
case 1866:
case 1359:
case 1679:
case 2645:
case 1349:
case 2375:
case 1167:
case 2069:
case 1888:
case 1123:
case 846:
case 3530:
case 3700:
case 3220:
case 2133:
case 101:
case 77:
case 3035:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752541201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,];
var gg_b = "1752541201/";

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
