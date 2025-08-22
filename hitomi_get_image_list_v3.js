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
case 657:
case 2719:
case 125:
case 1172:
case 3101:
case 3102:
case 1429:
case 3677:
case 3215:
case 2652:
case 967:
case 3780:
case 2592:
case 1078:
case 3822:
case 2136:
case 1109:
case 3821:
case 2200:
case 132:
case 2358:
case 2204:
case 740:
case 2178:
case 2470:
case 2856:
case 2009:
case 1976:
case 3510:
case 2474:
case 833:
case 3906:
case 1794:
case 847:
case 2334:
case 1790:
case 472:
case 1221:
case 262:
case 450:
case 3965:
case 49:
case 1598:
case 2072:
case 2307:
case 604:
case 905:
case 345:
case 1573:
case 2931:
case 3229:
case 1744:
case 3145:
case 2143:
case 830:
case 2979:
case 2039:
case 1006:
case 1747:
case 4075:
case 3076:
case 3050:
case 2258:
case 3562:
case 2304:
case 1983:
case 3936:
case 3054:
case 715:
case 2621:
case 1586:
case 2902:
case 2328:
case 2535:
case 3533:
case 1797:
case 135:
case 2337:
case 3451:
case 1569:
case 3851:
case 4082:
case 3517:
case 3452:
case 4081:
case 293:
case 1957:
case 521:
case 951:
case 2877:
case 3315:
case 2313:
case 1637:
case 60:
case 3131:
case 475:
case 310:
case 3943:
case 1716:
case 3329:
case 1613:
case 1924:
case 2826:
case 1252:
case 254:
case 3787:
case 2426:
case 1139:
case 3259:
case 737:
case 3670:
case 698:
case 2165:
case 1322:
case 3163:
case 3753:
case 259:
case 382:
case 342:
case 783:
case 1321:
case 902:
case 519:
case 3671:
case 1602:
case 3343:
case 2345:
case 2547:
case 2232:
case 1324:
case 68:
case 2657:
case 3929:
case 1320:
case 3107:
case 1308:
case 3427:
case 638:
case 2786:
case 703:
case 3827:
case 1735:
case 1250:
case 2395:
case 2769:
case 3438:
case 797:
case 434:
case 2159:
case 3685:
case 3378:
case 3265:
case 1695:
case 3850:
case 1238:
case 3876:
case 85:
case 1227:
case 2608:
case 890:
case 3454:
case 1865:
case 2900:
case 4084:
case 3336:
case 1465:
case 2904:
case 1059:
case 2839:
case 3052:
case 195:
case 1126:
case 351:
case 3564:
case 2302:
case 247:
case 862:
case 2077:
case 1645:
case 179:
case 3915:
case 2624:
case 3051:
case 1519:
case 1350:
case 2638:
case 3959:
case 628:
case 1208:
case 1354:
case 2070:
case 3483:
case 2934:
case 2809:
case 2363:
case 1436:
case 568:
case 2409:
case 3799:
case 43:
case 3365:
case 3883:
case 424:
case 3567:
case 689:
case 1741:
case 2074:
case 4087:
case 1951:
case 3511:
case 448:
case 1792:
case 1015:
case 2245:
case 2871:
case 3243:
case 1791:
case 1220:
case 2872:
case 3512:
case 3457:
case 1843:
case 367:
case 1443:
case 2115:
case 2748:
case 1632:
case 3424:
case 3137:
case 223:
case 2594:
case 3820:
case 2201:
case 160:
case 591:
case 3100:
case 3808:
case 2654:
case 1766:
case 2676:
case 3104:
case 1893:
case 1525:
case 1789:
case 2958:
case 2773:
case 411:
case 1174:
case 17:
case 1170:
case 1478:
case 1878:
case 192:
case 1663:
case 3236:
case 2854:
case 1034:
case 2454:
case 3379:
case 112:
case 1693:
case 2450:
case 2158:
case 2850:
case 2876:
case 2768:
case 6:
case 3904:
case 1385:
case 2336:
case 511:
case 2564:
case 3928:
case 1643:
case 2052:
case 1832:
case 732:
case 3624:
case 1431:
case 4019:
case 333:
case 1553:
case 1372:
case 2915:
case 278:
case 426:
case 3547:
case 3232:
case 53:
case 3026:
case 1761:
case 2671:
case 127:
case 524:
case 2343:
case 320:
case 2393:
case 1058:
case 3769:
case 959:
case 2130:
case 2438:
case 3597:
case 3683:
case 1239:
case 669:
case 2781:
case 176:
case 882:
case 267:
case 1271:
case 1714:
case 477:
case 1445:
case 1272:
case 3590:
case 2424:
case 115:
case 722:
case 2137:
case 3594:
case 1926:
case 2824:
case 3676:
case 1703:
case 2104:
case 2408:
case 3279:
case 2021:
case 3544:
case 2022:
case 2775:
case 3958:
case 3773:
case 1518:
case 3540:
case 1000:
case 3627:
case 1879:
case 1479:
case 3295:
case 962:
case 1004:
case 2959:
case 670:
case 2567:
case 3930:
case 652:
case 3074:
case 2278:
case 3934:
case 3809:
case 3485:
case 3363:
case 3885:
case 2365:
case 2883:
case 1122:
case 2799:
case 3129:
case 1402:
case 1802:
case 1584:
case 1580:
case 3332:
case 95:
case 52:
case 205:
case 183:
case 66:
case 3331:
case 143:
case 2512:
case 1401:
case 330:
case 3472:
case 3872:
case 1801:
case 414:
case 2083:
case 3470:
case 2514:
case 3085:
case 3009:
case 3856:
case 1108:
case 3334:
case 3963:
case 1079:
case 1800:
case 2965:
case 2195:
case 1582:
case 1804:
case 3193:
case 3330:
case 1404:
case 245:
case 2503:
case 1124:
case 2723:
case 930:
case 1837:
case 3932:
case 1001:
case 594:
case 197:
case 3072:
case 1428:
case 3566:
case 35:
case 1002:
case 3143:
case 1575:
case 2718:
case 2101:
case 681:
case 553:
case 923:
case 641:
case 3228:
case 3719:
case 2024:
case 3651:
case 213:
case 2588:
case 3652:
case 1767:
case 774:
case 1599:
case 2822:
case 1183:
case 795:
case 421:
case 1274:
case 878:
case 1095:
case 1549:
case 3204:
case 1712:
case 3591:
case 2179:
case 210:
case 2943:
case 572:
case 59:
case 550:
case 1568:
case 354:
case 2132:
case 3426:
case 2670:
case 41:
case 3165:
case 2163:
case 2993:
case 3106:
case 2259:
case 1176:
case 3230:
case 3234:
case 2753:
case 3755:
case 867:
case 2027:
case 242:
case 431:
case 3039:
case 805:
case 4073:
case 2561:
case 1374:
case 3979:
case 1127:
case 1434:
case 2054:
case 2936:
case 3621:
case 3258:
case 2050:
case 1430:
case 3337:
case 1031:
case 2851:
case 3902:
case 3328:
case 3901:
case 307:
case 2315:
case 3477:
case 2517:
case 4048:
case 947:
case 1032:
case 1668:
case 364:
case 3011:
case 620:
case 1515:
case 28:
case 24:
case 3955:
case 1898:
case 1498:
case 1190:
case 3012:
case 2489:
case 560:
case 2805:
case 2889:
case 3403:
case 3795:
case 3369:
case 1362:
case 2987:
case 440:
case 4007:
case 857:
case 3814:
case 1144:
case 3410:
case 1448:
case 1140:
case 238:
case 3067:
case 1848:
case 386:
case 2891:
case 1346:
case 3:
case 2491:
case 2662:
case 79:
case 750:
case 772:
case 3248:
case 1210:
case 2040:
case 3522:
case 427:
case 2892:
case 2044:
case 1771:
case 2492:
case 1709:
case 708:
case 1785:
case 3488:
case 3180:
case 2617:
case 1396:
case 2275:
case 2094:
case 647:
case 2842:
case 3635:
case 2633:
case 2090:
case 1116:
case 370:
case 3731:
case 1262:
case 3732:
case 918:
case 574:
case 177:
case 2614:
case 2399:
case 2765:
case 36:
case 3896:
case 2706:
case 630:
case 1739:
case 1388:
case 2047:
case 3605:
case 1233:
case 3286:
case 3153:
case 799:
case 3060:
case 3817:
case 3641:
case 301:
case 2268:
case 1296:
case 898:
case 3417:
case 3552:
case 623:
case 3064:
case 941:
case 775:
case 2435:
case 1886:
case 2984:
case 3398:
case 3833:
case 1486:
case 1055:
case 563:
case 1911:
case 1469:
case 2980:
case 3551:
case 1303:
case 483:
case 2382:
case 443:
case 1649:
case 1197:
case 2016:
case 3691:
case 437:
case 4013:
case 136:
case 2381:
case 2035:
case 1455:
case 1086:
case 3694:
case 739:
case 1312:
case 2975:
case 838:
case 3758:
case 1311:
case 517:
case 114:
case 3460:
case 3017:
case 381:
case 1903:
case 3864:
case 3464:
case 3998:
case 257:
case 734:
case 3061:
case 1726:
case 1618:
case 1506:
case 2982:
case 1623:
case 3062:
case 1910:
case 403:
case 2981:
case 3550:
case 2416:
case 84:
case 119:
case 2816:
case 1914:
case 2287:
case 662:
case 4045:
case 2497:
case 3046:
case 2897:
case 209:
case 3527:
case 3325:
case 4095:
case 2612:
case 690:
case 2169:
case 2253:
case 3734:
case 2847:
case 2611:
case 1260:
case 2759:
case 96:
case 2447:
case 1680:
case 1687:
case 2148:
case 3181:
case 2840:
case 3713:
case 2844:
case 2092:
case 1578:
case 3616:
case 3728:
case 2091:
case 1825:
case 9:
case 3182:
case 3219:
case 884:
case 1189:
case 2968:
case 1212:
case 3704:
case 3524:
case 2894:
case 828:
case 2890:
case 1653:
case 2198:
case 1543:
case 748:
case 1770:
case 849:
case 11:
case 1756:
case 1774:
case 1211:
case 2041:
case 3088:
case 2173:
case 955:
case 2066:
case 525:
case 2353:
case 1098:
case 2572:
case 3355:
case 3557:
case 3003:
case 1360:
case 3811:
case 3647:
case 3969:
case 1073:
case 20:
case 2571:
case 964:
case 665:
case 4063:
case 2509:
case 2729:
case 2585:
case 946:
case 3867:
case 2218:
case 2387:
case 659:
case 969:
case 1961:
case 1819:
case 2223:
case 3149:
case 400:
case 966:
case 4043:
case 1340:
case 1752:
case 3667:
case 3323:
case 425:
case 2538:
case 2325:
case 989:
case 2707:
case 3497:
case 2527:
case 1133:
case 2255:
case 432:
case 4093:
case 500:
case 3169:
case 304:
case 685:
case 984:
case 4078:
case 8:
case 645:
case 944:
case 1531:
case 2694:
case 2758:
case 3975:
case 2973:
case 172:
case 3035:
case 2033:
case 1453:
case 2690:
case 613:
case 357:
case 1532:
case 2168:
case 1989:
case 281:
case 1905:
case 2860:
case 3380:
case 2640:
case 1487:
case 2061:
case 3539:
case 3982:
case 2644:
case 3416:
case 2319:
case 1294:
case 3089:
case 2557:
case 2003:
case 3066:
case 422:
case 1290:
case 2355:
case 1484:
case 1722:
case 1935:
case 3571:
case 4065:
case 1880:
case 4006:
case 777:
case 2811:
case 610:
case 2867:
case 1240:
case 2010:
case 642:
case 682:
case 3585:
case 1316:
case 2225:
case 3223:
case 801:
case 1082:
case 3715:
case 417:
case 3092:
case 199:
case 3444:
case 3440:
case 1418:
case 3840:
case 1423:
case 175:
case 1595:
case 1823:
case 2616:
case 86:
case 2508:
case 3890:
case 2700:
case 3198:
case 3494:
case 2704:
case 2524:
case 1103:
case 3894:
case 361:
case 3041:
case 3660:
case 3280:
case 1347:
case 852:
case 3664:
case 1757:
case 273:
case 3282:
case 3891:
case 2:
case 2521:
case 139:
case 3491:
case 2522:
case 3892:
case 1997:
case 3492:
case 3044:
case 714:
case 3040:
case 3661:
case 1167:
case 134:
case 3441:
case 537:
case 3617:
case 3841:
case 2488:
case 2273:
case 1499:
case 961:
case 1899:
case 1783:
case 12:
case 583:
case 2779:
case 651:
case 796:
case 3090:
case 1686:
case 3442:
case 1289:
case 1112:
case 719:
case 3842:
case 1947:
case 1669:
case 1084:
case 3299:
case 38:
case 1513:
case 3953:
case 576:
case 3778:
case 2955:
case 264:
case 2011:
case 1241:
case 90:
case 1475:
case 474:
case 3805:
case 2012:
case 3793:
case 255:
case 2369:
case 1335:
case 1528:
case 3466:
case 3866:
case 2386:
case 1720:
case 1291:
case 3125:
case 1882:
case 246:
case 2118:
case 1881:
case 602:
case 338:
case 286:
case 2810:
case 2814:
case 1916:
case 3570:
case 2414:
case 3577:
case 527:
case 2641:
case 3268:
case 2552:
case 2642:
case 1389:
case 1738:
case 667:
case 1305:
case 2551:
case 3984:
case 3435:
case 3016:
case 2691:
case 1534:
case 1530:
case 3382:
case 2348:
case 188:
case 1087:
case 71:
case 2461:
case 148:
case 2919:
case 2692:
case 1940:
case 909:
case 252:
case 460:
case 389:
case 3097:
case 349:
case 270:
case 4029:
case 1392:
case 3614:
case 731:
case 2187:
case 2925:
case 2732:
case 328:
case 111:
case 1994:
case 344:
case 3526:
case 1868:
case 2763:
case 3399:
case 47:
case 1164:
case 492:
case 2666:
case 1698:
case 1342:
case 3603:
case 1633:
case 3266:
case 695:
case 1090:
case 3686:
case 1442:
case 3112:
case 3205:
case 679:
case 1841:
case 1617:
case 2709:
case 2785:
case 3783:
case 3997:
case 2214:
case 1661:
case 478:
case 3167:
case 3757:
case 821:
case 3023:
case 1662:
case 1282:
case 674:
case 1491:
case 339:
case 1574:
case 4052:
case 2848:
case 138:
case 1743:
case 3916:
case 1646:
case 3291:
case 3500:
case 3504:
case 1987:
case 1125:
case 4051:
case 3724:
case 1249:
case 1805:
case 2194:
case 2960:
case 1793:
case 1889:
case 3537:
case 2898:
case 2333:
case 1466:
case 3708:
case 2498:
case 2964:
case 953:
case 18:
case 718:
case 3513:
case 3084:
case 819:
case 14:
case 3875:
case 2873:
case 2668:
case 2317:
case 3087:
case 2310:
case 236:
case 908:
case 2314:
case 1016:
case 329:
case 3534:
case 831:
case 405:
case 692:
case 3530:
case 67:
case 1382:
case 99:
case 3738:
case 3389:
case 520:
case 2911:
case 2303:
case 1980:
case 2469:
case 3366:
case 3507:
case 3727:
case 3053:
case 1577:
case 1268:
case 2912:
case 1375:
case 2147:
case 1688:
case 660:
case 3754:
case 533:
case 1155:
case 3750:
case 3776:
case 547:
case 1526:
case 3160:
case 144:
case 3994:
case 2217:
case 3868:
case 1047:
case 587:
case 1399:
case 3990:
case 1614:
case 277:
case 3392:
case 166:
case 1923:
case 2681:
case 128:
case 2262:
case 1918:
case 3558:
case 2116:
case 1759:
case 1611:
case 221:
case 786:
case 593:
case 911:
case 746:
case 3941:
case 826:
case 1612:
case 3394:
case 769:
case 868:
case 1323:
case 413:
case 3751:
case 3216:
case 4020:
case 1897:
case 109:
case 2777:
case 3991:
case 3344:
case 3161:
case 1287:
case 1667:
case 1949:
case 3146:
case 3297:
case 2914:
case 219:
case 1816:
case 445:
case 929:
case 559:
case 1981:
case 4057:
case 485:
case 3487:
case 2726:
case 891:
case 2367:
case 308:
case 2506:
case 2565:
case 988:
case 4083:
case 3966:
case 157:
case 554:
case 625:
case 214:
case 93:
case 1380:
case 2903:
case 3247:
case 3196:
case 3905:
case 3531:
case 7:
case 1975:
case 565:
case 2855:
case 2086:
case 3453:
case 3579:
case 2191:
case 2961:
case 198:
case 3082:
case 1387:
case 76:
case 2048:
case 2962:
case 1585:
case 1729:
case 3722:
case 10:
case 2364:
case 2360:
case 2141:
case 3880:
case 2073:
case 3480:
case 3075:
case 2142:
case 1089:
case 4076:
case 2917:
case 1005:
case 1066:
case 3721:
case 1572:
case 2098:
case 161:
case 2211:
case 1041:
case 2774:
case 92:
case 55:
case 3099:
case 3545:
case 1284:
case 2543:
case 2756:
case 635:
case 1890:
case 482:
case 4027:
case 1490:
case 877:
case 3655:
case 442:
case 2653:
case 2212:
case 1968:
case 1494:
case 394:
case 2105:
case 3103:
case 4038:
case 939:
case 3823:
case 2825:
case 2593:
case 562:
case 410:
case 1844:
case 701:
case 1092:
case 3114:
case 1444:
case 2687:
case 316:
case 2267:
case 3818:
case 3623:
case 1062:
case 1948:
case 1550:
case 4072:
case 3914:
case 2563:
case 1644:
case 3726:
case 1061:
case 2887:
case 208:
case 314:
case 1460:
case 141:
case 2532:
case 1860:
case 2905:
case 1017:
case 2196:
case 2966:
case 4085:
case 4009:
case 1464:
case 1998:
case 2853:
case 462:
case 1690:
case 2453:
case 29:
case 1694:
case 510:
case 738:
case 3684:
case 603:
case 2068:
case 2117:
case 697:
case 2941:
case 3988:
case 3135:
case 1734:
case 2390:
case 1046:
case 82:
case 834:
case 2751:
case 2340:
case 78:
case 118:
case 2752:
case 3777:
case 2991:
case 2545:
case 2099:
case 31:
case 3774:
case 3211:
case 1175:
case 2347:
case 600:
case 1704:
case 3189:
case 3212:
case 2103:
case 1520:
case 3166:
case 2655:
case 1700:
case 1616:
case 658:
case 3425:
case 465:
case 811:
case 2423:
case 2595:
case 2823:
case 1182:
case 1737:
case 3593:
case 3825:
case 2110:
case 2418:
case 3687:
case 216:
case 2818:
case 1713:
case 968:
case 3578:
case 299:
case 926:
case 3819:
case 3961:
case 1225:
case 3419:
case 2082:
case 1697:
case 671:
case 2316:
case 3191:
case 83:
case 407:
case 3536:
case 1014:
case 1010:
case 3962:
case 106:
case 2081:
case 1467:
case 493:
case 3360:
case 1411:
case 2480:
case 1969:
case 728:
case 2484:
case 2502:
case 1986:
case 766:
case 2721:
case 2290:
case 2501:
case 3098:
case 991:
case 1412:
case 3142:
case 2294:
case 789:
case 848:
case 3917:
case 2916:
case 3144:
case 850:
case 4077:
case 3361:
case 1118:
case 146:
case 3140:
case 2481:
case 186:
case 3848:
case 2882:
case 3362:
case 3019:
case 2482:
case 2724:
case 2720:
case 169:
case 2528:
case 2335:
case 2708:
case 3190:
case 3960:
case 709:
case 627:
case 1795:
case 2537:
case 808:
case 1011:
case 3668:
case 164:
case 2475:
case 3317:
case 3515:
case 1955:
case 2289:
case 2669:
case 2947:
case 1635:
case 505:
case 1779:
case 1298:
case 1184:
case 3709:
case 3529:
case 22:
case 3785:
case 2783:
case 2899:
case 2111:
case 680:
case 91:
case 3396:
case 640:
case 1488:
case 1180:
case 2018:
case 326:
case 3210:
case 612:
case 2167:
case 2997:
case 3214:
case 1:
case 239:
case 2757:
case 2023:
case 2849:
case 1689:
case 637:
case 2776:
case 1269:
case 2235:
case 798:
case 1286:
case 899:
case 2341:
case 2160:
case 2994:
case 2468:
case 2868:
case 1496:
case 3388:
case 1732:
case 1187:
case 3261:
case 3681:
case 377:
case 3116:
case 1446:
case 152:
case 170:
case 3262:
case 1731:
case 3682:
case 3314:
case 1692:
case 1461:
case 336:
case 1348:
case 1861:
case 2530:
case 1862:
case 3649:
case 3197:
case 3246:
case 2534:
case 1691:
case 996:
case 676:
case 2366:
case 3886:
case 2727:
case 3869:
case 3303:
case 2305:
case 224:
case 1641:
case 3147:
case 4074:
case 1417:
case 578:
case 4056:
case 914:
case 615:
case 1064:
case 190:
case 3813:
case 15:
case 1143:
case 3377:
case 2573:
case 3575:
case 4061:
case 1725:
case 874:
case 943:
case 983:
case 621:
case 3120:
case 2790:
case 3108:
case 3400:
case 3800:
case 1963:
case 2221:
case 162:
case 3079:
case 1193:
case 3582:
case 3939:
case 2658:
case 441:
case 1874:
case 4017:
case 481:
case 1474:
case 2548:
case 879:
case 2222:
case 1009:
case 2954:
case 2036:
case 3095:
case 1358:
case 2093:
case 232:
case 598:
case 3183:
case 2078:
case 751:
case 3256:
case 696:
case 2109:
case 1136:
case 619:
case 3659:
case 2938:
case 3711:
case 3767:
case 1652:
case 3326:
case 418:
case 2171:
case 3045:
case 2043:
case 4046:
case 1228:
case 1237:
case 1651:
case 225:
case 1542:
case 3176:
case 3458:
case 2600:
case 159:
case 1234:
case 3154:
case 2321:
case 860:
case 2908:
case 1995:
case 2139:
case 3760:
case 4088:
case 1426:
case 557:
case 217:
case 2920:
case 3277:
case 3615:
case 1207:
case 892:
case 107:
case 504:
case 1313:
case 4014:
case 3226:
case 2569:
case 980:
case 1337:
case 300:
case 3807:
case 3971:
case 1535:
case 3434:
case 3985:
case 2983:
case 3909:
case 912:
case 4003:
case 2006:
case 2859:
case 1039:
case 3356:
case 3370:
case 2065:
case 3431:
case 3553:
case 1620:
case 1913:
case 469:
case 1302:
case 2645:
case 584:
case 1928:
case 3643:
case 446:
case 1937:
case 3832:
case 3432:
case 4067:
case 1439:
case 1904:
case 2059:
case 274:
case 3385:
case 3678:
case 566:
case 2383:
case 528:
case 3463:
case 3309:
case 668:
case 3034:
case 2227:
case 1516:
case 589:
case 4012:
case 455:
case 2238:
case 1683:
case 971:
case 2921:
case 1263:
case 3636:
case 825:
case 3717:
case 2276:
case 785:
case 1786:
case 1597:
case 3733:
case 2254:
case 2735:
case 2679:
case 120:
case 1231:
case 3762:
case 3152:
case 1232:
case 2602:
case 756:
case 327:
case 1345:
case 2170:
case 2478:
case 1544:
case 27:
case 2156:
case 46:
case 3606:
case 1540:
case 3495:
case 1676:
case 2789:
case 2525:
case 2766:
case 636:
case 452:
case 1201:
case 260:
case 3272:
case 470:
case 3926:
case 2631:
case 2843:
case 3714:
case 1202:
case 3445:
case 2224:
case 383:
case 1331:
case 997:
case 3401:
case 3801:
case 3977:
case 3028:
case 2220:
case 1245:
case 2015:
case 3580:
case 1332:
case 401:
case 1056:
case 1409:
case 1627:
case 3000:
case 3121:
case 3479:
case 2354:
case 710:
case 1206:
case 2239:
case 75:
case 1685:
case 1378:
case 3921:
case 2636:
case 1609:
case 1427:
case 3308:
case 1134:
case 2733:
case 3254:
case 102:
case 1827:
case 3679:
case 3735:
case 3922:
case 1838:
case 3250:
case 2151:
case 1672:
case 3320:
case 3602:
case 501:
case 1671:
case 1343:
case 178:
case 4040:
case 917:
case 240:
case 2372:
case 280:
case 1915:
case 2831:
case 1052:
case 2832:
case 151:
case 2432:
case 438:
case 1564:
case 2371:
case 3645:
case 2678:
case 48:
case 2309:
case 2796:
case 639:
case 3406:
case 3059:
case 2587:
case 3806:
case 1768:
case 3695:
case 2693:
case 922:
case 2974:
case 570:
case 3238:
case 2034:
case 3227:
case 212:
case 3791:
case 4016:
case 2401:
case 2801:
case 3220:
case 2977:
case 1857:
case 105:
case 2037:
case 283:
case 243:
case 1457:
case 759:
case 3951:
case 2580:
case 1511:
case 2402:
case 3792:
case 2013:
case 3015:
case 2584:
case 2802:
case 1278:
case 1365:
case 1883:
case 3436:
case 1567:
case 1306:
case 3741:
case 1293:
case 5:
case 3350:
case 2004:
case 3742:
case 3208:
case 2000:
case 2479:
case 3354:
case 765:
case 2121:
case 1639:
case 1775:
case 2518:
case 484:
case 4047:
case 3283:
case 3478:
case 2285:
case 2209:
case 586:
case 3663:
case 1022:
case 1100:
case 648:
case 1408:
case 3327:
case 3766:
case 688:
case 932:
case 2703:
case 3705:
case 3525:
case 3893:
case 3789:
case 569:
case 1104:
case 2523:
case 1137:
case 1424:
case 871:
case 2926:
case 3631:
case 3257:
case 1420:
case 925:
case 2714:
case 3029:
case 564:
case 2845:
case 2445:
case 1781:
case 3632:
case 2710:
case 3634:
case 1821:
case 1179:
case 2095:
case 2712:
case 3630:
case 992:
case 97:
case 3938:
case 747:
case 2274:
case 3078:
case 1822:
case 2183:
case 2270:
case 2256:
case 1784:
case 1422:
case 2599:
case 1215:
case 3043:
case 1677:
case 325:
case 1024:
case 960:
case 113:
case 3172:
case 3573:
case 2575:
case 1718:
case 2002:
case 1229:
case 2813:
case 2413:
case 3415:
case 1145:
case 2120:
case 2428:
case 2124:
case 145:
case 203:
case 2837:
case 3658:
case 1195:
case 1906:
case 4035:
case 2108:
case 2400:
case 1965:
case 2079:
case 840:
case 3976:
case 3548:
case 1452:
case 1852:
case 3957:
case 2972:
case 2629:
case 1315:
case 2807:
case 2971:
case 1533:
case 3797:
case 2407:
case 1451:
case 3569:
case 335:
case 979:
case 2830:
case 1050:
case 699:
case 2138:
case 1562:
case 837:
case 723:
case 2127:
case 1054:
case 2909:
case 616:
case 2834:
case 2356:
case 2370:
case 518:
case 40:
case 2063:
case 883:
case 1753:
case 3600:
case 3321:
case 1546:
case 2154:
case 4042:
case 2150:
case 3139:
case 815:
case 1993:
case 461:
case 271:
case 1674:
case 1656:
case 2764:
case 3322:
case 541:
case 2277:
case 4092:
case 2615:
case 653:
case 1787:
case 1131:
case 1943:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755853202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,];
var gg_b = "1755853202/";

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
