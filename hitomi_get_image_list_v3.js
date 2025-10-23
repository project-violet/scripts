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
case 1218:
case 1:
case 2049:
case 1560:
case 900:
case 491:
case 3803:
case 2953:
case 2755:
case 802:
case 499:
case 2224:
case 2864:
case 3602:
case 1961:
case 212:
case 1386:
case 1448:
case 2450:
case 2281:
case 1202:
case 295:
case 3645:
case 1877:
case 2772:
case 511:
case 2627:
case 483:
case 2080:
case 2375:
case 2979:
case 2529:
case 1329:
case 3512:
case 631:
case 1723:
case 2640:
case 2123:
case 2110:
case 3258:
case 2232:
case 3085:
case 1710:
case 1067:
case 1066:
case 3592:
case 2462:
case 3094:
case 853:
case 3184:
case 75:
case 1470:
case 152:
case 197:
case 1904:
case 3562:
case 1097:
case 1186:
case 3951:
case 2856:
case 2857:
case 1187:
case 328:
case 2801:
case 2787:
case 3138:
case 1355:
case 30:
case 1959:
case 2555:
case 798:
case 3014:
case 2412:
case 1831:
case 563:
case 1421:
case 3550:
case 1600:
case 3001:
case 1235:
case 3170:
case 1484:
case 645:
case 1991:
case 3792:
case 3056:
case 3486:
case 4031:
case 619:
case 2894:
case 62:
case 1510:
case 2323:
case 539:
case 1268:
case 1828:
case 1523:
case 28:
case 2678:
case 1009:
case 767:
case 3712:
case 1911:
case 1775:
case 740:
case 2729:
case 2814:
case 1129:
case 3121:
case 2922:
case 3315:
case 2390:
case 3919:
case 1052:
case 1870:
case 421:
case 1797:
case 2892:
case 1796:
case 2086:
case 2620:
case 1743:
case 2457:
case 1918:
case 2456:
case 2401:
case 1482:
case 852:
case 933:
case 3128:
case 37:
case 465:
case 2117:
case 1717:
case 429:
case 562:
case 4038:
case 2812:
case 2647:
case 3008:
case 2693:
case 3829:
case 1821:
case 1261:
case 2549:
case 130:
case 2671:
case 41:
case 2574:
case 4065:
case 950:
case 2154:
case 1567:
case 1754:
case 2333:
case 678:
case 1902:
case 3701:
case 3886:
case 1533:
case 3092:
case 2366:
case 2494:
case 2367:
case 3182:
case 961:
case 1865:
case 1428:
case 4021:
case 94:
case 24:
case 914:
case 2279:
case 2503:
case 3958:
case 780:
case 2808:
case 2414:
case 868:
case 1075:
case 1139:
case 2739:
case 3251:
case 110:
case 970:
case 398:
case 270:
case 2774:
case 3176:
case 266:
case 1149:
case 43:
case 3872:
case 3050:
case 127:
case 1204:
case 2942:
case 3514:
case 3141:
case 1517:
case 3403:
case 1516:
case 3673:
case 2485:
case 35:
case 2288:
case 1895:
case 728:
case 173:
case 3328:
case 2396:
case 3594:
case 3691:
case 1597:
case 1596:
case 4095:
case 1090:
case 3474:
case 2072:
case 1476:
case 3331:
case 1441:
case 1273:
case 4048:
case 426:
case 2636:
case 2637:
case 3983:
case 2703:
case 585:
case 3785:
case 578:
case 2309:
case 1010:
case 4015:
case 3659:
case 1023:
case 1509:
case 234:
case 1606:
case 3557:
case 2133:
case 3501:
case 3219:
case 1733:
case 2354:
case 2167:
case 3604:
case 1766:
case 1179:
case 2311:
case 1614:
case 60:
case 3146:
case 2779:
case 3842:
case 3616:
case 1144:
case 3453:
case 2125:
case 2744:
case 1209:
case 1511:
case 1725:
case 889:
case 115:
case 3519:
case 3201:
case 336:
case 275:
case 3257:
case 1990:
case 2972:
case 2522:
case 3000:
case 1254:
case 3171:
case 149:
case 3696:
case 3120:
case 3697:
case 1573:
case 2628:
case 2469:
case 3599:
case 1878:
case 141:
case 1910:
case 1447:
case 3479:
case 2534:
case 1493:
case 3337:
case 3444:
case 2588:
case 3363:
case 758:
case 2631:
case 2753:
case 1296:
case 4078:
case 308:
case 3507:
case 937:
case 1657:
case 1413:
case 3551:
case 192:
case 1504:
case 3654:
case 2161:
case 79:
case 2955:
case 364:
case 3769:
case 3214:
case 3805:
case 3609:
case 1559:
case 1830:
case 311:
case 1216:
case 1217:
case 363:
case 476:
case 2173:
case 1002:
case 3313:
case 3992:
case 3320:
case 2407:
case 2280:
case 50:
case 316:
case 2676:
case 135:
case 1266:
case 1826:
case 1267:
case 4089:
case 3371:
case 255:
case 955:
case 3719:
case 3393:
case 2544:
case 1437:
case 1711:
case 1436:
case 2111:
case 3488:
case 3285:
case 3434:
case 2929:
case 1463:
case 3058:
case 2325:
case 528:
case 1344:
case 1889:
case 2159:
case 3569:
case 331:
case 807:
case 2499:
case 4027:
case 680:
case 217:
case 177:
case 917:
case 1704:
case 3751:
case 3633:
case 1952:
case 1664:
case 3707:
case 3881:
case 2987:
case 3706:
case 1045:
case 146:
case 3422:
case 1960:
case 451:
case 778:
case 822:
case 3908:
case 3136:
case 785:
case 1098:
case 2734:
case 3189:
case 3099:
case 1909:
case 406:
case 2272:
case 362:
case 1662:
case 2807:
case 2781:
case 3956:
case 1181:
case 1426:
case 1535:
case 3500:
case 2939:
case 1836:
case 3583:
case 736:
case 3758:
case 1132:
case 487:
case 835:
case 3888:
case 1223:
case 3834:
case 1568:
case 1489:
case 3378:
case 2695:
case 877:
case 3140:
case 39:
case 2899:
case 1059:
case 4063:
case 764:
case 2648:
case 3006:
case 4037:
case 3481:
case 3250:
case 711:
case 186:
case 3822:
case 3126:
case 72:
case 823:
case 667:
case 846:
case 1342:
case 2458:
case 1916:
case 708:
case 719:
case 2255:
case 3914:
case 1798:
case 815:
case 1768:
case 2044:
case 2168:
case 3853:
case 4013:
case 2532:
case 849:
case 2903:
case 948:
case 3700:
case 824:
case 2980:
case 905:
case 189:
case 2135:
case 3292:
case 1502:
case 3964:
case 2638:
case 763:
case 1933:
case 3652:
case 841:
case 1381:
case 2302:
case 1966:
case 3985:
case 598:
case 1478:
case 3389:
case 4071:
case 3130:
case 3212:
case 1846:
case 1847:
case 3879:
case 1598:
case 2053:
case 2483:
case 3844:
case 3675:
case 2398:
case 739:
case 2400:
case 3327:
case 3326:
case 990:
case 378:
case 1545:
case 290:
case 2286:
case 2524:
case 1871:
case 1813:
case 731:
case 1820:
case 1260:
case 540:
case 3405:
case 3208:
case 857:
case 193:
case 3132:
case 2295:
case 715:
case 3210:
case 2931:
case 2383:
case 3863:
case 2498:
case 3535:
case 3426:
case 1019:
case 2300:
case 3427:
case 553:
case 2445:
case 206:
case 1424:
case 1500:
case 906:
case 76:
case 610:
case 2804:
case 1957:
case 741:
case 3702:
case 1901:
case 3073:
case 530:
case 2789:
case 3909:
case 1189:
case 2530:
case 2859:
case 3305:
case 2655:
case 394:
case 3440:
case 4022:
case 3917:
case 2063:
case 654:
case 2036:
case 3798:
case 1126:
case 238:
case 386:
case 322:
case 938:
case 3124:
case 158:
case 3745:
case 1007:
case 3943:
case 4034:
case 2891:
case 307:
case 2402:
case 4088:
case 1481:
case 831:
case 1994:
case 2578:
case 2928:
case 757:
case 448:
case 3105:
case 510:
case 1130:
case 381:
case 1212:
case 405:
case 630:
case 3502:
case 2687:
case 4044:
case 2686:
case 4079:
case 1700:
case 389:
case 2270:
case 573:
case 1292:
case 1660:
case 3025:
case 2358:
case 502:
case 653:
case 3768:
case 1783:
case 3608:
case 1558:
case 2046:
case 1853:
case 2183:
case 2093:
case 2778:
case 490:
case 901:
case 393:
case 3518:
case 3813:
case 864:
case 4053:
case 3820:
case 811:
case 3692:
case 3545:
case 723:
case 1326:
case 82:
case 209:
case 3871:
case 2526:
case 2435:
case 2527:
case 2977:
case 3893:
case 746:
case 2629:
case 845:
case 3598:
case 1675:
case 2265:
case 3878:
case 5:
case 475:
case 2995:
case 1113:
case 2461:
case 794:
case 2948:
case 3322:
case 652:
case 503:
case 2282:
case 0:
case 1519:
case 1000:
case 2319:
case 3254:
case 2915:
case 2771:
case 1083:
case 2746:
case 3725:
case 1617:
case 3068:
case 1769:
case 1214:
case 164:
case 3217:
case 271:
case 707:
case 3830:
case 111:
case 971:
case 3601:
case 3656:
case 3657:
case 3420:
case 2307:
case 1962:
case 1654:
case 2351:
case 1950:
case 2639:
case 1294:
case 108:
case 3243:
case 3471:
case 119:
case 979:
case 2835:
case 3296:
case 3297:
case 2868:
case 786:
case 2228:
case 878:
case 1337:
case 1479:
case 12:
case 3388:
case 3446:
case 3334:
case 2537:
case 1444:
case 2425:
case 2536:
case 597:
case 1346:
case 603:
case 4081:
case 1912:
case 3975:
case 3525:
case 2593:
case 1434:
case 1285:
case 3463:
case 3266:
case 335:
case 2571:
case 276:
case 3267:
case 116:
case 2845:
case 1264:
case 1719:
case 1371:
case 260:
case 672:
case 2119:
case 3791:
case 2520:
case 2970:
case 3002:
case 247:
case 4032:
case 2818:
case 2513:
case 862:
case 163:
case 3773:
case 2199:
case 455:
case 3840:
case 2411:
case 417:
case 3188:
case 1908:
case 2763:
case 420:
case 504:
case 259:
case 959:
case 2026:
case 139:
case 3561:
case 377:
case 2277:
case 1667:
case 1881:
case 2151:
case 1706:
case 2802:
case 89:
case 2107:
case 3664:
case 793:
case 2040:
case 4024:
case 2965:
case 3889:
case 3685:
case 2473:
case 2241:
case 3821:
case 2576:
case 2577:
case 3261:
case 3349:
case 1377:
case 3060:
case 594:
case 265:
case 433:
case 1439:
case 3717:
case 3716:
case 921:
case 4087:
case 1341:
case 1714:
case 3998:
case 681:
case 2728:
case 2940:
case 772:
case 828:
case 21:
case 450:
case 944:
case 1128:
case 91:
case 17:
case 229:
case 80:
case 2454:
case 3797:
case 2194:
case 1794:
case 3918:
case 3380:
case 2860:
case 2213:
case 2021:
case 3139:
case 44:
case 2731:
case 2416:
case 3303:
case 693:
case 1012:
case 3075:
case 3225:
case 586:
case 469:
case 522:
case 2246:
case 2293:
case 2364:
case 3884:
case 3838:
case 1756:
case 1182:
case 3902:
case 1564:
case 1701:
case 1887:
case 2782:
case 3533:
case 2156:
case 1594:
case 2433:
case 3597:
case 3596:
case 2467:
case 3699:
case 15:
case 2978:
case 752:
case 1673:
case 470:
case 589:
case 93:
case 466:
case 2237:
case 1328:
case 23:
case 3895:
case 1514:
case 1611:
case 1403:
case 3516:
case 1206:
case 1251:
case 1480:
case 310:
case 4055:
case 1872:
case 2776:
case 2777:
case 327:
case 2890:
case 2622:
case 1176:
case 3149:
case 1177:
case 1501:
case 3733:
case 686:
case 1556:
case 2048:
case 622:
case 3767:
case 2356:
case 226:
case 3766:
case 3554:
case 926:
case 982:
case 167:
case 2301:
case 2095:
case 1855:
case 3509:
case 3211:
case 1331:
case 2634:
case 3968:
case 1900:
case 3090:
case 3180:
case 593:
case 3291:
case 3476:
case 3935:
case 1449:
case 1384:
case 2681:
case 635:
case 3552:
case 1602:
case 2538:
case 753:
case 2833:
case 1338:
case 2584:
case 2423:
case 1969:
case 1365:
case 515:
case 4049:
case 2565:
case 549:
case 4074:
case 898:
case 730:
case 2308:
case 3658:
case 2632:
case 2041:
case 56:
case 999:
case 3560:
case 299:
case 1618:
case 3066:
case 242:
case 942:
case 1592:
case 2570:
case 2920:
case 3723:
case 495:
case 983:
case 3710:
case 2795:
case 1195:
case 1258:
case 4080:
case 2947:
case 2946:
case 3841:
case 840:
case 2312:
case 1512:
case 3575:
case 557:
case 592:
case 1321:
case 677:
case 180:
case 1115:
case 2971:
case 1635:
case 2350:
case 1014:
case 2937:
case 710:
case 2936:
case 2108:
case 2475:
case 3683:
case 1429:
case 1668:
case 3017:
case 3016:
case 432:
case 641:
case 727:
case 1165:
case 702:
case 3959:
case 2809:
case 10:
case 3355:
case 2605:
case 3904:
case 1094:
case 1184:
case 615:
case 1138:
case 3186:
case 2362:
case 3187:
case 3096:
case 773:
case 2460:
case 996:
case 1121:
case 1919:
case 48:
case 692:
case 657:
case 3372:
case 368:
case 2112:
case 2816:
case 3911:
case 2817:
case 3129:
case 2642:
case 2031:
case 3465:
case 304:
case 2595:
case 546:
case 3973:
case 3009:
case 3268:
case 523:
case 2896:
case 1792:
case 2897:
case 2770:
case 2192:
case 1001:
case 3484:
case 1170:
case 2082:
case 3438:
case 1486:
case 1487:
case 1433:
case 3396:
case 2691:
case 1467:
case 2673:
case 3485:
case 410:
case 1823:
case 3234:
case 3288:
case 3055:
case 1741:
case 402:
case 2403:
case 1314:
case 3774:
case 2206:
case 2176:
case 1622:
case 3749:
case 2556:
case 1164:
case 1582:
case 2764:
case 2219:
case 883:
case 78:
case 3222:
case 126:
case 1356:
case 590:
case 1095:
case 4090:
case 334:
case 3636:
case 3703:
case 1688:
case 2474:
case 3539:
case 240:
case 940:
case 3780:
case 2449:
case 1576:
case 453:
case 2439:
case 3574:
case 165:
case 3117:
case 1875:
case 3647:
case 1679:
case 1541:
case 2269:
case 430:
case 3253:
case 27:
case 712:
case 1065:
case 1728:
case 333:
case 3892:
case 648:
case 1454:
case 129:
case 3196:
case 3087:
case 3197:
case 3620:
case 2794:
case 1860:
case 474:
case 1021:
case 795:
case 1417:
case 2012:
case 3109:
case 361:
case 1385:
case 3244:
case 314:
case 1293:
case 34:
case 3279:
case 1247:
case 2661:
case 1364:
case 1496:
case 1497:
case 3333:
case 1782:
case 2886:
case 1156:
case 2564:
case 2701:
case 3367:
case 1852:
case 2182:
case 2757:
case 2635:
case 821:
case 2550:
case 2708:
case 770:
case 3988:
case 3412:
case 4043:
case 1278:
case 2429:
case 1809:
case 90:
case 2165:
case 555:
case 3242:
case 184:
case 1605:
case 3555:
case 1854:
case 3492:
case 2094:
case 1784:
case 4016:
case 332:
case 3856:
case 3787:
case 2906:
case 3152:
case 2907:
case 3786:
case 81:
case 404:
case 3039:
case 3572:
case 1721:
case 2315:
case 1817:
case 517:
case 3408:
case 1112:
case 3814:
case 3205:
case 3729:
case 1642:
case 3323:
case 1595:
case 2999:
case 468:
case 3678:
case 3310:
case 38:
case 1897:
case 2056:
case 2792:
case 2348:
case 734:
case 2200:
case 3894:
case 1452:
case 3587:
case 2602:
case 2384:
case 1681:
case 655:
case 1867:
case 1584:
case 83:
case 1227:
case 2338:
case 1866:
case 2762:
case 588:
case 3755:
case 2969:
case 1423:
case 4:
case 3689:
case 1410:
case 1565:
case 2803:
case 750:
case 3953:
case 403:
case 2880:
case 1150:
case 3360:
case 1077:
case 1076:
case 2750:
case 3074:
case 1490:
case 1913:
case 2370:
case 2618:
case 761:
case 843:
case 2148:
case 2085:
case 725:
case 882:
case 1312:
case 4066:
case 1993:
case 4067:
case 1946:
case 537:
case 3003:
case 3979:
case 1947:
case 4033:
case 395:
case 980:
case 1624:
case 3080:
case 3626:
case 2115:
case 3190:
case 2985:
case 3229:
case 3705:
case 3869:
case 2389:
case 2212:
case 2130:
case 489:
case 3665:
case 1730:
case 4025:
case 650:
case 1013:
case 1071:
case 1100:
case 348:
case 3980:
case 2700:
case 2660:
case 2292:
case 481:
case 2442:
case 755:
case 3903:
case 1046:
case 3079:
case 3532:
case 2783:
case 1540:
case 101:
case 720:
case 2340:
case 669:
case 3400:
case 1238:
case 285:
case 2327:
case 118:
case 3287:
case 278:
case 985:
case 493:
case 3621:
case 1435:
case 1526:
case 2879:
case 1941:
case 3742:
case 661:
case 3053:
case 4061:
case 879:
case 3483:
case 1825:
case 2675:
case 2758:
case 1158:
case 2888:
case 876:
case 1498:
case 2834:
case 860:
case 2019:
case 1300:
case 3335:
case 2424:
case 106:
case 3939:
case 1445:
case 1804:
case 187:
case 3272:
case 3807:
case 666:
case 2956:
case 1418:
case 2099:
case 2189:
case 1859:
case 1789:
case 3505:
case 3034:
case 859:
case 3198:
case 3255:
case 4004:
case 3088:
case 634:
case 525:
case 3542:
case 2262:
case 2822:
case 2690:
case 3615:
case 138:
case 1672:
case 514:
case 3724:
case 958:
case 1891:
case 851:
case 3648:
case 2994:
case 1402:
case 737:
case 2378:
case 422:
case 29:
case 99:
case 1578:
case 1928:
case 1740:
case 2393:
case 3111:
case 748:
case 4002:
case 2058:
case 705:
case 2285:
case 1898:
case 2434:
case 1593:
case 3676:
case 1649:
case 3677:
case 176:
case 1921:
case 916:
case 1571:
case 1119:
case 1845:
case 2719:
case 612:
case 1404:
case 147:
case 2313:
case 2992:
case 3406:
case 1513:
case 600:
case 1818:
case 3280:
case 887:
case 435:
case 263:
case 3203:
case 3173:
case 1199:
case 2908:
case 2136:
case 790:
case 3553:
case 3788:
case 1603:
case 2832:
case 838:
case 1411:
case 1763:
case 3024:
case 2422:
case 159:
case 3419:
case 1027:
case 239:
case 939:
case 2667:
case 423:
case 2666:
case 1984:
case 1276:
case 3249:
case 1106:
case 1938:
case 3361:
case 2751:
case 3987:
case 1965:
case 4045:
case 1369:
case 2569:
case 3499:
case 231:
case 2599:
case 4035:
case 449:
case 1231:
case 500:
case 3373:
case 2113:
case 424:
case 1713:
case 3391:
case 1948:
case 1720:
case 2643:
case 2120:
case 2697:
case 2201:
case 375:
case 2257:
case 2256:
case 3522:
case 156:
case 2171:
case 441:
case 2000:
case 3311:
case 1793:
case 2146:
case 2193:
case 2842:
case 1746:
case 2083:
case 2617:
case 2453:
case 2616:
case 3744:
case 512:
case 264:
case 2214:
case 595:
case 2805:
case 1078:
case 2609:
case 911:
case 2506:
case 2507:
case 2551:
case 3682:
case 801:
case 2654:
case 1351:
case 2962:
case 3161:
case 2294:
case 2950:
case 179:
case 219:
case 208:
case 818:
case 2337:
case 92:
case 1536:
case 1425:
case 3042:
case 1537:
case 2444:
case 3588:
case 2363:
case 457:
case 416:
case 1203:
case 3459:
case 3199:
case 3970:
case 3404:
case 347:
case 1191:
case 1451:
case 1280:
case 3818:
case 1406:
case 1407:
case 2826:
case 1722:
case 3921:
case 376:
case 3571:
case 2266:
case 1676:
case 3649:
case 360:
case 584:
case 3674:
case 1111:
case 2436:
case 2525:
case 691:
case 2344:
case 3546:
case 2463:
case 1032:
case 1579:
case 1929:
case 2759:
case 3040:
case 351:
case 1159:
case 3241:
case 3984:
case 277:
case 3277:
case 2704:
case 701:
case 117:
case 977:
case 2664:
case 1361:
case 946:
case 359:
case 2960:
case 246:
case 2045:
case 3027:
case 3680:
case 431:
case 2098:
case 1858:
case 2188:
case 1788:
case 923:
case 683:
case 224:
case 1779:
case 848:
case 2614:
case 924:
case 2179:
case 2068:
case 1125:
case 706:
case 2322:
case 215:
case 188:
case 3282:
case 2035:
case 2254:
case 3319:
case 1522:
case 3771:
case 949:
case 3915:
case 2990:
case 1391:
case 1239:
case 4083:
case 3461:
case 3030:
case 26:
case 436:
case 941:
case 1373:
case 599:
case 4000:
case 3399:
case 1005:
case 3228:
case 3868:
case 890:
case 2388:
case 2447:
case 2334:
case 1753:
case 542:
case 2153:
case 1883:
case 1800:
case 3639:
case 2471:
case 3835:
case 2243:
case 2297:
case 2296:
case 583:
case 1304:
case 696:
case 1682:
case 2413:
case 2657:
case 2420:
case 3307:
case 3306:
case 992:
case 957:
case 3351:
case 292:
case 2504:
case 445:
case 1955:
case 2559:
case 419:
case 3078:
case 875:
case 776:
case 3358:
case 888:
case 1903:
case 61:
case 3047:
case 644:
case 3183:
case 1980:
case 629:
case 3100:
case 148:
case 289:
case 1135:
case 3270:
case 53:
case 989:
case 1581:
case 2502:
case 3686:
case 2966:
case 3861:
case 3221:
case 1302:
case 665:
case 747:
case 2478:
case 2105:
case 1705:
case 1665:
case 3730:
case 2275:
case 3589:
case 3468:
case 759:
case 2612:
case 582:
case 1398:
case 526:
case 1483:
case 1286:
case 1974:
case 1287:
case 2545:
case 309:
case 2252:
case 1400:
case 318:
case 1949:
case 2871:
case 3284:
case 1345:
case 543:
case 4069:
case 2324:
case 1621:
case 2813:
case 2820:
case 1318:
case 1670:
case 485:
case 837:
case 478:
case 3778:
case 2430:
case 2909:
case 2073:
case 4019:
case 2305:
case 3859:
case 3530:
case 3655:
case 1505:
case 994:
case 2440:
case 2662:
case 2290:
case 2181:
case 3418:
case 3982:
case 1807:
case 2702:
case 1939:
case 1022:
case 3295:
case 2210:
case 2132:
case 1732:
case 2836:
case 1368:
case 529:
case 756:
case 2223:
case 3498:
case 2863:
case 63:
case 1695:
case 820:
case 3740:
case 3928:
case 2996:
case 2004:
case 2718:
case 1615:
case 338:
case 3672:
case 3727:
case 2124:
case 1724:
case 2745:
case 3063:
case 3811:
case 1458:
case 4006:
case 2342:
case 4007:
case 3037:
case 1542:
case 1198:
case 643:
case 1255:
case 2904:
case 2470:
case 3854:
case 4014:
case 997:
case 1787:
case 73:
case 1857:
case 3738:
case 2096:
case 2186:
case 2752:
case 576:
case 2355:
case 3809:
case 3765:
case 3605:
case 1555:
case 1242:
case 2831:
case 3936:
case 1412:
case 4094:
case 1988:
case 3278:
case 428:
case 850:
case 3548:
case 3770:
case 2991:
case 3896:
case 2484:
case 2235:
case 861:
case 3843:
case 743:
case 1894:
case 2054:
case 679:
case 2465:
case 1323:
case 1310:
case 825:
case 2973:
case 2828:
case 869:
case 3230:
case 4001:
case 2775:
case 4056:
case 3816:
case 4057:
case 1814:
case 2590:
case 551:
case 3460:
case 268:
case 9:
case 647:
case 721:
case 1074:
case 100:
case 2415:
case 3490:
case 870:
case 3308:
case 765:
case 2658:
case 3041:
case 203:
case 2155:
case 2298:
case 903:
case 1689:
case 2495:
case 3410:
case 3681:
case 3833:
case 1224:
case 1586:
case 744:
case 3162:
case 972:
case 112:
case 71:
case 813:
case 2961:
case 3624:
case 2202:
case 1281:
case 2172:
case 2876:
case 1772:
case 3521:
case 3715:
case 1003:
case 651:
case 2575:
case 3289:
case 1640:
case 2710:
case 1232:
case 579:
case 1110:
case 383:
case 3913:
case 3392:
case 2066:
case 1462:
case 3748:
case 3570:
case 3920:
case 687:
case 210:
case 2619:
case 3777:
case 1749:
case 227:
case 3890:
case 2204:
case 4062:
case 1316:
case 2516:
case 2699:
case 3263:
case 498:
case 273:
case 3237:
case 812:
case 1288:
case 3810:
case 113:
case 973:
case 33:
case 1343:
case 1397:
case 3433:
case 1464:
case 202:
case 2596:
case 606:
case 784:
case 2543:
case 2090:
case 3015:
case 2291:
case 2477:
case 2476:
case 2935:
case 2273:
case 2968:
case 3185:
case 1309:
case 2010:
case 509:
case 3930:
case 343:
case 638:
case 3582:
case 2733:
case 2651:
case 1354:
case 2607:
case 2606:
case 3164:
case 1222:
case 2767:
case 3356:
case 326:
case 1167:
case 1196:
case 1087:
case 1086:
case 1197:
case 2796:
case 2870:
case 329:
case 3084:
case 4008:
case 1456:
case 1457:
case 1613:
case 344:
case 832:
case 1812:
case 2717:
case 2431:
case 1116:
case 3644:
case 799:
case 2998:
case 3541:
case 1647:
case 2261:
case 2821:
case 930:
case 3926:
case 2060:
case 150:
case 1924:
case 1574:
case 3364:
case 3497:
case 2884:
case 2567:
case 1154:
case 3271:
case 1367:
case 3070:
case 88:
case 1494:
case 4012:
case 2533:
case 3156:
case 2902:
case 1244:
case 2865:
case 2709:
case 538:
case 2225:
case 1109:
case 3385:
case 14:
case 1279:
case 274:
case 974:
case 742:
case 1808:
case 3416:
case 1503:
case 1029:
case 1932:
case 3653:
case 2075:
case 1414:
case 169:
case 3220:
case 1739:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761228001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,];
var gg_b = "1761228001/";

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
