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
case 1308:
case 946:
case 121:
case 3692:
case 477:
case 3244:
case 222:
case 2363:
case 3707:
case 3807:
case 1596:
case 1706:
case 1977:
case 2291:
case 516:
case 508:
case 1700:
case 2492:
case 1590:
case 968:
case 1524:
case 619:
case 749:
case 3719:
case 3819:
case 891:
case 2010:
case 3507:
case 3428:
case 2950:
case 903:
case 1344:
case 2249:
case 3621:
case 1094:
case 331:
case 3897:
case 1283:
case 23:
case 1398:
case 3932:
case 249:
case 3110:
case 2956:
case 3355:
case 590:
case 3027:
case 2421:
case 1890:
case 1824:
case 3473:
case 2402:
case 610:
case 2814:
case 2714:
case 740:
case 1984:
case 2127:
case 1796:
case 2640:
case 2201:
case 1212:
case 2645:
case 3072:
case 1582:
case 1364:
case 1687:
case 3466:
case 1357:
case 2578:
case 840:
case 3758:
case 3858:
case 2486:
case 1895:
case 2666:
case 3534:
case 192:
case 462:
case 291:
case 205:
case 3680:
case 2739:
case 1454:
case 2332:
case 2851:
case 188:
case 1025:
case 39:
case 2955:
case 1467:
case 2660:
case 849:
case 791:
case 83:
case 1595:
case 1901:
case 1389:
case 2130:
case 4019:
case 90:
case 2284:
case 1659:
case 1705:
case 3036:
case 1922:
case 2093:
case 1631:
case 3152:
case 3257:
case 3264:
case 1782:
case 1674:
case 233:
case 2343:
case 2983:
case 2551:
case 158:
case 541:
case 514:
case 1949:
case 638:
case 3871:
case 1813:
case 3963:
case 2376:
case 3734:
case 3834:
case 2681:
case 401:
case 2570:
case 3756:
case 1186:
case 2351:
case 138:
case 3661:
case 3213:
case 1060:
case 1180:
case 929:
case 824:
case 2576:
case 3750:
case 2625:
case 85:
case 3688:
case 1395:
case 3481:
case 2087:
case 2167:
case 1045:
case 3205:
case 3425:
case 1857:
case 1757:
case 3914:
case 2179:
case 3054:
case 2543:
case 1864:
case 1764:
case 226:
case 3550:
case 2323:
case 2876:
case 2776:
case 3334:
case 678:
case 688:
case 2138:
case 1313:
case 328:
case 753:
case 1942:
case 1430:
case 2532:
case 3556:
case 2770:
case 942:
case 3174:
case 2919:
case 2059:
case 2843:
case 3131:
case 147:
case 512:
case 4012:
case 2074:
case 3295:
case 1789:
case 1889:
case 88:
case 3224:
case 3290:
case 2233:
case 3319:
case 1300:
case 1962:
case 110:
case 3712:
case 3812:
case 3404:
case 3296:
case 2499:
case 3923:
case 437:
case 1544:
case 2863:
case 2763:
case 2875:
case 351:
case 1435:
case 2971:
case 853:
case 2604:
case 1598:
case 1708:
case 1808:
case 3555:
case 1396:
case 3512:
case 119:
case 2958:
case 3420:
case 2409:
case 2018:
case 1040:
case 3426:
case 3641:
case 2229:
case 3118:
case 1219:
case 1324:
case 75:
case 3609:
case 1427:
case 2620:
case 27:
case 1798:
case 1185:
case 3951:
case 621:
case 4050:
case 1610:
case 3011:
case 1073:
case 2417:
case 4056:
case 3939:
case 3397:
case 2563:
case 3047:
case 1102:
case 2575:
case 196:
case 2626:
case 1744:
case 466:
case 2613:
case 2261:
case 3482:
case 3738:
case 1566:
case 1623:
case 337:
case 746:
case 3281:
case 3170:
case 2462:
case 3405:
case 1337:
case 519:
case 1678:
case 3268:
case 80:
case 3143:
case 699:
case 93:
case 768:
case 3336:
case 2874:
case 2682:
case 949:
case 2393:
case 3554:
case 3330:
case 2859:
case 2759:
case 1272:
case 3567:
case 203:
case 3662:
case 3050:
case 3495:
case 3132:
case 3910:
case 2156:
case 1381:
case 366:
case 127:
case 4047:
case 1866:
case 1766:
case 481:
case 3538:
case 1639:
case 2303:
case 3372:
case 3867:
case 3767:
case 922:
case 2927:
case 1064:
case 1057:
case 663:
case 2695:
case 2574:
case 2787:
case 1845:
case 1745:
case 2531:
case 1941:
case 3779:
case 3879:
case 897:
case 940:
case 1368:
case 3327:
case 3903:
case 1191:
case 1740:
case 1988:
case 3633:
case 364:
case 2690:
case 1846:
case 2718:
case 4054:
case 1828:
case 3747:
case 3847:
case 2310:
case 933:
case 31:
case 1320:
case 1394:
case 395:
case 301:
case 20:
case 1098:
case 547:
case 112:
case 1326:
case 1765:
case 1865:
case 3711:
case 3811:
case 1873:
case 1773:
case 3424:
case 211:
case 2433:
case 1348:
case 2316:
case 3055:
case 1407:
case 3629:
case 3012:
case 2600:
case 2518:
case 3335:
case 991:
case 744:
case 614:
case 641:
case 2442:
case 2112:
case 1122:
case 1227:
case 2606:
case 1008:
case 66:
case 594:
case 1419:
case 3175:
case 1565:
case 3083:
case 4038:
case 3294:
case 3220:
case 2209:
case 1304:
case 428:
case 2075:
case 2292:
case 1980:
case 2716:
case 1748:
case 2644:
case 3311:
case 1726:
case 1720:
case 3097:
case 2491:
case 2810:
case 2710:
case 1504:
case 2698:
case 16:
case 3444:
case 1328:
case 141:
case 114:
case 4072:
case 2318:
case 1340:
case 2014:
case 3498:
case 926:
case 3727:
case 855:
case 2967:
case 3691:
case 1090:
case 953:
case 2285:
case 1804:
case 407:
case 2401:
case 1247:
case 742:
case 1520:
case 612:
case 3273:
case 1526:
case 2107:
case 3265:
case 2938:
case 1548:
case 2516:
case 2221:
case 3649:
case 4036:
case 875:
case 3959:
case 3527:
case 3019:
case 3622:
case 588:
case 578:
case 3240:
case 229:
case 3246:
case 1006:
case 3835:
case 3228:
case 1129:
case 4030:
case 1082:
case 1267:
case 3572:
case 3677:
case 1254:
case 3730:
case 2689:
case 3830:
case 2893:
case 2793:
case 1643:
case 3836:
case 493:
case 3178:
case 1568:
case 2852:
case 2331:
case 785:
case 1737:
case 1837:
case 820:
case 2477:
case 627:
case 1670:
case 3123:
case 1525:
case 1676:
case 387:
case 1992:
case 2171:
case 2515:
case 3338:
case 1095:
case 1868:
case 2552:
case 2657:
case 2387:
case 521:
case 469:
case 3354:
case 2593:
case 1456:
case 3367:
case 2703:
case 3684:
case 3464:
case 431:
case 2911:
case 1902:
case 357:
case 116:
case 3457:
case 2484:
case 1360:
case 285:
case 1881:
case 1781:
case 3151:
case 1537:
case 2947:
case 3231:
case 2095:
case 522:
case 3928:
case 1552:
case 2868:
case 1657:
case 4017:
case 1387:
case 3274:
case 474:
case 484:
case 4041:
case 3259:
case 1703:
case 1803:
case 2238:
case 2921:
case 3:
case 4009:
case 2902:
case 1911:
case 3973:
case 432:
case 216:
case 790:
case 1051:
case 2725:
case 3650:
case 910:
case 2360:
case 2781:
case 1039:
case 2985:
case 2632:
case 1947:
case 2537:
case 996:
case 1503:
case 2267:
case 646:
case 290:
case 1359:
case 2254:
case 86:
case 3588:
case 53:
case 2643:
case 263:
case 2005:
case 1374:
case 1752:
case 1852:
case 2568:
case 42:
case 1286:
case 1023:
case 2953:
case 155:
case 1477:
case 2670:
case 635:
case 1134:
case 343:
case 2992:
case 1171:
case 3561:
case 1280:
case 814:
case 994:
case 3799:
case 3683:
case 714:
case 2704:
case 741:
case 611:
case 1401:
case 2412:
case 3353:
case 60:
case 2594:
case 1608:
case 1422:
case 2520:
case 3509:
case 1202:
case 1107:
case 2663:
case 2675:
case 2548:
case 1516:
case 3392:
case 330:
case 3106:
case 3612:
case 129:
case 3517:
case 1449:
case 1119:
case 2006:
case 938:
case 76:
case 3100:
case 2129:
case 808:
case 1197:
case 1292:
case 863:
case 1816:
case 533:
case 1716:
case 2848:
case 2748:
case 3966:
case 2373:
case 2365:
case 2826:
case 3809:
case 1253:
case 947:
case 3655:
case 2820:
case 2720:
case 1491:
case 697:
case 26:
case 2504:
case 517:
case 142:
case 1979:
case 4088:
case 2328:
case 3741:
case 3190:
case 423:
case 2346:
case 339:
case 1014:
case 1967:
case 2024:
case 2090:
case 2528:
case 827:
case 1936:
case 3022:
case 2546:
case 988:
case 1930:
case 1112:
case 2101:
case 359:
case 1442:
case 712:
case 992:
case 2227:
case 2122:
case 2419:
case 2149:
case 553:
case 3892:
case 2573:
case 3502:
case 1429:
case 197:
case 3108:
case 3853:
case 1183:
case 2304:
case 1075:
case 1063:
case 445:
case 1972:
case 2191:
case 2740:
case 2840:
case 1696:
case 2497:
case 3091:
case 1690:
case 2235:
case 629:
case 1624:
case 1818:
case 2614:
case 3968:
case 526:
case 2828:
case 3341:
case 2044:
case 1299:
case 3785:
case 1155:
case 2320:
case 3309:
case 3981:
case 4080:
case 3925:
case 212:
case 3702:
case 2865:
case 3697:
case 1433:
case 3721:
case 573:
case 1316:
case 4002:
case 3886:
case 1156:
case 2760:
case 2458:
case 3994:
case 2381:
case 135:
case 2909:
case 3926:
case 4085:
case 482:
case 472:
case 2866:
case 524:
case 3948:
case 2639:
case 1315:
case 3361:
case 2184:
case 1303:
case 1927:
case 2064:
case 921:
case 3451:
case 2230:
case 2917:
case 1695:
case 1574:
case 3439:
case 3164:
case 1887:
case 1787:
case 434:
case 2845:
case 3084:
case 3157:
case 3252:
case 2368:
case 409:
case 4053:
case 3215:
case 3580:
case 675:
case 2566:
case 685:
case 4092:
case 325:
case 2560:
case 1462:
case 3586:
case 3904:
case 2999:
case 1352:
case 2678:
case 3423:
case 2434:
case 2089:
case 812:
case 1731:
case 2545:
case 2471:
case 3077:
case 1935:
case 1874:
case 1393:
case 3189:
case 1043:
case 2177:
case 2272:
case 1759:
case 1605:
case 2396:
case 3995:
case 219:
case 2046:
case 1018:
case 3627:
case 1409:
case 309:
case 1314:
case 2219:
case 3416:
case 2324:
case 2390:
case 334:
case 2427:
case 3021:
case 1620:
case 1694:
case 503:
case 2508:
case 2798:
case 17:
case 963:
case 2065:
case 1242:
case 3002:
case 2616:
case 3549:
case 1441:
case 1563:
case 1626:
case 640:
case 296:
case 710:
case 2844:
case 372:
case 382:
case 3085:
case 990:
case 1233:
case 4077:
case 3214:
case 2300:
case 2306:
case 796:
case 3822:
case 916:
case 908:
case 3905:
case 2962:
case 210:
case 3801:
case 838:
case 568:
case 2544:
case 546:
case 1934:
case 1875:
case 1763:
case 2297:
case 1971:
case 719:
case 3053:
case 999:
case 3749:
case 1604:
case 2153:
case 3092:
case 367:
case 1323:
case 1876:
case 3239:
case 2313:
case 819:
case 941:
case 914:
case 3251:
case 691:
case 3493:
case 4049:
case 511:
case 2564:
case 4022:
case 50:
case 3900:
case 247:
case 2557:
case 896:
case 4001:
case 2652:
case 3584:
case 3362:
case 2258:
case 3777:
case 3906:
case 1074:
case 480:
case 2789:
case 2889:
case 265:
case 1681:
case 747:
case 3080:
case 3403:
case 3160:
case 2472:
case 2066:
case 238:
case 1351:
case 2615:
case 2060:
case 2271:
case 2180:
case 1339:
case 3166:
case 1576:
case 336:
case 489:
case 479:
case 1087:
case 345:
case 1167:
case 3884:
case 3569:
case 597:
case 2857:
case 3990:
case 294:
case 153:
case 3924:
case 3415:
case 2933:
case 3145:
case 4091:
case 2764:
case 1052:
case 2595:
case 1130:
case 2659:
case 2705:
case 430:
case 2922:
case 2631:
case 1878:
case 1778:
case 1136:
case 2674:
case 1343:
case 1370:
case 3459:
case 3908:
case 1983:
case 258:
case 2949:
case 3474:
case 3638:
case 2813:
case 2037:
case 542:
case 356:
case 1376:
case 4042:
case 2364:
case 2582:
case 821:
case 3679:
case 2357:
case 3168:
case 1269:
case 3088:
case 4033:
case 1172:
case 2991:
case 3667:
case 673:
case 2188:
case 2795:
case 2895:
case 3276:
case 3125:
case 2479:
case 386:
case 2161:
case 461:
case 1839:
case 2454:
case 1751:
case 529:
case 2025:
case 3998:
case 3181:
case 3061:
case 626:
case 1660:
case 3263:
case 3275:
case 1665:
case 1950:
case 2344:
case 3418:
case 3148:
case 4:
case 2283:
case 406:
case 13:
case 149:
case 2026:
case 1956:
case 1016:
case 3194:
case 2048:
case 1646:
case 1421:
case 2618:
case 3733:
case 3833:
case 2824:
case 374:
case 384:
case 2790:
case 2890:
case 1402:
case 2141:
case 2500:
case 3017:
case 3957:
case 1814:
case 1714:
case 2984:
case 1222:
case 2796:
case 2447:
case 2117:
case 2212:
case 1201:
case 2308:
case 3104:
case 32:
case 2199:
case 68:
case 3349:
case 443:
case 3099:
case 122:
case 1375:
case 1363:
case 888:
case 3989:
case 3322:
case 2706:
case 927:
case 2806:
case 2977:
case 1291:
case 892:
case 3729:
case 2800:
case 2524:
case 354:
case 1756:
case 3472:
case 365:
case 4044:
case 3180:
case 3271:
case 3615:
case 2086:
case 412:
case 3234:
case 1468:
case 2223:
case 1688:
case 3395:
case 2784:
case 2884:
case 3603:
case 245:
case 1054:
case 852:
case 2278:
case 1425:
case 3764:
case 1282:
case 2415:
case 2924:
case 615:
case 1334:
case 2452:
case 267:
case 4008:
case 94:
case 3313:
case 69:
case 939:
case 564:
case 2239:
case 2251:
case 3382:
case 1174:
case 2636:
case 3652:
case 3557:
case 2869:
case 2769:
case 872:
case 3929:
case 501:
case 2906:
case 3258:
case 2777:
case 595:
case 1159:
case 3305:
case 2362:
case 51:
case 1295:
case 3789:
case 906:
case 1224:
case 669:
case 2329:
case 1978:
case 566:
case 836:
case 310:
case 772:
case 782:
case 3962:
case 2722:
case 2822:
case 3306:
case 1404:
case 1812:
case 3544:
case 1923:
case 2749:
case 2053:
case 2913:
case 3192:
case 3297:
case 1883:
case 3598:
case 1699:
case 2092:
case 3153:
case 3808:
case 1512:
case 319:
case 3028:
case 1617:
case 3396:
case 943:
case 2627:
case 3046:
case 1494:
case 4064:
case 2891:
case 2791:
case 537:
case 867:
case 1641:
case 3040:
case 1426:
case 234:
case 2146:
case 1448:
case 3508:
case 1855:
case 1755:
case 3427:
case 3065:
case 3610:
case 700:
case 3185:
case 3898:
case 3798:
case 1397:
case 2549:
case 1939:
case 513:
case 2085:
case 282:
case 3844:
case 3744:
case 396:
case 1047:
case 3207:
case 1970:
case 1653:
case 1298:
case 3199:
case 1383:
case 784:
case 774:
case 2104:
case 681:
case 2742:
case 2842:
case 2349:
case 1692:
case 1707:
case 1807:
case 3004:
case 2099:
case 2989:
case 1312:
case 4082:
case 1035:
case 3706:
case 3700:
case 3800:
case 2729:
case 557:
case 3969:
case 886:
case 876:
case 1819:
case 1719:
case 4005:
case 463:
case 1943:
case 2533:
case 193:
case 1428:
case 1602:
case 408:
case 2263:
case 2126:
case 1897:
case 1797:
case 3094:
case 1116:
case 2009:
case 1621:
case 1932:
case 2542:
case 1440:
case 2647:
case 754:
case 1685:
case 3283:
case 3048:
case 1208:
case 3790:
case 284:
case 274:
case 3824:
case 2833:
case 1519:
case 2964:
case 4095:
case 2957:
case 925:
case 3141:
case 1465:
case 2391:
case 3212:
case 3447:
case 169:
case 3896:
case 499:
case 3687:
case 414:
case 441:
case 3364:
case 2243:
case 1072:
case 223:
case 2088:
case 2168:
case 1466:
case 3357:
case 2679:
case 3991:
case 3505:
case 1460:
case 2384:
case 756:
case 4090:
case 1289:
case 2654:
case 3895:
case 3188:
case 286:
case 276:
case 2944:
case 1534:
case 3479:
case 2125:
case 2276:
case 970:
case 980:
case 854:
case 628:
case 2487:
case 3081:
case 1571:
case 1445:
case 3513:
case 3025:
case 378:
case 46:
case 3454:
case 3467:
case 115:
case 3389:
case 4000:
case 2762:
case 3659:
case 2369:
case 1152:
case 1257:
case 3631:
case 1030:
case 832:
case 3674:
case 1264:
case 2908:
case 2459:
case 3256:
case 107:
case 358:
case 3713:
case 2638:
case 979:
case 989:
case 2474:
case 874:
case 3949:
case 3250:
case 1834:
case 256:
case 3037:
case 2431:
case 2321:
case 3980:
case 261:
case 4081:
case 3826:
case 3726:
case 492:
case 3373:
case 730:
case 1097:
case 3720:
case 3894:
case 2809:
case 3504:
case 2385:
case 36:
case 1347:
case 478:
case 3986:
case 4025:
case 3328:
case 3096:
case 843:
case 1987:
case 2190:
case 314:
case 507:
case 2196:
case 4068:
case 2817:
case 204:
case 3024:
case 1827:
case 3455:
case 3412:
case 3247:
case 3804:
case 3704:
case 2899:
case 3520:
case 3594:
case 695:
case 4037:
case 945:
case 3663:
case 601:
case 1273:
case 2042:
case 3211:
case 74:
case 2392:
case 61:
case 739:
case 1408:
case 936:
case 1959:
case 664:
case 59:
case 3000:
case 2029:
case 1601:
case 806:
case 761:
case 1835:
case 1735:
case 8:
case 1974:
case 1931:
case 2463:
case 390:
case 3267:
case 982:
case 972:
case 1572:
case 2105:
case 7:
case 3254:
case 1830:
case 1730:
case 706:
case 648:
case 531:
case 1836:
case 2287:
case 861:
case 2062:
case 998:
case 363:
case 3643:
case 718:
case 1178:
case 2476:
case 569:
case 1260:
case 804:
case 3953:
case 4004:
case 1123:
case 3525:
case 421:
case 2113:
case 2443:
case 3992:
case 3768:
case 3095:
case 2231:
case 2274:
case 1530:
case 2432:
case 399:
case 2940:
case 2788:
case 2195:
case 1354:
case 1772:
case 3456:
case 2:
case 4020:
case 4094:
case 2761:
case 3921:
case 3238:
case 1464:
case 2650:
case 3725:
case 3366:
case 1457:
case 157:
case 316:
case 2973:
case 3902:
case 560:
case 3781:
case 830:
case 3881:
case 2656:
case 637:
case 3632:
case 206:
case 2386:
case 218:
case 4026:
case 900:
case 3985:
case 1838:
case 1482:
case 2215:
case 2634:
case 657:
case 1405:
case 3560:
case 1281:
case 850:
case 974:
case 2904:
case 3089:
case 3169:
case 1579:
case 2423:
case 1336:
case 1413:
case 3545:
case 113:
case 2189:
case 802:
case 1554:
case 932:
case 3272:
case 3177:
case 2203:
case 410:
case 1132:
case 2886:
case 1237:
case 1910:
case 1050:
case 859:
case 4065:
case 954:
case 3651:
case 870:
case 880:
case 2994:
case 3458:
case 677:
case 3766:
case 3866:
case 496:
case 3325:
case 166:
case 2361:
case 2780:
case 4046:
case 1767:
case 2388:
case 148:
case 2451:
case 419:
case 92:
case 3236:
case 551:
case 2439:
case 2164:
case 4040:
case 3368:
case 1903:
case 825:
case 4045:
case 1327:
case 2317:
case 528:
case 3988:
case 289:
case 279:
case 494:
case 3846:
case 3235:
case 2091:
case 3497:
case 2341:
case 3728:
case 3828:
case 2968:
case 202:
case 1496:
case 1204:
case 1847:
case 1747:
case 4066:
case 101:
case 2981:
case 2553:
case 3765:
case 2702:
case 1811:
case 3873:
case 2144:
case 770:
case 780:
case 4060:
case 759:
case 3348:
case 1915:
case 1424:
case 3528:
case 1335:
case 702:
case 3546:
case 259:
case 3101:
case 1993:
case 976:
case 270:
case 2792:
case 789:
case 779:
case 3149:
case 1083:
case 1400:
case 1175:
case 1511:
case 3565:
case 3573:
case 2753:
case 2108:
case 1406:
case 2937:
case 1642:
case 2399:
case 923:
case 866:
case 701:
case 604:
case 915:
case 3600:
case 2629:
case 2012:
case 99:
case 639:
case 71:
case 1022:
case 1619:
case 4059:
case 483:
case 3930:
case 2993:
case 3606:
case 170:
case 4074:
case 1792:
case 1216:
case 2248:
case 397:
case 3429:
case 2226:
case 2400:
case 2511:
case 1108:
case 1049:
case 545:
case 1210:
case 1937:
case 3063:
case 661:
case 2642:
case 3183:
case 3696:
case 1317:
case 189:
case 3818:
case 264:
case 3624:
case 630:
case 1968:
case 1885:
case 1198:
case 2204:
case 102:
case 2847:
case 201:
case 1309:
case 295:
case 1553:
case 3155:
case 1802:
case 1144:
case 1925:
case 2055:
case 813:
case 2915:
case 3433:
case 344:
case 1786:
case 2237:
case 2132:
case 2495:
case 643:
case 2050:
case 1920:
case 1994:
case 3156:
case 3150:
case 1926:
case 266:
case 1361:
case 2056:
case 1780:
case 2916:
case 500:
case 1948:
case 737:
case 3559:
case 1658:
case 2754:
case 2854:
case 3695:
case 1388:
case 1451:
case 248:
case 1084:
case 3887:
case 3787:
case 1157:
case 2779:
case 552:
case 346:
case 618:
case 1580:
case 864:
case 3070:
case 1215:
case 1671:
case 748:
case 3613:
case 606:
case 237:
case 2225:
case 509:
case 2405:
case 125:
case 3076:
case 1904:
case 6:
case 3731:
case 2579:
case 3352:
case 1423:
case 3774:
case 3682:
case 3874:
case 3587:
case 1077:
case 2413:
case 3935:
case 2143:
case 598:
case 2330:
case 2554:
case 81:
case 3393:
case 2662:
case 303:
case 3043:
case 1203:
case 2567:
case 895:
case 2379:
case 3552:
case 2058:
case 3664:
case 3387:
case 1274:
case 52:
case 1432:
case 2530:
case 2354:
case 1195:
case 777:
case 2872:
case 3158:
case 1:
case 1380:
case 2139:
case 2464:
case 554:
case 625:
case 2457:
case 257:
case 385:
case 1656:
case 3947:
case 106:
case 2151:
case 118:
case 449:
case 2677:
case 3359:
case 1470:
case 757:
case 3078:
case 3689:
case 2736:
case 2836:
case 1287:
case 2245:
case 1062:
case 862:
case 532:
case 3331:
case 3852:
case 2178:
case 2669:
case 3023:
case 3286:
case 2071:
case 355:
case 440:
case 277:
case 2266:
case 2123:
case 3515:
case 1561:
case 1443:
case 2007:
case 1683:
case 1509:
case 1353:
case 1042:
case 3107:
case 2649:
case 3221:
case 602:
case 523:
case 2622:
case 1106:
case 2527:
case 2959:
case 130:
case 4052:
case 2601:
case 2735:
case 2835:
case 679:
case 689:
case 2246:
case 433:
case 3119:
case 2974:
case 1218:
case 576:
case 586:
case 4093:
case 2228:
case 650:
case 1100:
case 3716:
case 3197:
case 1302:
case 2311:
case 262:
case 1966:
case 2097:
case 1960:
case 3698:
case 1385:
case 2347:
case 3710:
case 680:
case 3979:
case 342:
case 556:
case 2444:
case 2114:
case 2987:
case 2535:
case 928:
case 1190:
case 14:
case 2498:
case 3954:
case 2691:
case 3967:
case 2727:
case 3130:
case 2036:
case 1862:
case 3284:
case 1369:
case 901:
case 2257:
case 2152:
case 995:
case 3093:
case 715:
case 2030:
case 3343:
case 831:
case 2264:
case 1908:
case 1137:
case 964:
case 869:
case 3983:
case 2871:
case 2771:
case 1474:
case 3539:
case 3823:
case 2734:
case 317:
case 156:
case 2072:
case 1243:
case 123:
case 442:
case 1088:
case 1168:
case 3269:
case 1679:
case 1667:
case 2103:
case 3277:
case 2460:
case 176:
case 186:
case 1944:
case 3666:
case 1276:
case 3523:
case 1125:
case 2350:
case 893:
case 3739:
case 3839:
case 2680:
case 1487:
case 305:
case 2445:
case 391:
case 1998:
case 3751:
case 3851:
case 3332:
case 3660:
case 1061:
case 667:
case 215:
case 530:
case 860:
case 132:
case 3950:
case 2602:
case 1611:
case 4051:
case 1126:
case 1263:
case 3010:
case 2897:
case 231:
case 2110:
case 1647:
case 793:
case 913:
case 652:
case 2355:
case 3016:
case 485:
case 475:
case 3956:
case 3421:
case 543:
case 1964:
case 3646:
case 2519:
case 1957:
case 3714:
case 3402:
case 2465:
case 2473:
case 3222:
case 3201:
case 3640:
case 269:
case 807:
case 3485:
case 455:
case 682:
case 672:
case 12:
case 2383:
case 1842:
case 4023:
case 1742:
case 698:
case 769:
case 1349:
case 2692:
case 2597:
case 2807:
case 3375:
case 3363:
case 2976:
case 731:
case 89:
case 815:
case 609:
case 2035:
case 260:
case 966:
case 3453:
case 1829:
case 5:
case 3492:
case 154:
case 1501:
case 1410:
case 654:
case 828:
case 1995:
case 3018:
case 1627:
case 2420:
case 2494:
case 2206:
case 525:
case 1891:
case 3229:
case 1128:
case 2426:
case 109:
case 1146:
case 2118:
case 3620:
case 2855:
case 2755:
case 2609:
case 435:
case 3147:
case 3242:
case 468:
case 2011:
case 2583:
case 37:
case 62:
case 2939:
case 1549:
case 4032:
case 1085:
case 172:
case 3575:
case 3441:
case 1165:
case 1173:
case 1982:
case 2319:
case 3233:
case 100:
case 324:
case 1635:
case 2978:
case 1214:
case 1591:
case 1905:
case 957:
case 403:
case 3499:
case 2296:
case 781:
case 684:
case 2812:
case 3863:
case 1053:
case 1849:
case 1749:
case 3971:
case 2555:
case 2334:
case 3776:
case 3876:
case 3323:
case 1452:
case 167:
case 3138:
case 3532:
case 3637:
case 228:
case 4075:
case 579:
case 550:
case 3770:
case 676:
case 383:
case 373:
case 3843:
case 871:
case 2174:
case 1769:
case 2131:
case 1900:
case 1906:
case 2159:
case 1777:
case 1877:
case 2437:
case 502:
case 623:
case 2756:
case 656:
case 3570:
case 580:
case 570:
case 3681:
case 3351:
case 3488:
case 3832:
case 3732:
case 411:
case 3997:
case 1086:
case 136:
case 2468:
case 2850:
case 1223:
case 1166:
case 1996:
case 3154:
case 1884:
case 1672:
case 1784:
case 1577:
case 3167:
case 3087:
case 145:
case 2054:
case 3179:
case 1278:
case 3668:
case 851:
case 1415:
case 3461:
case 1145:
case 728:
case 1924:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752642001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,];
var gg_b = "1752642001/";

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
