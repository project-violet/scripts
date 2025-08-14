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
case 3893:
case 1469:
case 89:
case 1752:
case 3278:
case 2494:
case 3362:
case 2903:
case 3196:
case 2791:
case 730:
case 2381:
case 2172:
case 760:
case 1960:
case 482:
case 3348:
case 3727:
case 1997:
case 3835:
case 582:
case 2679:
case 1983:
case 1046:
case 2379:
case 3323:
case 3623:
case 745:
case 553:
case 1496:
case 396:
case 478:
case 439:
case 1717:
case 1601:
case 1301:
case 539:
case 578:
case 1345:
case 2911:
case 3887:
case 3512:
case 3755:
case 1294:
case 2251:
case 1365:
case 1834:
case 358:
case 394:
case 373:
case 1730:
case 3272:
case 3668:
case 3368:
case 3644:
case 3344:
case 1522:
case 805:
case 1099:
case 1524:
case 3081:
case 3642:
case 3342:
case 2784:
case 2694:
case 3759:
case 2532:
case 2265:
case 2706:
case 2166:
case 3145:
case 892:
case 1369:
case 3761:
case 1123:
case 2392:
case 2782:
case 2692:
case 2481:
case 740:
case 271:
case 2863:
case 3448:
case 1033:
case 1078:
case 3423:
case 735:
case 1704:
case 2479:
case 417:
case 2953:
case 1401:
case 2970:
case 1702:
case 380:
case 1519:
case 1142:
case 506:
case 1708:
case 3299:
case 2550:
case 2573:
case 2843:
case 2538:
case 3529:
case 3442:
case 3092:
case 2201:
case 3741:
case 2788:
case 2076:
case 3165:
case 2398:
case 1649:
case 3266:
case 833:
case 2855:
case 2253:
case 1561:
case 283:
case 2270:
case 3060:
case 1559:
case 3946:
case 3083:
case 2965:
case 3504:
case 4074:
case 946:
case 2793:
case 275:
case 787:
case 1470:
case 3891:
case 1167:
case 117:
case 639:
case 149:
case 2901:
case 798:
case 3231:
case 2945:
case 1190:
case 3490:
case 1303:
case 2537:
case 347:
case 2913:
case 1981:
case 731:
case 2697:
case 2397:
case 1527:
case 2090:
case 214:
case 2067:
case 2589:
case 3277:
case 207:
case 326:
case 3647:
case 2211:
case 2949:
case 1998:
case 25:
case 801:
case 3933:
case 2203:
case 3978:
case 1725:
case 936:
case 3995:
case 934:
case 964:
case 4046:
case 3884:
case 153:
case 2861:
case 3806:
case 3882:
case 1411:
case 617:
case 1353:
case 178:
case 1712:
case 649:
case 3763:
case 3103:
case 3667:
case 2951:
case 1994:
case 2716:
case 3690:
case 1757:
case 712:
case 1992:
case 3722:
case 3558:
case 270:
case 741:
case 216:
case 3530:
case 68:
case 3421:
case 2177:
case 324:
case 2460:
case 951:
case 3045:
case 2066:
case 1526:
case 2832:
case 3478:
case 2563:
case 2294:
case 3433:
case 980:
case 3346:
case 1269:
case 2834:
case 3198:
case 1023:
case 1064:
case 3516:
case 2099:
case 1133:
case 3013:
case 1195:
case 2940:
case 893:
case 4090:
case 2758:
case 407:
case 4067:
case 725:
case 1172:
case 3699:
case 3789:
case 3399:
case 1042:
case 810:
case 876:
case 1819:
case 416:
case 1044:
case 2528:
case 1174:
case 2313:
case 2451:
case 2717:
case 1756:
case 3194:
case 699:
case 3829:
case 1911:
case 3666:
case 37:
case 2298:
case 768:
case 2345:
case 2176:
case 3771:
case 2983:
case 1679:
case 2046:
case 3472:
case 2496:
case 3248:
case 2708:
case 3395:
case 3593:
case 355:
case 1815:
case 2074:
case 3446:
case 552:
case 3262:
case 3333:
case 3633:
case 3096:
case 3678:
case 3947:
case 583:
case 3825:
case 3737:
case 483:
case 985:
case 1076:
case 2649:
case 4021:
case 1398:
case 1245:
case 808:
case 1675:
case 1550:
case 1538:
case 1843:
case 3051:
case 1573:
case 1692:
case 3049:
case 2123:
case 1534:
case 1863:
case 3499:
case 3967:
case 2413:
case 2351:
case 2826:
case 1784:
case 1394:
case 1265:
case 1706:
case 3374:
case 2401:
case 748:
case 3674:
case 2445:
case 372:
case 199:
case 1953:
case 958:
case 1822:
case 2095:
case 3242:
case 1970:
case 2162:
case 2078:
case 3710:
case 2696:
case 2033:
case 973:
case 1199:
case 475:
case 2148:
case 3181:
case 3372:
case 3672:
case 2704:
case 1479:
case 1880:
case 3247:
case 1827:
case 1945:
case 249:
case 1383:
case 1793:
case 3923:
case 3677:
case 366:
case 336:
case 1585:
case 2729:
case 571:
case 811:
case 926:
case 1360:
case 3773:
case 3817:
case 3948:
case 1809:
case 471:
case 670:
case 3750:
case 2505:
case 3588:
case 2541:
case 2871:
case 967:
case 1270:
case 4076:
case 3942:
case 183:
case 713:
case 1340:
case 1640:
case 3968:
case 351:
case 607:
case 3011:
case 364:
case 334:
case 65:
case 2077:
case 3290:
case 1131:
case 269:
case 2370:
case 2670:
case 2712:
case 675:
case 253:
case 2240:
case 346:
case 795:
case 3976:
case 4042:
case 282:
case 3183:
case 2992:
case 3802:
case 1460:
case 170:
case 1177:
case 2403:
case 4044:
case 1951:
case 2810:
case 3886:
case 84:
case 862:
case 1969:
case 832:
case 2885:
case 784:
case 947:
case 4064:
case 3631:
case 683:
case 2998:
case 1949:
case 2283:
case 1440:
case 1589:
case 3591:
case 3140:
case 2837:
case 2725:
case 3070:
case 70:
case 1805:
case 309:
case 1841:
case 4023:
case 652:
case 1203:
case 3269:
case 2079:
case 1646:
case 258:
case 2149:
case 1198:
case 3023:
case 2755:
case 2512:
case 409:
case 273:
case 1495:
case 655:
case 3500:
case 544:
case 294:
case 4070:
case 444:
case 1001:
case 1175:
case 1276:
case 2644:
case 3296:
case 1013:
case 3195:
case 2272:
case 150:
case 3062:
case 3178:
case 3133:
case 700:
case 2557:
case 3498:
case 777:
case 3903:
case 2278:
case 697:
case 3044:
case 2476:
case 3819:
case 2835:
case 865:
case 3492:
case 3381:
case 3791:
case 3681:
case 1399:
case 1699:
case 2295:
case 1807:
case 546:
case 2:
case 2977:
case 296:
case 2623:
case 446:
case 1065:
case 1771:
case 1192:
case 3911:
case 1474:
case 2169:
case 1194:
case 1829:
case 1262:
case 527:
case 1678:
case 705:
case 1446:
case 1535:
case 2839:
case 3828:
case 464:
case 1264:
case 1248:
case 2299:
case 1695:
case 534:
case 551:
case 2094:
case 2529:
case 3573:
case 1051:
case 3843:
case 2468:
case 2444:
case 1587:
case 1069:
case 2705:
case 1818:
case 1947:
case 1737:
case 2145:
case 1990:
case 2246:
case 2761:
case 3265:
case 2075:
case 3166:
case 1814:
case 3532:
case 2759:
case 197:
case 3394:
case 3784:
case 1812:
case 3481:
case 845:
case 3782:
case 3392:
case 2098:
case 1049:
case 2816:
case 3880:
case 3479:
case 1244:
case 3824:
case 1268:
case 860:
case 1242:
case 280:
case 1674:
case 3953:
case 1466:
case 3822:
case 166:
case 2508:
case 3683:
case 1852:
case 3901:
case 3827:
case 812:
case 572:
case 3735:
case 2719:
case 472:
case 2891:
case 247:
case 2467:
case 2040:
case 1588:
case 2490:
case 219:
case 1964:
case 1750:
case 4049:
case 2621:
case 2856:
case 1948:
case 3660:
case 1773:
case 1817:
case 982:
case 4051:
case 1734:
case 4069:
case 1003:
case 3640:
case 3340:
case 151:
case 2447:
case 3270:
case 3021:
case 1942:
case 701:
case 329:
case 3253:
case 1520:
case 1506:
case 72:
case 3965:
case 969:
case 1290:
case 939:
case 2946:
case 1858:
case 2502:
case 1267:
case 743:
case 3510:
case 2586:
case 455:
case 953:
case 2504:
case 2820:
case 666:
case 1197:
case 3861:
case 1700:
case 861:
case 1726:
case 2884:
case 1477:
case 3996:
case 2763:
case 281:
case 81:
case 2882:
case 3969:
case 3716:
case 854:
case 316:
case 887:
case 2530:
case 1976:
case 1183:
case 2277:
case 550:
case 1591:
case 856:
case 314:
case 98:
case 3090:
case 1331:
case 2552:
case 722:
case 2347:
case 2933:
case 3203:
case 759:
case 627:
case 664:
case 1053:
case 1140:
case 2995:
case 144:
case 4001:
case 1664:
case 424:
case 1835:
case 715:
case 2807:
case 2921:
case 1348:
case 2699:
case 3960:
case 2789:
case 3313:
case 3451:
case 3613:
case 1662:
case 567:
case 185:
case 3515:
case 2539:
case 848:
case 481:
case 2474:
case 1709:
case 1169:
case 27:
case 1887:
case 3838:
case 2829:
case 3496:
case 1977:
case 1518:
case 1525:
case 196:
case 2192:
case 3983:
case 1623:
case 1323:
case 194:
case 2495:
case 3066:
case 2045:
case 2001:
case 708:
case 2198:
case 1149:
case 1079:
case 2646:
case 999:
case 3294:
case 1512:
case 2433:
case 2478:
case 3524:
case 1557:
case 1274:
case 1344:
case 426:
case 3758:
case 3522:
case 526:
case 1368:
case 971:
case 1676:
case 1376:
case 2179:
case 1464:
case 4040:
case 2814:
case 879:
case 868:
case 1246:
case 1101:
case 1462:
case 547:
case 1759:
case 3413:
case 3162:
case 1113:
case 3095:
case 2674:
case 3445:
case 696:
case 3704:
case 6:
case 1816:
case 3148:
case 2181:
case 2372:
case 776:
case 3078:
case 3786:
case 3396:
case 2710:
case 3696:
case 1839:
case 2264:
case 774:
case 3168:
case 2785:
case 3281:
case 1299:
case 2378:
case 658:
case 3072:
case 2262:
case 1507:
case 4083:
case 2446:
case 2535:
case 3465:
case 1931:
case 4060:
case 1741:
case 3349:
case 1266:
case 1165:
case 2737:
case 1442:
case 2818:
case 2947:
case 2825:
case 1468:
case 2051:
case 1529:
case 2069:
case 2223:
case 1444:
case 2584:
case 2942:
case 1060:
case 4092:
case 3559:
case 2732:
case 2520:
case 2431:
case 2506:
case 2734:
case 626:
case 2582:
case 80:
case 2968:
case 251:
case 2003:
case 821:
case 1504:
case 1083:
case 2290:
case 1946:
case 1736:
case 227:
case 1502:
case 306:
case 3077:
case 884:
case 2830:
case 3147:
case 349:
case 3453:
case 3611:
case 762:
case 1966:
case 732:
case 1719:
case 681:
case 74:
case 3470:
case 2247:
case 2854:
case 3167:
case 3707:
case 317:
case 1508:
case 236:
case 2852:
case 2750:
case 2964:
case 789:
case 3981:
case 1856:
case 907:
case 2817:
case 3729:
case 914:
case 2738:
case 3603:
case 3303:
case 147:
case 4075:
case 667:
case 637:
case 3505:
case 3541:
case 3998:
case 1728:
case 1647:
case 1554:
case 1277:
case 2591:
case 3527:
case 3975:
case 802:
case 1888:
case 209:
case 975:
case 3725:
case 2070:
case 3260:
case 3718:
case 573:
case 813:
case 1995:
case 2140:
case 3837:
case 2556:
case 558:
case 181:
case 1882:
case 1974:
case 73:
case 339:
case 3653:
case 3411:
case 742:
case 4:
case 1806:
case 2197:
case 890:
case 711:
case 596:
case 353:
case 2726:
case 382:
case 3992:
case 1722:
case 1780:
case 2804:
case 1111:
case 585:
case 1724:
case 3994:
case 485:
case 2564:
case 855:
case 3434:
case 1080:
case 225:
case 2293:
case 1599:
case 3581:
case 4027:
case 3432:
case 1207:
case 2895:
case 628:
case 2988:
case 2136:
case 3731:
case 1639:
case 3014:
case 99:
case 1132:
case 2026:
case 2000:
case 2625:
case 2618:
case 2318:
case 1908:
case 2287:
case 308:
case 1138:
case 1986:
case 3300:
case 1173:
case 3600:
case 3326:
case 3869:
case 2614:
case 238:
case 279:
case 268:
case 403:
case 1546:
case 2312:
case 2770:
case 1616:
case 872:
case 2357:
case 2657:
case 3961:
case 2906:
case 3135:
case 2119:
case 1015:
case 2982:
case 130:
case 3438:
case 291:
case 2568:
case 1740:
case 1930:
case 4061:
case 1958:
case 2576:
case 4059:
case 1439:
case 2050:
case 2143:
case 2038:
case 3632:
case 3332:
case 3224:
case 3955:
case 3280:
case 2216:
case 2128:
case 1574:
case 3222:
case 220:
case 1842:
case 556:
case 3007:
case 2425:
case 374:
case 454:
case 2414:
case 487:
case 135:
case 1783:
case 165:
case 554:
case 645:
case 1862:
case 3426:
case 310:
case 1578:
case 1917:
case 2956:
case 1533:
case 2412:
case 1635:
case 1335:
case 3228:
case 1864:
case 2239:
case 3215:
case 2180:
case 3116:
case 3909:
case 87:
case 3598:
case 2457:
case 2163:
case 900:
case 2703:
case 3243:
case 41:
case 1100:
case 140:
case 2629:
case 531:
case 3338:
case 4005:
case 1797:
case 660:
case 3650:
case 630:
case 3350:
case 3575:
case 3845:
case 3927:
case 3801:
case 1684:
case 1306:
case 11:
case 922:
case 1620:
case 3980:
case 2109:
case 1957:
case 1005:
case 440:
case 1682:
case 1382:
case 1792:
case 131:
case 540:
case 290:
case 2037:
case 1230:
case 933:
case 963:
case 3772:
case 3191:
case 1867:
case 2386:
case 3610:
case 2796:
case 2686:
case 3310:
case 187:
case 154:
case 535:
case 2127:
case 3471:
case 1890:
case 603:
case 198:
case 34:
case 749:
case 3774:
case 362:
case 332:
case 2417:
case 2602:
case 1912:
case 3778:
case 3086:
case 2010:
case 1254:
case 3385:
case 2608:
case 1918:
case 1577:
case 202:
case 2831:
case 1061:
case 2458:
case 3597:
case 3560:
case 1217:
case 2155:
case 2939:
case 3209:
case 2749:
case 1388:
case 112:
case 3058:
case 2652:
case 2352:
case 1531:
case 286:
case 901:
case 2877:
case 2713:
case 61:
case 1484:
case 1929:
case 836:
case 1691:
case 141:
case 1781:
case 1391:
case 4028:
case 4015:
case 560:
case 3389:
case 631:
case 2987:
case 430:
case 3811:
case 3182:
case 2404:
case 3671:
case 1779:
case 687:
case 654:
case 545:
case 943:
case 445:
case 311:
case 1055:
case 1907:
case 1821:
case 103:
case 698:
case 2317:
case 2617:
case 3184:
case 1656:
case 778:
case 2161:
case 3241:
case 2935:
case 3259:
case 1137:
case 2206:
case 3188:
case 3936:
case 2105:
case 20:
case 2282:
case 656:
case 221:
case 3017:
case 851:
case 2408:
case 2630:
case 4080:
case 2330:
case 864:
case 1185:
case 1286:
case 3052:
case 4024:
case 2358:
case 1488:
case 2590:
case 1027:
case 2089:
case 284:
case 1202:
case 257:
case 3437:
case 4022:
case 827:
case 138:
case 1753:
case 179:
case 3419:
case 3892:
case 392:
case 3363:
case 3232:
case 993:
case 2173:
case 3894:
case 974:
case 2986:
case 2043:
case 3910:
case 2150:
case 245:
case 2015:
case 3039:
case 1982:
case 2028:
case 1544:
case 191:
case 1568:
case 1429:
case 1872:
case 1542:
case 586:
case 377:
case 1906:
case 1920:
case 1657:
case 557:
case 1895:
case 1562:
case 3513:
case 3628:
case 457:
case 3328:
case 3315:
case 2639:
case 4089:
case 1136:
case 1235:
case 1988:
case 125:
case 3016:
case 1878:
case 2599:
case 2024:
case 1548:
case 2229:
case 40:
case 1625:
case 2063:
case 1318:
case 910:
case 1618:
case 1523:
case 421:
case 3250:
case 620:
case 3875:
case 3436:
case 4071:
case 1026:
case 1000:
case 1124:
case 1607:
case 2533:
case 668:
case 2917:
case 3463:
case 3157:
case 799:
case 1239:
case 1180:
case 3319:
case 3971:
case 265:
case 908:
case 2595:
case 1629:
case 240:
case 896:
case 1329:
case 3721:
case 2954:
case 1032:
case 2225:
case 2126:
case 1991:
case 590:
case 2218:
case 4037:
case 1866:
case 3422:
case 3879:
case 3549:
case 1457:
case 2952:
case 3112:
case 3424:
case 1163:
case 228:
case 1050:
case 3428:
case 858:
case 3551:
case 1038:
case 1143:
case 2212:
case 3200:
case 2930:
case 513:
case 3118:
case 894:
case 2740:
case 915:
case 413:
case 2019:
case 502:
case 3596:
case 2842:
case 2868:
case 3443:
case 4010:
case 2574:
case 305:
case 256:
case 1291:
case 2577:
case 3130:
case 2847:
case 3289:
case 2918:
case 826:
case 1608:
case 2254:
case 1308:
case 60:
case 420:
case 102:
case 942:
case 752:
case 93:
case 1010:
case 1256:
case 783:
case 301:
case 3503:
case 3605:
case 32:
case 3082:
case 1939:
case 4073:
case 3020:
case 3006:
case 2775:
case 1430:
case 1521:
case 3084:
case 2382:
case 4032:
case 3776:
case 3088:
case 190:
case 1037:
case 261:
case 2491:
case 3359:
case 3659:
case 2794:
case 881:
case 3117:
case 1769:
case 2957:
case 3661:
case 2306:
case 1452:
case 21:
case 686:
case 548:
case 3409:
case 3152:
case 2912:
case 1417:
case 1602:
case 1386:
case 3154:
case 1796:
case 287:
case 695:
case 2230:
case 3926:
case 1604:
case 1127:
case 775:
case 1282:
case 10:
case 363:
case 1408:
case 121:
case 3056:
case 602:
case 3840:
case 3655:
case 359:
case 4026:
case 1071:
case 94:
case 1105:
case 1765:
case 75:
case 1220:
case 1141:
case 962:
case 3441:
case 1590:
case 3742:
case 1089:
case 2286:
case 3108:
case 1630:
case 425:
case 707:
case 1358:
case 613:
case 525:
case 3744:
case 2781:
case 2391:
case 2691:
case 716:
case 3748:
case 3973:
case 2929:
case 3186:
case 591:
case 3285:
case 1654:
case 2110:
case 1987:
case 690:
case 2482:
case 1352:
case 2406:
case 1652:
case 2531:
case 2420:
case 3461:
case 2484:
case 186:
case 1713:
case 1317:
case 2656:
case 2356:
case 1402:
case 3237:
case 2907:
case 847:
case 438:
case 203:
case 468:
case 1935:
case 579:
case 3309:
case 3723:
case 1993:
case 2600:
case 2851:
case 1129:
case 3770:
case 2018:
case 1232:
case 2025:
case 69:
case 3312:
case 3753:
case 338:
case 368:
case 1419:
case 1892:
case 1565:
case 77:
case 192:
case 2135:
case 1380:
case 2961:
case 3984:
case 177:
case 1107:
case 1767:
case 1624:
case 391:
case 2438:
case 1322:
case 1039:
case 2193:
case 3544:
case 3874:
case 3548:
case 3878:
case 2581:
case 750:
case 3833:
case 2057:
case 2434:
case 1016:
case 3293:
case 3564:
case 4091:
case 2731:
case 1628:
case 2941:
case 522:
case 3988:
case 3136:
case 3895:
case 422:
case 1747:
case 3000:
case 1545:
case 1436:
case 559:
case 1501:
case 4056:
case 2579:
case 2849:
case 935:
case 433:
case 2012:
case 3318:
case 2813:
case 276:
case 2426:
case 1971:
case 3414:
case 3122:
case 3180:
case 2215:
case 2116:
case 348:
case 3711:
case 1619:
case 19:
case 772:
case 3607:
case 3899:
case 1463:
case 3956:
case 1112:
case 2243:
case 3163:
case 1879:
case 1480:
case 3457:
case 677:
case 118:
case 2927:
case 2801:
case 788:
case 3866:
case 2650:
case 1114:
case 4088:
case 2638:
case 2673:
case 2373:
case 2334:
case 3846:
case 960:
case 1118:
case 930:
case 4006:
case 2263:
case 1551:
case 3073:
case 2632:
case 42:
case 3143:
case 600:
case 3050:
case 1569:
case 52:
case 401:
case 1415:
case 2280:
case 1093:
case 3115:
case 2139:
case 3216:
case 3128:
case 2955:
case 2224:
case 3425:
case 274:
case 2007:
case 1035:
case 945:
case 755:
case 727:
case 1455:
case 2733:
case 4093:
case 405:
case 2943:
case 505:
case 1511:
case 1158:
case 3831:
case 3291:
case 764:
case 143:
case 2685:
case 4035:
case 3608:
case 2795:
case 2560:
case 941:
case 313:
case 1006:
case 3458:
case 912:
case 3749:
case 1605:
case 12:
case 2928:
case 3939:
case 622:
case 3256:
case 2637:
case 4087:
case 1503:
case 2980:
case 1661:
case 3452:
case 878:
case 1659:
case 418:
case 1359:
case 2255:
case 390:
case 853:
case 2540:
case 2489:
case 2870:
case 2922:
case 3127:
case 882:
case 1154:
case 3386:
case 2310:
case 3686:
case 1900:
case 49:
case 3085:
case 3417:
case 2963:
case 3602:
case 262:
case 24:
case 1553:
case 2261:
case 2188:
case 3206:
case 3105:
case 2936:
case 2259:
case 1570:
case 1840:
case 1655:
case 1355:
case 3408:
case 1056:
case 321:
case 987:
case 3282:
case 709:
case 30:
case 3658:
case 1934:
case 3358:
case 931:
case 1108:
case 3330:
case 4016:
case 806:
case 3089:
case 1932:
case 384:
case 1091:
case 601:
case 91:
case 1441:
case 3590:
case 1762:
case 804:
case 1102:
case 577:
case 2030:
case 386:
case 817:
case 1459:
case 3713:
case 3547:
case 3652:
case 3352:
case 477:
case 849:
case 1883:
case 1764:
case 1104:
case 1973:
case 2689:
case 1748:
case 2389:
case 1285:
case 1938:
case 2803:
case 211:
case 956:
case 2410:
case 88:
case 2371:
case 3404:
case 2182:
case 2671:
case 592:
case 3288:
case 2919:
case 23:
case 2106:
case 1897:
case 3701:
case 242:
case 1609:
case 3317:
case 1860:
case 492:
case 3617:
case 1905:
case 3022:
case 4054:
case 2628:
case 1731:
case 3339:
case 2615:
case 2513:
case 3207:
case 200:
case 1434:
case 2898:
case 2250:
case 3134:
case 773:
case 3063:
case 2273:
case 3229:
case 1012:
case 1014:
case 3566:
case 46:
case 1018:
case 2363:
case 2663:
case 3902:
case 53:
case 292:
case 2419:
case 3904:
case 411:
case 2234:
case 3493:
case 345:
case 610:
case 3150:
case 3043:
case 3986:
case 3138:
case 511:
case 2129:
case 7:
case 1600:
case 920:
case 3173:
case 796:
case 871:
case 1626:
case 360:
case 1473:
case 115:
case 1193:
case 3028:
case 2622:
case 3487:
case 1450:
case 2790:
case 3316:
case 4030:
case 785:
case 1959:
case 2767:
case 2107:
case 1594:
case 1029:
case 3212:
case 2551:
case 1263:
case 1332:
case 1632:
case 2087:
case 1334:
case 1592:
case 2200:
case 2118:
case 3842:
case 1007:
case 2596:
case 3019:
case 1222:
case 968:
case 205:
case 2093:
case 938:
case 1139:
case 4086:
case 3574:
case 2443:
case 4004:
case 1955:
case 29:
case 2619:
case 3635:
case 1228:
case 2157:
case 54:
case 1909:
case 1116:
case 1215:
case 3848:
case 2463:
case 3533:
case 3595:
case 1426:
case 3862:
case 1777:
case 176:
case 110:
case 3036:
case 2971:
case 365:
case 3693:
case 3783:
case 335:
case 3393:
case 3687:
case 2422:
case 1350:
case 925:
case 2114:
case 423:
case 1845:
case 1801:
case 3225:
case 615:
case 523:
case 3954:
case 3952:
case 218:
case 3823:
case 3491:
case 361:
case 331:
case 1540:
case 123:
case 1853:
case 3041:
case 3171:
case 31:
case 3306:
case 3606:
case 719:
case 2361:
case 3384:
case 3794:
case 1255:
case 2659:
case 984:
case 642:
case 3456:
case 66:
case 63:
case 1008:
case 3912:
case 2152:
case 132:
case 2409:
case 611:
case 90:
case 3258:
case 3890:
case 576:
case 3189:
case 2926:
case 1610:
case 870:
case 354:
case 387:
case 816:
case 1227:
case 4007:
case 1583:
case 807:
case 1385:
case 3254:
case 3925:
case 814:
case 1002:
case 3577:
case 3918:
case 3847:
case 2130:
case 1086:
case 1943:
case 2455:
case 1004:
case 1209:
case 1915:
case 2641:
case 3388:
case 22:
case 3798:
case 1637:
case 986:
case 0:
case 201:
case 1560:
case 3059:
case 1597:
case 2020:
case 2006:
case 2327:
case 623:
case 2950:
case 724:
case 2285:
case 2938:
case 3391:
case 3781:
case 1389:
case 913:
case 1799:
case 2748:
case 2459:
case 737:
case 2102:
case 767:
case 2883:
case 3420:
case 2609:
case 142:
case 2309:
case 4018:
case 1120:
case 1205:
case 16:
case 1766:
case 2897:
case 1106:
case 3821:
case 3907:
case 781:
case 632:
case 662:
case 3656:
case 1410:
case 111:
case 2723:
case 902:
case 408:
case 233:
case 1485:
case 4012:
case 508:
case 3009:
case 1936:
case 829:
case 1261:
case 259:
case 2655:
case 883:
case 4014:
case 3137:
case 2840:
case 2570:
case 3202:
case 2091:
case 2932:
case 2742:
case 2441:
case 852:
case 3027:
case 990:
case 3286:
case 3185:
case 2210:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755180001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,];
var gg_b = "1755180001/";

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
