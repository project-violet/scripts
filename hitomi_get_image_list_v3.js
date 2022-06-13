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
case 1772:
case 844:
case 1416:
case 1563:
case 1987:
case 1628:
case 1930:
case 1898:
case 2234:
case 2174:
case 2216:
case 3334:
case 921:
case 164:
case 1840:
case 3708:
case 4030:
case 1818:
case 577:
case 1086:
case 1835:
case 590:
case 625:
case 3570:
case 274:
case 3184:
case 3450:
case 846:
case 1291:
case 1210:
case 925:
case 1926:
case 2068:
case 596:
case 2060:
case 2269:
case 1058:
case 2254:
case 1398:
case 4023:
case 48:
case 267:
case 2161:
case 180:
case 2335:
case 3737:
case 1084:
case 3129:
case 679:
case 3905:
case 304:
case 1699:
case 3998:
case 3904:
case 3415:
case 4062:
case 1811:
case 2059:
case 2645:
case 2102:
case 221:
case 1673:
case 3873:
case 2123:
case 3777:
case 285:
case 3728:
case 3241:
case 2358:
case 2226:
case 798:
case 602:
case 3029:
case 3302:
case 4070:
case 635:
case 1637:
case 1118:
case 1345:
case 388:
case 3529:
case 2896:
case 1204:
case 2956:
case 2657:
case 2196:
case 4068:
case 2984:
case 2856:
case 3298:
case 98:
case 1167:
case 3726:
case 327:
case 3170:
case 980:
case 3288:
case 3887:
case 1551:
case 1894:
case 3975:
case 155:
case 3979:
case 2894:
case 3817:
case 2679:
case 380:
case 2129:
case 1216:
case 2201:
case 2405:
case 1888:
case 617:
case 1108:
case 2627:
case 618:
case 2618:
case 1751:
case 1046:
case 3981:
case 3190:
case 1346:
case 362:
case 1466:
case 1949:
case 1951:
case 3257:
case 2615:
case 2629:
case 865:
case 1499:
case 2510:
case 4072:
case 959:
case 1315:
case 1430:
case 379:
case 28:
case 777:
case 183:
case 875:
case 3580:
case 3602:
case 918:
case 1767:
case 3710:
case 3481:
case 2317:
case 430:
case 106:
case 517:
case 569:
case 3402:
case 3657:
case 3619:
case 3985:
case 2272:
case 323:
case 780:
case 2673:
case 962:
case 1813:
case 507:
case 2330:
case 1301:
case 3383:
case 3781:
case 2018:
case 434:
case 1825:
case 127:
case 3263:
case 1697:
case 1572:
case 95:
case 2001:
case 944:
case 1280:
case 2881:
case 2916:
case 3956:
case 2043:
case 3471:
case 2454:
case 2024:
case 964:
case 1868:
case 2970:
case 3088:
case 593:
case 2864:
case 2257:
case 1039:
case 2177:
case 2491:
case 2117:
case 2124:
case 1162:
case 3651:
case 1080:
case 2933:
case 3166:
case 87:
case 1387:
case 3947:
case 3877:
case 1536:
case 3418:
case 1989:
case 3593:
case 1112:
case 2514:
case 3103:
case 1720:
case 4057:
case 2288:
case 3163:
case 801:
case 690:
case 1943:
case 2728:
case 3131:
case 834:
case 1418:
case 2474:
case 1729:
case 3536:
case 1616:
case 2859:
case 3725:
case 2531:
case 360:
case 515:
case 2641:
case 1938:
case 648:
case 2748:
case 2685:
case 907:
case 2853:
case 204:
case 2168:
case 1171:
case 1568:
case 2905:
case 734:
case 1848:
case 3745:
case 2534:
case 68:
case 1156:
case 3684:
case 1747:
case 2512:
case 415:
case 806:
case 4002:
case 1374:
case 1861:
case 3297:
case 1110:
case 1903:
case 3613:
case 4073:
case 1117:
case 3627:
case 2258:
case 1954:
case 3148:
case 329:
case 219:
case 1731:
case 2709:
case 1738:
case 2469:
case 951:
case 390:
case 975:
case 3645:
case 3229:
case 3227:
case 1961:
case 1101:
case 1631:
case 2038:
case 1009:
case 1771:
case 2580:
case 2:
case 3764:
case 3642:
case 1206:
case 435:
case 143:
case 1185:
case 2223:
case 3549:
case 857:
case 2457:
case 2096:
case 659:
case 3477:
case 520:
case 1528:
case 3291:
case 588:
case 715:
case 3388:
case 3692:
case 2028:
case 2121:
case 802:
case 3085:
case 1719:
case 1413:
case 852:
case 152:
case 3592:
case 425:
case 2439:
case 457:
case 1475:
case 2304:
case 2965:
case 3504:
case 2020:
case 2594:
case 3033:
case 2152:
case 3506:
case 2640:
case 1530:
case 3803:
case 2754:
case 1940:
case 2985:
case 665:
case 1858:
case 22:
case 2616:
case 1253:
case 2951:
case 4080:
case 1595:
case 2384:
case 2775:
case 138:
case 3270:
case 4007:
case 582:
case 271:
case 827:
case 328:
case 1562:
case 3756:
case 420:
case 3442:
case 1979:
case 3883:
case 1081:
case 710:
case 886:
case 2593:
case 2172:
case 3009:
case 3445:
case 1455:
case 2888:
case 1984:
case 2027:
case 3980:
case 345:
case 3139:
case 3138:
case 464:
case 393:
case 557:
case 3478:
case 4095:
case 1621:
case 3968:
case 1494:
case 892:
case 1052:
case 2078:
case 1175:
case 3732:
case 529:
case 405:
case 2780:
case 2839:
case 2011:
case 375:
case 2473:
case 3158:
case 3933:
case 3805:
case 3051:
case 3269:
case 3724:
case 1219:
case 140:
case 829:
case 3977:
case 2573:
case 837:
case 803:
case 2719:
case 2302:
case 2450:
case 3631:
case 1916:
case 4026:
case 2753:
case 1338:
case 100:
case 368:
case 709:
case 736:
case 1457:
case 1838:
case 1502:
case 3141:
case 3301:
case 2661:
case 1496:
case 1683:
case 923:
case 1972:
case 1991:
case 573:
case 2821:
case 2194:
case 725:
case 2292:
case 2952:
case 3996:
case 554:
case 1925:
case 3014:
case 1654:
case 744:
case 1360:
case 31:
case 2463:
case 1003:
case 2762:
case 3437:
case 65:
case 3057:
case 1889:
case 2986:
case 674:
case 1565:
case 572:
case 2252:
case 2343:
case 1254:
case 3776:
case 1980:
case 3699:
case 2408:
case 4087:
case 3285:
case 2776:
case 874:
case 1511:
case 3949:
case 2325:
case 3467:
case 793:
case 118:
case 1544:
case 1590:
case 59:
case 154:
case 61:
case 301:
case 295:
case 1607:
case 2309:
case 2527:
case 3351:
case 2740:
case 117:
case 1891:
case 1851:
case 1391:
case 1965:
case 3289:
case 3608:
case 1609:
case 129:
case 2637:
case 2516:
case 252:
case 1714:
case 628:
case 2073:
case 3943:
case 2149:
case 888:
case 758:
case 2552:
case 652:
case 45:
case 2846:
case 3845:
case 3172:
case 749:
case 33:
case 10:
case 2832:
case 3225:
case 3205:
case 2620:
case 299:
case 2964:
case 239:
case 1271:
case 3045:
case 3868:
case 3157:
case 1427:
case 936:
case 3518:
case 969:
case 4063:
case 564:
case 3486:
case 3214:
case 2312:
case 3461:
case 1166:
case 2844:
case 3604:
case 2886:
case 3077:
case 1013:
case 2349:
case 495:
case 748:
case 1519:
case 307:
case 2441:
case 2788:
case 3644:
case 1283:
case 2501:
case 884:
case 2029:
case 1671:
case 3967:
case 3169:
case 1711:
case 439:
case 3588:
case 278:
case 4053:
case 2021:
case 3348:
case 1343:
case 1976:
case 896:
case 137:
case 3704:
case 2628:
case 1224:
case 316:
case 2606:
case 1462:
case 3646:
case 3639:
case 2410:
case 3954:
case 3640:
case 2239:
case 2284:
case 2558:
case 1403:
case 756:
case 658:
case 1652:
case 3178:
case 1782:
case 3260:
case 3410:
case 2348:
case 3161:
case 1491:
case 2225:
case 351:
case 339:
case 2267:
case 743:
case 3367:
case 1832:
case 2543:
case 1808:
case 3797:
case 1684:
case 4038:
case 1201:
case 521:
case 2811:
case 2772:
case 1606:
case 447:
case 1781:
case 3609:
case 1311:
case 1913:
case 1297:
case 3520:
case 3002:
case 297:
case 1613:
case 2599:
case 3709:
case 1765:
case 2039:
case 3490:
case 687:
case 2324:
case 3105:
case 3562:
case 3180:
case 1128:
case 3786:
case 2921:
case 2000:
case 867:
case 1044:
case 3605:
case 2283:
case 109:
case 452:
case 3432:
case 2923:
case 1122:
case 2830:
case 719:
case 1269:
case 3677:
case 1837:
case 1600:
case 883:
case 2261:
case 3414:
case 2260:
case 2214:
case 3915:
case 1920:
case 315:
case 1140:
case 1490:
case 2508:
case 3974:
case 2093:
case 3942:
case 2672:
case 2189:
case 3401:
case 3020:
case 3700:
case 1277:
case 671:
case 3671:
case 2475:
case 2008:
case 2271:
case 1020:
case 1826:
case 112:
case 284:
case 2852:
case 2874:
case 269:
case 3896:
case 856:
case 2015:
case 3548:
case 192:
case 1334:
case 3256:
case 646:
case 1620:
case 1076:
case 3559:
case 2642:
case 966:
case 2908:
case 1477:
case 3044:
case 754:
case 260:
case 4032:
case 3312:
case 72:
case 1786:
case 3181:
case 1027:
case 2751:
case 1900:
case 1659:
case 3716:
case 882:
case 2089:
case 2336:
case 42:
case 3672:
case 3948:
case 3389:
case 17:
case 2997:
case 1307:
case 1968:
case 822:
case 3347:
case 3311:
case 562:
case 3424:
case 2724:
case 2160:
case 2838:
case 2227:
case 2003:
case 1510:
case 2308:
case 891:
case 264:
case 2361:
case 1332:
case 1581:
case 2760:
case 1969:
case 1988:
case 2781:
case 3073:
case 3315:
case 3212:
case 1561:
case 2213:
case 3147:
case 1756:
case 2793:
case 374:
case 3541:
case 3218:
case 490:
case 943:
case 1721:
case 2416:
case 1183:
case 276:
case 3955:
case 536:
case 1158:
case 2987:
case 1757:
case 1227:
case 1236:
case 957:
case 2212:
case 2138:
case 3038:
case 1692:
case 1585:
case 2105:
case 247:
case 1754:
case 136:
case 4071:
case 2540:
case 293:
case 570:
case 3433:
case 1017:
case 3303:
case 3296:
case 3462:
case 1520:
case 3335:
case 1067:
case 1381:
case 2369:
case 3785:
case 1382:
case 2081:
case 1535:
case 2062:
case 1267:
case 2892:
case 1932:
case 3840:
case 3963:
case 356:
case 2854:
case 568:
case 1476:
case 1709:
case 946:
case 21:
case 342:
case 449:
case 3538:
case 2802:
case 1679:
case 941:
case 187:
case 613:
case 1871:
case 2556:
case 2340:
case 1962:
case 1904:
case 326:
case 1205:
case 696:
case 1061:
case 3448:
case 3626:
case 3655:
case 1508:
case 991:
case 1770:
case 1571:
case 2899:
case 292:
case 728:
case 1230:
case 2823:
case 2824:
case 2050:
case 2141:
case 1033:
case 2224:
case 1446:
case 36:
case 2316:
case 1450:
case 551:
case 190:
case 383:
case 3599:
case 1627:
case 1225:
case 3142:
case 606:
case 3507:
case 2350:
case 1822:
case 2792:
case 1095:
case 2175:
case 2393:
case 915:
case 1109:
case 1649:
case 3714:
case 2828:
case 697:
case 738:
case 1463:
case 2146:
case 933:
case 3387:
case 3280:
case 1032:
case 3705:
case 1472:
case 1415:
case 1864:
case 2807:
case 1317:
case 498:
case 523:
case 2079:
case 2125:
case 1487:
case 1643:
case 3953:
case 3489:
case 70:
case 2960:
case 103:
case 2233:
case 259:
case 1396:
case 3230:
case 3255:
case 4051:
case 82:
case 3911:
case 2841:
case 184:
case 3895:
case 2699:
case 1036:
case 508:
case 501:
case 408:
case 338:
case 2407:
case 938:
case 1302:
case 2375:
case 4090:
case 3390:
case 1647:
case 3198:
case 1626:
case 3055:
case 3262:
case 2577:
case 422:
case 57:
case 2667:
case 3567:
case 3199:
case 3364:
case 3838:
case 2803:
case 1763:
case 3:
case 505:
case 2613:
case 3582:
case 1435:
case 2153:
case 556:
case 1978:
case 1019:
case 2391:
case 2413:
case 142:
case 491:
case 1232:
case 3007:
case 1439:
case 2768:
case 2560:
case 194:
case 535:
case 831:
case 2687:
case 3678:
case 2705:
case 3545:
case 2499:
case 2727:
case 2187:
case 3659:
case 387:
case 2323:
case 3475:
case 3973:
case 2036:
case 1239:
case 1489:
case 3322:
case 2303:
case 2249:
case 35:
case 3117:
case 2477:
case 3331:
case 3961:
case 4014:
case 2082:
case 3436:
case 2220:
case 1273:
case 2795:
case 472:
case 1235:
case 2275:
case 2575:
case 311:
case 3249:
case 627:
case 317:
case 193:
case 3926:
case 1248:
case 2990:
case 1186:
case 3092:
case 3860:
case 1911:
case 660:
case 3690:
case 3480:
case 3630:
case 2155:
case 1425:
case 1419:
case 1506:
case 1408:
case 1807:
case 2140:
case 2104:
case 429:
case 3371:
case 1037:
case 3795:
case 1800:
case 1161:
case 116:
case 769:
case 992:
case 845:
case 608:
case 2492:
case 750:
case 91:
case 64:
case 2833:
case 909:
case 3429:
case 2523:
case 1376:
case 169:
case 1876:
case 1395:
case 2720:
case 19:
case 1924:
case 255:
case 1963:
case 1632:
case 940:
case 99:
case 2180:
case 3853:
case 3668:
case 3245:
case 4003:
case 487:
case 3735:
case 729:
case 2318:
case 1342:
case 256:
case 3465:
case 2488:
case 1362:
case 2947:
case 2401:
case 1992:
case 176:
case 1598:
case 825:
case 1024:
case 1941:
case 3527:
case 4084:
case 3228:
case 1471:
case 463:
case 1245:
case 1604:
case 3579:
case 1805:
case 173:
case 4085:
case 2033:
case 2588:
case 2218:
case 225:
case 2412:
case 2868:
case 275:
case 686:
case 841:
case 2900:
case 2085:
case 1004:
case 818:
case 1026:
case 528:
case 722:
case 770:
case 1431:
case 545:
case 4025:
case 2938:
case 2817:
case 753:
case 437:
case 1369:
case 1092:
case 282:
case 2461:
case 4043:
case 1799:
case 3928:
case 3185:
case 3835:
case 1723:
case 1736:
case 3603:
case 735:
case 3123:
case 3683:
case 1702:
case 3393:
case 2353:
case 2939:
case 2752:
case 642:
case 3679:
case 1594:
case 1350:
case 1107:
case 2517:
case 3124:
case 3702:
case 2958:
case 3173:
case 3013:
case 657:
case 2084:
case 1288:
case 2403:
case 4061:
case 3376:
case 124:
case 1517:
case 2435:
case 2816:
case 1554:
case 2600:
case 2992:
case 287:
case 1936:
case 1578:
case 1340:
case 3282:
case 209:
case 3796:
case 413:
case 2522:
case 3611:
case 3621:
case 3070:
case 3511:
case 2633:
case 724:
case 2539:
case 1266:
case 2127:
case 4015:
case 460:
case 705:
case 2625:
case 2165:
case 2826:
case 835:
case 773:
case 3360:
case 3411:
case 1610:
case 2110:
case 2869:
case 330:
case 359:
case 2674:
case 1386:
case 2647:
case 4018:
case 2587:
case 2777:
case 1967:
case 5:
case 1727:
case 79:
case 1070:
case 1690:
case 4021:
case 2056:
case 1400:
case 2107:
case 3674:
case 2209:
case 2909:
case 1421:
case 537:
case 1458:
case 1829:
case 1619:
case 853:
case 2052:
case 2263:
case 3499:
case 2338:
case 839:
case 2315:
case 2745:
case 3932:
case 3021:
case 3648:
case 3247:
case 2207:
case 1950:
case 3337:
case 3804:
case 2111:
case 2468:
case 2810:
case 1732:
case 2849:
case 3423:
case 1788:
case 1501:
case 2602:
case 7:
case 1040:
case 863:
case 467:
case 955:
case 3232:
case 1716:
case 2829:
case 1255:
case 488:
case 2311:
case 3635:
case 3420:
case 2297:
case 170:
case 2490:
case 1002:
case 3412:
case 2139:
case 2659:
case 1030:
case 1791:
case 3084:
case 1193:
case 2530:
case 973:
case 30:
case 1078:
case 1622:
case 905:
case 1762:
case 2721:
case 3865:
case 2735:
case 1233:
case 3830:
case 698:
case 1384:
case 2758:
case 1085:
case 548:
case 3903:
case 2801:
case 3372:
case 1213:
case 998:
case 2436:
case 1675:
case 2026:
case 110:
case 3757:
case 3119:
case 1373:
case 3634:
case 1470:
case 3731:
case 1015:
case 3753:
case 836:
case 47:
case 673:
case 745:
case 3106:
case 3934:
case 3439:
case 2882:
case 2009:
case 2359:
case 989:
case 849:
case 465:
case 3833:
case 1779:
case 961:
case 663:
case 1526:
case 610:
case 1549:
case 778:
case 3960:
case 126:
case 1918:
case 2444:
case 649:
case 3203:
case 3721:
case 932:
case 552:
case 2122:
case 3366:
case 2549:
case 1737:
case 988:
case 2544:
case 3153:
case 2831:
case 1287:
case 584:
case 1759:
case 810:
case 325:
case 1653:
case 1379:
case 3159:
case 3194:
case 2471:
case 1801:
case 480:
case 3509:
case 213:
case 2170:
case 2135:
case 1001:
case 2100:
case 1293:
case 1859:
case 1143:
case 2006:
case 2047:
case 2977:
case 2632:
case 2993:
case 1182:
case 3395:
case 2797:
case 1698:
case 1625:
case 3832:
case 787:
case 1389:
case 1810:
case 3912:
case 547:
case 2825:
case 2367:
case 3380:
case 1481:
case 3615:
case 4088:
case 2533:
case 522:
case 3293:
case 2710:
case 928:
case 2644:
case 2538:
case 3026:
case 3472:
case 1353:
case 1461:
case 718:
case 3133:
case 3341:
case 1247:
case 1089:
case 1411:
case 1717:
case 1097:
case 358:
case 3358:
case 334:
case 2794:
case 3874:
case 887:
case 2176:
case 3408:
case 1744:
case 3188:
case 6:
case 1543:
case 2584:
case 249:
case 2677:
case 1486:
case 2759:
case 1176:
case 1887:
case 2057:
case 1244:
case 2445:
case 398:
case 3768:
case 226:
case 3457:
case 279:
case 2827:
case 13:
case 1198:
case 2010:
case 3941:
case 475:
case 3900:
case 3810:
case 1063:
case 66:
case 2237:
case 2871:
case 2351:
case 1082:
case 2246:
case 900:
case 1335:
case 2427:
case 1314:
case 1299:
case 1935:
case 347:
case 848:
case 1195:
case 3251:
case 2624:
case 158:
case 1467:
case 2130:
case 958:
case 968:
case 1005:
case 2676:
case 2995:
case 1285:
case 2506:
case 3097:
case 1469:
case 428:
case 3151:
case 3134:
case 303:
case 1428:
case 2648:
case 397:
case 2035:
case 632:
case 3118:
case 444:
case 497:
case 667:
case 496:
case 1612:
case 2578:
case 634:
case 216:
case 167:
case 2322:
case 240:
case 1380:
case 321:
case 417:
case 703:
case 2713:
case 2904:
case 1215:
case 370:
case 2513:
case 3614:
case 2569:
case 172:
case 46:
case 2799:
case 2470:
case 908:
case 3463:
case 704:
case 3405:
case 990:
case 3856:
case 3048:
case 3664:
case 3695:
case 3353:
case 1929:
case 2891:
case 626:
case 3200:
case 1074:
case 1866:
case 1066:
case 775:
case 3349:
case 1241:
case 2962:
case 1136:
case 198:
case 1513:
case 286:
case 3379:
case 560:
case 701:
case 614:
case 3503:
case 1693:
case 920:
case 3056:
case 3616:
case 3543:
case 2259:
case 2240:
case 3670:
case 2954:
case 2037:
case 3597:
case 1899:
case 1355:
case 2094:
case 2893:
case 3259:
case 1069:
case 3763:
case 994:
case 3916:
case 1919:
case 2145:
case 2458:
case 3517:
case 1246:
case 1365:
case 1937:
case 3422:
case 1323:
case 600:
case 196:
case 2668:
case 3469:
case 306:
case 171:
case 440:
case 395:
case 237:
case 1629:
case 2064:
case 3357:
case 179:
case 3316:
case 1580:
case 313:
case 2857:
case 1358:
case 2979:
case 3355:
case 1289:
case 2379:
case 3618:
case 3769:
case 3535:
case 1079:
case 448:
case 1059:
case 530:
case 1678:
case 1294:
case 3071:
case 2537:
case 1872:
case 3512:
case 162:
case 2083:
case 1701:
case 3976:
case 1099:
case 3844:
case 1644:
case 2451:
case 280:
case 2574:
case 3392:
case 3929:
case 148:
case 3991:
case 1828:
case 911:
case 3189:
case 402:
case 3649:
case 2280:
case 3399:
case 2321:
case 1261:
case 1507:
case 3089:
case 3149:
case 1914:
case 1735:
case 2747:
case 3368:
case 2377:
case 2608:
case 2697:
case 2071:
case 3622:
case 1168:
case 1995:
case 3240:
case 3598:
case 3886:
case 2307:
case 2154:
case 789:
case 2959:
case 1073:
case 2163:
case 1393:
case 2042:
case 1823:
case 1775:
case 352:
case 1946:
case 1945:
case 1402:
case 3902:
case 1883:
case 144:
case 3908:
case 2202:
case 2765:
case 3216:
case 2363:
case 363:
case 3305:
case 1722:
case 3221:
case 524:
case 3308:
case 119:
case 1623:
case 2972:
case 1575:
case 2509:
case 3223:
case 2291:
case 2398:
case 2694:
case 2431:
case 2898:
case 2806:
case 1694:
case 929:
case 3028:
case 609:
case 1409:
case 2503:
case 1592:
case 601:
case 3641:
case 3819:
case 1597:
case 3899:
case 1681:
case 2535:
case 3385:
case 790:
case 392:
case 3715:
case 1603:
case 3091:
case 650:
case 2143:
case 603:
case 3521:
case 1584:
case 1445:
case 1483:
case 2205:
case 1043:
case 24:
case 3839:
case 3062:
case 2238:
case 2314:
case 3675:
case 2957:
case 459:
case 2669:
case 270:
case 2453:
case 3213:
case 1682:
case 3431:
case 1231:
case 1534:
case 1655:
case 1488:
case 1157:
case 2090:
case 289:
case 2589:
case 3031:
case 1163:
case 1148:
case 2452:
case 1459:
case 3858:
case 2547:
case 1700:
case 3841:
case 3197:
case 3319:
case 2075:
case 2386:
case 612:
case 3638:
case 2055:
case 1986:
case 1364:
case 150:
case 1956:
case 3025:
case 1029:
case 1441:
case 956:
case 419:
case 2342:
case 1290:
case 1144:
case 305:
case 3854:
case 672:
case 2131:
case 2372:
case 3978:
case 984:
case 3144:
case 1538:
case 3099:
case 2700:
case 1783:
case 3253:
case 1796:
case 4083:
case 2733:
case 2076:
case 870:
case 2341:
case 2215:
case 2373:
case 3354:
case 861:
case 3864:
case 3491:
case 1263:
case 2032:
case 470:
case 2741:
case 2949:
case 727:
case 1011:
case 2054:
case 3987:
case 4055:
case 296:
case 2579:
case 3738:
case 4045:
case 583:
case 826:
case 14:
case 1579:
case 2483:
case 3344:
case 2675:
case 3892:
case 3496:
case 1509:
case 3767:
case 830:
case 2680:
case 1228:
case 1514:
case 739:
case 2690:
case 1429:
case 2935:
case 1131:
case 77:
case 1983:
case 3222:
case 90:
case 231:
case 3752:
case 2907:
case 4033:
case 1630:
case 3610:
case 2617:
case 906:
case 3901:
case 50:
case 133:
case 1493:
case 1546:
case 737:
case 3581:
case 2915:
case 201:
case 451:
case 3508:
case 1726:
case 3921:
case 2203:
case 4064:
case 1648:
case 795:
case 2545:
case 3425:
case 3717:
case 2686:
case 1661:
case 96:
case 1096:
case 633:
case 1189:
case 3859:
case 2718:
case 3772:
case 2652:
case 2601:
case 2481:
case 3382:
case 647:
case 2756:
case 3454:
case 1905:
case 3879:
case 2779:
case 2808:
case 1199:
case 2183:
case 438:
case 401:
case 794:
case 3907:
case 1348:
case 3000:
case 916:
case 2603:
case 1602:
case 721:
case 1390:
case 3765:
case 309:
case 885:
case 1045:
case 1422:
case 3479:
case 3944:
case 1839:
case 1000:
case 3919:
case 1202:
case 2352:
case 1843:
case 1959:
case 3485:
case 2867:
case 3990:
case 1923:
case 1237:
case 578:
case 2268:
case 3345:
case 677:
case 482:
case 1125:
case 3848:
case 4010:
case 2442:
case 2437:
case 1319:
case 243:
case 2723:
case 598:
case 1007:
case 3733:
case 2703:
case 3005:
case 3523:
case 1443:
case 731:
case 3370:
case 1854:
case 2934:
case 3493:
case 824:
case 2541:
case 3594:
case 2840:
case 2498:
case 2356:
case 1300:
case 373:
case 3333:
case 3456:
case 741:
case 1830:
case 15:
case 3487:
case 2329:
case 3885:
case 71:
case 4066:
case 1573:
case 27:
case 2166:
case 3992:
case 3273:
case 546:
case 700:
case 2346:
case 689:
case 3455:
case 3095:
case 2638:
case 139:
case 3825:
case 1327:
case 3890:
case 1177:
case 1973:
case 1952:
case 2248:
case 512:
case 3784:
case 832:
case 3673:
case 2945:
case 2294:
case 1022:
case 1049:
case 3794:
case 9:
case 800:
case 2293:
case 2576:
case 3852:
case 1715:
case 1524:
case 1147:
case 3656:
case 2982:
case 1308:
case 1849:
case 629:
case 3910:
case 3444:
case 2696:
case 534:
case 223:
case 3811:
case 1567:
case 4:
case 3891:
case 967:
case 935:
case 2878:
case 3470:
case 972:
case 3821:
case 786:
case 324:
case 2179:
case 1370:
case 1816:
case 1974:
case 2061:
case 3590:
case 1270:
case 3458:
case 191:
case 1478:
case 2595:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1655132401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,];
var gg_b = "1655132401/";

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
