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
case 691:
case 1050:
case 3614:
case 1952:
case 1345:
case 1495:
case 212:
case 822:
case 3913:
case 400:
case 3073:
case 614:
case 3800:
case 4001:
case 2476:
case 3143:
case 1422:
case 2183:
case 1868:
case 1994:
case 227:
case 817:
case 3307:
case 980:
case 2830:
case 94:
case 761:
case 2663:
case 2402:
case 1417:
case 3991:
case 2271:
case 91:
case 4095:
case 847:
case 18:
case 140:
case 2935:
case 1401:
case 2627:
case 2685:
case 331:
case 1210:
case 2596:
case 2028:
case 4022:
case 486:
case 1272:
case 3858:
case 78:
case 2951:
case 3288:
case 2046:
case 2248:
case 1669:
case 1008:
case 1206:
case 4017:
case 3393:
case 2176:
case 1122:
case 2483:
case 2165:
case 1607:
case 639:
case 3796:
case 2699:
case 2670:
case 1732:
case 2166:
case 2175:
case 907:
case 1988:
case 3549:
case 2350:
case 2045:
case 3844:
case 3722:
case 3085:
case 2833:
case 2884:
case 914:
case 3906:
case 512:
case 1502:
case 2517:
case 3247:
case 2287:
case 2595:
case 1262:
case 3803:
case 487:
case 3070:
case 2522:
case 3910:
case 2292:
case 784:
case 3717:
case 2673:
case 1704:
case 61:
case 3390:
case 129:
case 2014:
case 3379:
case 3815:
case 3294:
case 3524:
case 152:
case 2261:
case 226:
case 2755:
case 1534:
case 1583:
case 752:
case 2308:
case 729:
case 595:
case 2842:
case 3882:
case 3252:
case 606:
case 939:
case 3:
case 868:
case 1743:
case 273:
case 2501:
case 3063:
case 1402:
case 1663:
case 4083:
case 2101:
case 1271:
case 3820:
case 127:
case 3399:
case 402:
case 2489:
case 820:
case 210:
case 3961:
case 1353:
case 1121:
case 313:
case 1134:
case 1476:
case 1337:
case 3131:
case 471:
case 2345:
case 584:
case 982:
case 261:
case 112:
case 3327:
case 3653:
case 2206:
case 1434:
case 1165:
case 343:
case 1176:
case 978:
case 1699:
case 665:
case 142:
case 3424:
case 636:
case 909:
case 1046:
case 3540:
case 3431:
case 1102:
case 2210:
case 3079:
case 2314:
case 3455:
case 954:
case 2272:
case 552:
case 4076:
case 2575:
case 2740:
case 2566:
case 3637:
case 3780:
case 489:
case 3925:
case 2189:
case 3987:
case 3236:
case 742:
case 1292:
case 3007:
case 3235:
case 3608:
case 1857:
case 3532:
case 849:
case 1749:
case 4075:
case 1225:
case 4066:
case 3456:
case 325:
case 1350:
case 637:
case 2679:
case 2690:
case 1833:
case 3765:
case 1884:
case 1045:
case 561:
case 1517:
case 2502:
case 430:
case 3118:
case 2196:
case 3823:
case 2732:
case 2638:
case 95:
case 2841:
case 4080:
case 1660:
case 682:
case 3251:
case 3386:
case 3721:
case 2346:
case 2496:
case 3418:
case 3809:
case 1731:
case 2213:
case 3093:
case 1724:
case 1059:
case 1842:
case 3264:
case 3360:
case 126:
case 2521:
case 773:
case 2878:
case 2291:
case 3971:
case 2534:
case 3543:
case 58:
case 2839:
case 3156:
case 1014:
case 1480:
case 3650:
case 2328:
case 439:
case 2592:
case 4026:
case 1078:
case 2519:
case 2222:
case 557:
case 1265:
case 23:
case 2600:
case 3547:
case 1039:
case 2587:
case 1148:
case 2525:
case 3975:
case 3015:
case 3719:
case 1471:
case 686:
case 2217:
case 1126:
case 2747:
case 3630:
case 1505:
case 840:
case 3136:
case 88:
case 3249:
case 147:
case 2042:
case 3044:
case 2845:
case 2410:
case 932:
case 3885:
case 1764:
case 534:
case 3255:
case 1171:
case 3436:
case 759:
case 3377:
case 810:
case 117:
case 1513:
case 3174:
case 220:
case 1837:
case 3552:
case 2794:
case 3761:
case 3870:
case 4071:
case 2368:
case 256:
case 414:
case 1853:
case 704:
case 861:
case 2057:
case 491:
case 2658:
case 3320:
case 122:
case 1398:
case 1448:
case 3983:
case 3934:
case 193:
case 2339:
case 2828:
case 2571:
case 406:
case 716:
case 3860:
case 2378:
case 4061:
case 1623:
case 10:
case 53:
case 2405:
case 3367:
case 3435:
case 1419:
case 793:
case 1955:
case 1492:
case 41:
case 377:
case 2846:
case 3256:
case 852:
case 219:
case 2904:
case 829:
case 3309:
case 3902:
case 1119:
case 3323:
case 1192:
case 3464:
case 3381:
case 2491:
case 2629:
case 1384:
case 1333:
case 2615:
case 1280:
case 3588:
case 1949:
case 338:
case 1187:
case 234:
case 687:
case 1736:
case 44:
case 3873:
case 480:
case 1125:
case 1154:
case 315:
case 2697:
case 2526:
case 4019:
case 1572:
case 1510:
case 3965:
case 2098:
case 3016:
case 2296:
case 3976:
case 2105:
case 1266:
case 2788:
case 1068:
case 3748:
case 556:
case 2932:
case 2030:
case 900:
case 2413:
case 3893:
case 92:
case 516:
case 2505:
case 3668:
case 3551:
case 247:
case 1940:
case 689:
case 1859:
case 1616:
case 2620:
case 355:
case 73:
case 2735:
case 3232:
case 1587:
case 2148:
case 593:
case 3188:
case 2562:
case 1814:
case 1295:
case 2751:
case 568:
case 1592:
case 1106:
case 3996:
case 1222:
case 2918:
case 465:
case 1519:
case 13:
case 1600:
case 3535:
case 895:
case 2677:
case 222:
case 671:
case 720:
case 1752:
case 2398:
case 259:
case 812:
case 3488:
case 2591:
case 3807:
case 624:
case 3564:
case 2221:
case 1368:
case 2853:
case 2330:
case 2283:
case 3243:
case 217:
case 3300:
case 3204:
case 379:
case 546:
case 1794:
case 3081:
case 2041:
case 1033:
case 2764:
case 308:
case 1410:
case 3791:
case 1201:
case 1846:
case 2425:
case 1462:
case 989:
case 3194:
case 2487:
case 3397:
case 4013:
case 216:
case 3901:
case 1191:
case 826:
case 2808:
case 547:
case 2419:
case 2342:
case 454:
case 3641:
case 409:
case 575:
case 2681:
case 2924:
case 157:
case 3574:
case 850:
case 2623:
case 20:
case 2931:
case 3838:
case 1943:
case 1339:
case 1828:
case 364:
case 3315:
case 3879:
case 3890:
case 1105:
case 971:
case 482:
case 2275:
case 3452:
case 2266:
case 3995:
case 1413:
case 1030:
case 749:
case 734:
case 2154:
case 2357:
case 630:
case 924:
case 3303:
case 3020:
case 559:
case 2510:
case 3344:
case 1548:
case 2384:
case 902:
case 2333:
case 3147:
case 1615:
case 504:
case 2280:
case 2949:
case 2461:
case 1162:
case 517:
case 2119:
case 2192:
case 246:
case 3678:
case 3772:
case 1341:
case 3497:
case 3347:
case 2184:
case 2387:
case 3144:
case 114:
case 582:
case 1911:
case 2319:
case 422:
case 3074:
case 2866:
case 191:
case 3482:
case 2392:
case 2442:
case 3613:
case 1478:
case 2354:
case 2250:
case 3415:
case 1694:
case 369:
case 4041:
case 417:
case 37:
case 791:
case 707:
case 2208:
case 886:
case 2006:
case 3577:
case 1178:
case 2720:
case 2985:
case 1716:
case 447:
case 929:
case 3768:
case 2457:
case 640:
case 68:
case 1700:
case 509:
case 2999:
case 475:
case 2970:
case 2484:
case 139:
case 144:
case 1598:
case 2010:
case 3394:
case 3444:
case 2072:
case 265:
case 1026:
case 1907:
case 1228:
case 3520:
case 2568:
case 3036:
case 3182:
case 2142:
case 2821:
case 3100:
case 684:
case 2834:
case 2253:
case 55:
case 1087:
case 2767:
case 1688:
case 3269:
case 2062:
case 282:
case 1025:
case 3458:
case 780:
case 305:
case 3672:
case 1729:
case 3610:
case 3778:
case 1245:
case 2198:
case 3116:
case 887:
case 14:
case 1168:
case 3739:
case 1542:
case 1715:
case 2237:
case 3946:
case 3388:
case 358:
case 2498:
case 254:
case 416:
case 2802:
case 706:
case 3523:
case 2013:
case 3293:
case 940:
case 1703:
case 1468:
case 1889:
case 2865:
case 3064:
case 278:
case 536:
case 3211:
case 2091:
case 468:
case 1557:
case 71:
case 2723:
case 1310:
case 1372:
case 1354:
case 75:
case 627:
case 1880:
case 802:
case 2993:
case 3273:
case 4033:
case 366:
case 2478:
case 1664:
case 1866:
case 1392:
case 1442:
case 2758:
case 3335:
case 4057:
case 3467:
case 2141:
case 214:
case 1184:
case 318:
case 824:
case 3818:
case 2362:
case 2071:
case 456:
case 1651:
case 136:
case 3260:
case 3167:
case 506:
case 3481:
case 950:
case 1142:
case 1777:
case 2598:
case 244:
case 348:
case 2907:
case 3654:
case 3286:
case 3088:
case 2246:
case 2048:
case 1457:
case 3730:
case 3687:
case 2178:
case 1635:
case 3692:
case 926:
case 1720:
case 1985:
case 3798:
case 24:
case 1005:
case 1636:
case 2542:
case 927:
case 3582:
case 434:
case 2715:
case 1986:
case 1237:
case 2729:
case 3855:
case 3285:
case 3908:
case 1198:
case 737:
case 2801:
case 912:
case 3047:
case 514:
case 1539:
case 4030:
case 3648:
case 2688:
case 182:
case 1062:
case 2025:
case 3270:
case 137:
case 1821:
case 3529:
case 3212:
case 1883:
case 383:
case 1709:
case 650:
case 1723:
case 109:
case 2214:
case 2895:
case 2372:
case 1326:
case 1781:
case 2061:
case 2744:
case 3784:
case 3733:
case 2822:
case 1091:
case 3477:
case 754:
case 3336:
case 673:
case 709:
case 2259:
case 21:
case 2703:
case 367:
case 3420:
case 1498:
case 1348:
case 2533:
case 2584:
case 778:
case 2813:
case 1089:
case 1770:
case 1712:
case 839:
case 3032:
case 2146:
case 3473:
case 440:
case 1861:
case 647:
case 1450:
case 1095:
case 289:
case 3569:
case 2640:
case 1108:
case 2916:
case 186:
case 2065:
case 2278:
case 2076:
case 2553:
case 1257:
case 2793:
case 2862:
case 1656:
case 700:
case 3173:
case 3318:
case 410:
case 2446:
case 2396:
case 1892:
case 3511:
case 946:
case 2021:
case 1819:
case 3835:
case 2034:
case 891:
case 2805:
case 3223:
case 3004:
case 807:
case 622:
case 2958:
case 659:
case 1559:
case 1233:
case 814:
case 1001:
case 362:
case 1624:
case 2114:
case 1302:
case 1923:
case 3683:
case 163:
case 1453:
case 806:
case 2389:
case 2944:
case 975:
case 3621:
case 198:
case 3349:
case 3470:
case 668:
case 947:
case 3750:
case 2903:
case 1376:
case 2322:
case 1365:
case 2604:
case 1773:
case 81:
case 616:
case 3427:
case 3485:
case 3163:
case 763:
case 2395:
case 3874:
case 84:
case 187:
case 1786:
case 880:
case 2915:
case 1321:
case 1649:
case 2268:
case 917:
case 3538:
case 1334:
case 3708:
case 3463:
case 4053:
case 3185:
case 3602:
case 904:
case 646:
case 3324:
case 3220:
case 3579:
case 3040:
case 2080:
case 524:
case 3942:
case 4037:
case 3355:
case 2982:
case 1967:
case 787:
case 3170:
case 2997:
case 3199:
case 1909:
case 732:
case 3676:
case 571:
case 2779:
case 1153:
case 484:
case 2108:
case 2920:
case 1891:
case 4028:
case 1916:
case 2727:
case 1146:
case 2861:
case 3894:
case 189:
case 495:
case 3696:
case 2618:
case 3585:
case 1707:
case 2712:
case 2017:
case 1002:
case 789:
case 3049:
case 3852:
case 957:
case 4046:
case 3282:
case 3244:
case 3340:
case 2284:
case 2380:
case 1428:
case 1711:
case 656:
case 2854:
case 2001:
case 1805:
case 85:
case 2559:
case 1241:
case 2819:
case 2375:
case 1021:
case 587:
case 303:
case 2763:
case 2150:
case 3031:
case 2887:
case 3759:
case 532:
case 3024:
case 427:
case 102:
case 1862:
case 2656:
case 1396:
case 1446:
case 2514:
case 3332:
case 3601:
case 2655:
case 2826:
case 1872:
case 1903:
case 4014:
case 1322:
case 2437:
case 12:
case 1159:
case 1604:
case 360:
case 619:
case 2773:
case 263:
case 1643:
case 3407:
case 4059:
case 3469:
case 3056:
case 72:
case 657:
case 1317:
case 3573:
case 311:
case 1114:
case 2923:
case 3200:
case 1508:
case 3107:
case 1790:
case 2153:
case 3586:
case 2760:
case 3695:
case 2546:
case 341:
case 1982:
case 1738:
case 2967:
case 232:
case 2528:
case 730:
case 2298:
case 3216:
case 3978:
case 634:
case 1915:
case 1268:
case 3560:
case 1075:
case 287:
case 2334:
case 2137:
case 3493:
case 864:
case 2897:
case 2063:
case 1783:
case 948:
case 1386:
case 3842:
case 3466:
case 3731:
case 1867:
case 797:
case 701:
case 2338:
case 1543:
case 1011:
case 1971:
case 2829:
case 2390:
case 2440:
case 890:
case 2379:
case 3014:
case 3974:
case 2524:
case 3261:
case 667:
case 270:
case 1156:
case 772:
case 1235:
case 1702:
case 2717:
case 725:
case 3219:
case 599:
case 1007:
case 1926:
case 4018:
case 2972:
case 935:
case 3686:
case 1069:
case 2646:
case 1456:
case 3936:
case 3287:
case 3180:
case 1532:
case 3857:
case 2906:
case 2027:
case 918:
case 3517:
case 1373:
case 1118:
case 3350:
case 2722:
case 188:
case 2085:
case 441:
case 1251:
case 3589:
case 3166:
case 648:
case 395:
case 1954:
case 3718:
case 3483:
case 3434:
case 143:
case 3165:
case 3176:
case 5:
case 1431:
case 2905:
case 2858:
case 1775:
case 1766:
case 2288:
case 1919:
case 2645:
case 3102:
case 1090:
case 3685:
case 1079:
case 1455:
case 855:
case 3935:
case 570:
case 3627:
case 553:
case 1149:
case 1038:
case 1236:
case 1637:
case 1780:
case 1925:
case 2311:
case 2962:
case 2369:
case 2816:
case 196:
case 1820:
case 2991:
case 666:
case 3402:
case 3663:
case 713:
case 403:
case 1155:
case 3353:
case 879:
case 4024:
case 327:
case 1370:
case 635:
case 86:
case 2307:
case 1312:
case 3183:
case 618:
case 2800:
case 3121:
case 2432:
case 1124:
case 312:
case 1131:
case 2556:
case 2614:
case 297:
case 201:
case 1815:
case 1524:
case 352:
case 2156:
case 170:
case 1531:
case 2543:
case 1701:
case 153:
case 1338:
case 3534:
case 3878:
case 2264:
case 3521:
case 2360:
case 2971:
case 1829:
case 2011:
case 770:
case 621:
case 462:
case 1252:
case 2504:
case 3213:
case 892:
case 2809:
case 1:
case 3743:
case 2734:
case 1063:
case 674:
case 1555:
case 753:
case 3346:
case 3496:
case 2386:
case 3841:
case 4040:
case 513:
case 2251:
case 3205:
case 2823:
case 1027:
case 2118:
case 3196:
case 1628:
case 2776:
case 3679:
case 2765:
case 3690:
case 1085:
case 1789:
case 1646:
case 2456:
case 433:
case 2235:
case 2702:
case 3053:
case 2608:
case 1070:
case 3576:
case 605:
case 1910:
case 1972:
case 2926:
case 3189:
case 2236:
case 2987:
case 2149:
case 4032:
case 3947:
case 1404:
case 1060:
case 3740:
case 2925:
case 1311:
case 1962:
case 2090:
case 2079:
case 3314:
case 597:
case 3117:
case 958:
case 3401:
case 2431:
case 921:
case 2424:
case 2766:
case 1086:
case 3580:
case 1288:
case 2540:
case 3607:
case 3359:
case 572:
case 1796:
case 3206:
case 731:
case 3122:
case 1432:
case 1073:
case 4004:
case 1556:
case 3050:
case 2131:
case 525:
case 2385:
case 3495:
case 823:
case 428:
case 1143:
case 213:
case 485:
case 1800:
case 3693:
case 67:
case 3994:
case 3868:
case 3489:
case 2449:
case 669:
case 2312:
case 1307:
case 451:
case 1104:
case 1816:
case 1369:
case 1991:
case 876:
case 2155:
case 4047:
case 523:
case 3413:
case 2151:
case 3030:
case 3682:
case 2748:
case 3788:
case 2976:
case 3098:
case 2965:
case 2016:
case 215:
case 888:
case 3697:
case 825:
case 1344:
case 349:
case 1147:
case 2464:
case 3491:
case 1772:
case 2902:
case 1917:
case 2000:
case 903:
case 319:
case 1194:
case 660:
case 1397:
case 1447:
case 2309:
case 277:
case 2886:
case 4052:
case 2256:
case 3603:
case 1382:
case 2164:
case 2435:
case 2367:
case 1901:
case 1152:
case 4094:
case 790:
case 3113:
case 2451:
case 3571:
case 164:
case 1315:
case 2633:
case 2684:
case 3943:
case 3339:
case 2983:
case 3658:
case 2224:
case 3561:
case 941:
case 1488:
case 1869:
case 3057:
case 2231:
case 1713:
case 779:
case 1807:
case 1564:
case 356:
case 2899:
case 3794:
case 435:
case 2761:
case 1081:
case 320:
case 1300:
case 1204:
case 16:
case 1023:
case 2827:
case 3033:
case 276:
case 3845:
case 538:
case 1791:
case 466:
case 1668:
case 2474:
case 3940:
case 2725:
case 3042:
case 3859:
case 4088:
case 1067:
case 2630:
case 1893:
case 781:
case 2863:
case 3217:
case 1009:
case 577:
case 3616:
case 3554:
case 155:
case 2792:
case 3295:
case 3814:
case 2015:
case 1232:
case 33:
case 448:
case 1811:
case 843:
case 2029:
case 994:
case 3222:
case 1996:
case 3519:
case 2710:
case 1135:
case 405:
case 1464:
case 1726:
case 715:
case 1381:
case 2772:
case 3192:
case 3736:
case 1873:
case 633:
case 3125:
case 2147:
case 3333:
case 138:
case 3280:
case 3187:
case 2344:
case 2989:
case 2240:
case 951:
case 3461:
case 4051:
case 3572:
case 3510:
case 1218:
case 2922:
case 3357:
case 4035:
case 3609:
case 115:
case 2536:
case 1642:
case 3266:
case 2995:
case 3275:
case 2452:
case 474:
case 2879:
case 2315:
case 2890:
case 8:
case 1983:
case 393:
case 3623:
case 3931:
case 2152:
case 3924:
case 421:
case 662:
case 2382:
case 853:
case 3492:
case 458:
case 1367:
case 1164:
case 1435:
case 745:
case 2447:
case 2194:
case 1657:
case 792:
case 870:
case 177:
case 3774:
case 1058:
case 555:
case 3171:
case 1827:
case 1044:
case 723:
case 304:
case 1885:
case 208:
case 176:
case 3426:
case 1255:
case 3837:
case 279:
case 3041:
case 3956:
case 1436:
case 47:
case 1377:
case 317:
case 1174:
case 933:
case 26:
case 2243:
case 776:
case 3234:
case 628:
case 3591:
case 1899:
case 2564:
case 1320:
case 4074:
case 2869:
case 359:
case 3398:
case 1594:
case 1231:
case 2535:
case 1029:
case 375:
case 3276:
case 3918:
case 3562:
case 1015:
case 281:
case 2705:
case 2188:
case 3202:
case 3126:
case 2358:
case 255:
case 1136:
case 2668:
case 1474:
case 1725:
case 2893:
case 3505:
case 1094:
case 3781:
case 1477:
case 1336:
case 894:
case 3876:
case 274:
case 2064:
case 1733:
case 3865:
case 697:
case 2581:
case 167:
case 860:
case 1849:
case 3973:
case 3430:
case 2293:
case 1671:
case 2416:
case 354:
case 3498:
case 2388:
case 3130:
case 3986:
case 2739:
case 3636:
case 2567:
case 1227:
case 1908:
case 2778:
case 783:
case 569:
case 2269:
case 1648:
case 3960:
case 382:
case 3062:
case 1824:
case 1047:
case 2843:
case 3834:
case 2606:
case 3253:
case 1270:
case 337:
case 1374:
case 1177:
case 2100:
case 913:
case 688:
case 2182:
case 972:
case 1260:
case 336:
case 1167:
case 3010:
case 2290:
case 2394:
case 1516:
case 3484:
case 3912:
case 365:
case 3361:
case 1654:
case 2520:
case 3072:
case 3777:
case 1953:
case 3457:
case 2115:
case 1625:
case 2403:
case 1937:
case 2768:
case 1088:
case 3720:
case 3985:
case 1619:
case 2945:
case 2129:
case 3635:
case 4009:
case 135:
case 479:
case 505:
case 89:
case 3880:
case 2415:
case 803:
case 408:
case 1467:
case 35:
case 2914:
case 3442:
case 1123:
case 2482:
case 2144:
case 3133:
case 2497:
case 653:
case 2263:
case 774:
case 931:
case 3533:
case 158:
case 1388:
case 1416:
case 2544:
case 2950:
case 31:
case 2849:
case 3468:
case 4058:
case 2757:
case 1523:
case 1293:
case 2477:
case 758:
case 1400:
case 306:
case 174:
case 121:
case 3214:
case 2503:
case 3372:
case 1741:
case 862:
case 283:
case 415:
case 3797:
case 705:
case 3990:
case 3019:
case 2299:
case 1100:
case 4016:
case 2515:
case 2648:
case 2824:
case 2742:
case 1458:
case 3938:
case 518:
case 2047:
case 2831:
case 2227:
case 2908:
case 1509:
case 2120:
case 4000:
case 1116:
case 3054:
case 105:
case 2626:
case 3729:
case 1672:
case 1778:
case 2582:
case 438:
case 1946:
case 1804:
case 380:
case 34:
case 2692:
case 631:
case 1352:
case 2500:
case 3313:
case 1115:
case 2687:
case 970:
case 1403:
case 2625:
case 2856:
case 4082:
case 3048:
case 248:
case 1197:
case 339:
case 344:
case 1290:
case 3598:
case 1444:
case 2516:
case 1279:
case 3026:
case 2654:
case 2109:
case 3228:
case 1520:
case 2953:
case 2423:
case 1605:
case 3969:
case 2364:
case 3391:
case 3896:
case 2818:
case 3071:
case 218:
case 885:
case 314:
case 423:
case 828:
case 583:
case 769:
case 2335:
case 1613:
case 1074:
case 391:
case 3758:
case 4044:
case 1691:
case 1429:
case 266:
case 1103:
case 17:
case 851:
case 3439:
case 1959:
case 2661:
case 1840:
case 1415:
case 3694:
case 169:
case 3790:
case 1622:
case 2676:
case 488:
case 1411:
case 3508:
case 1200:
case 1304:
case 2112:
case 3738:
case 1169:
case 1586:
case 528:
case 141:
case 908:
case 2220:
case 1018:
case 1216:
case 2331:
case 2602:
case 3145:
case 2463:
case 2185:
case 2538:
case 96:
case 233:
case 1343:
case 3459:
case 3268:
case 3075:
case 1746:
case 3395:
case 955:
case 3810:
case 2485:
case 2427:
case 794:
case 3604:
case 160:
case 867:
case 2836:
case 3903:
case 497:
case 401:
case 3322:
case 1193:
case 2349:
case 2621:
case 2470:
case 2984:
case 194:
case 3944:
case 2412:
case 664:
case 3643:
case 3806:
case 3317:
case 1573:
case 111:
case 4093:
case 472:
case 262:
case 1258:
case 1941:
case 1563:
case 1479:
case 1244:
case 703:
case 1340:
case 228:
case 3428:
case 285:
case 3711:
case 1055:
case 2851:
case 1714:
case 79:
case 2281:
case 1438:
case 2004:
case 2223:
case 866:
case 103:
case 3034:
case 2835:
case 496:
case 608:
case 1759:
case 3862:
case 302:
case 679:
case 251:
case 3446:
case 3396:
case 66:
case 3553:
case 4079:
case 1512:
case 3891:
case 1599:
case 1745:
case 655:
case 2864:
case 2569:
case 3640:
case 1215:
case 1894:
case 389:
case 4038:
case 3239:
case 3146:
case 990:
case 1190:
case 1179:
case 848:
case 562:
case 964:
case 3707:
case 3769:
case 681:
case 2160:
case 3813:
case 2939:
case 133:
case 3230:
case 638:
case 2746:
case 2689:
case 3649:
case 3321:
case 1324:
case 2018:
case 3096:
case 2216:
case 59:
case 1708:
case 1331:
case 1185:
case 1602:
case 2169:
case 3967:
case 3546:
case 2586:
case 2695:
case 1942:
case 1355:
case 2411:
case 615:
case 1277:
case 1199:
case 3909:
case 1112:
case 923:
case 211:
case 2573:
case 3302:
case 3923:
case 821:
case 2469:
case 2056:
case 294:
case 398:
case 1621:
case 1412:
case 4:
case 1683:
case 874:
case 762:
case 260:
case 677:
case 1750:
case 3655:
case 3826:
case 1485:
case 1163:
case 453:
case 858:
case 2203:
case 3825:
case 938:
case 2759:
case 499:
case 1318:
case 29:
case 3887:
case 2847:
case 203:
case 1511:
case 3892:
case 3375:
case 3819:
case 1851:
case 1593:
case 4073:
case 300:
case 2563:
case 915:
case 623:
case 3380:
case 128:
case 541:
case 2479:
case 2490:
case 2340:
case 2055:
case 2852:
case 1675:
case 2282:
case 1267:
case 1160:
case 2179:
case 2527:
case 1753:
case 1209:
case 2696:
case 3618:
case 1356:
case 3712:
case 3861:
case 4060:
case 2968:
case 3095:
case 2894:
case 2215:
case 1737:
case 1032:
case 1473:
case 1930:
case 1186:
case 3727:
case 3920:
case 2512:
case 2229:
case 3022:
case 386:
case 3785:
case 2570:
case 2599:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754672402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,];
var gg_b = "1754672402/";

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
