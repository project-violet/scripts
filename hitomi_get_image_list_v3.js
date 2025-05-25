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
case 104:
case 1044:
case 2013:
case 1352:
case 2896:
case 896:
case 3787:
case 2216:
case 1507:
case 1541:
case 576:
case 1673:
case 4016:
case 2323:
case 2599:
case 2774:
case 507:
case 3789:
case 3512:
case 3105:
case 2962:
case 1718:
case 2802:
case 1448:
case 2433:
case 2935:
case 2888:
case 1221:
case 3792:
case 3628:
case 2164:
case 216:
case 2370:
case 1051:
case 937:
case 2719:
case 1469:
case 764:
case 2582:
case 383:
case 3024:
case 1420:
case 2449:
case 302:
case 625:
case 2647:
case 2601:
case 114:
case 1144:
case 1554:
case 683:
case 325:
case 3083:
case 1810:
case 1491:
case 3922:
case 920:
case 2717:
case 1467:
case 858:
case 2401:
case 1586:
case 1887:
case 771:
case 2649:
case 517:
case 1290:
case 2447:
case 3005:
case 1569:
case 2482:
case 4055:
case 2835:
case 2988:
case 1842:
case 1498:
case 2159:
case 145:
case 2862:
case 1686:
case 3690:
case 1520:
case 3331:
case 2315:
case 1906:
case 1567:
case 1866:
case 420:
case 1591:
case 2004:
case 1698:
case 570:
case 3528:
case 165:
case 1654:
case 89:
case 2157:
case 2996:
case 886:
case 2846:
case 890:
case 478:
case 2501:
case 1486:
case 1987:
case 4029:
case 3385:
case 2461:
case 2699:
case 1240:
case 3065:
case 2229:
case 3540:
case 1910:
case 2260:
case 3822:
case 749:
case 3032:
case 1441:
case 3303:
case 3766:
case 4060:
case 1407:
case 2568:
case 2661:
case 2057:
case 393:
case 3412:
case 1194:
case 2227:
case 693:
case 21:
case 3273:
case 722:
case 3775:
case 3248:
case 3742:
case 1607:
case 2104:
case 705:
case 2566:
case 854:
case 451:
case 2867:
case 3916:
case 1123:
case 1760:
case 3043:
case 2891:
case 941:
case 974:
case 1997:
case 3674:
case 2487:
case 790:
case 2211:
case 1801:
case 786:
case 1961:
case 2909:
case 1535:
case 3235:
case 3855:
case 2610:
case 2152:
case 1727:
case 347:
case 118:
case 647:
case 2030:
case 982:
case 3139:
case 1908:
case 542:
case 1226:
case 1696:
case 3680:
case 492:
case 3827:
case 2954:
case 3037:
case 3178:
case 1253:
case 869:
case 3553:
case 1755:
case 2998:
case 822:
case 805:
case 3419:
case 3617:
case 1023:
case 2606:
case 3747:
case 1602:
case 1170:
case 529:
case 2986:
case 3701:
case 913:
case 479:
case 3480:
case 2130:
case 1084:
case 1496:
case 849:
case 3860:
case 2222:
case 581:
case 1688:
case 4022:
case 2406:
case 1581:
case 3281:
case 234:
case 3417:
case 3426:
case 1899:
case 1502:
case 1115:
case 2920:
case 552:
case 1949:
case 992:
case 2809:
case 1681:
case 3782:
case 3288:
case 3453:
case 1357:
case 3580:
case 3296:
case 78:
case 3372:
case 2790:
case 796:
case 979:
case 3093:
case 3816:
case 2841:
case 3517:
case 1217:
case 2807:
case 2506:
case 3653:
case 859:
case 2394:
case 239:
case 951:
case 2510:
case 591:
case 758:
case 1635:
case 1716:
case 844:
case 474:
case 130:
case 1304:
case 2886:
case 1662:
case 2358:
case 1015:
case 524:
case 2475:
case 3193:
case 2898:
case 461:
case 864:
case 1882:
case 2442:
case 2234:
case 2712:
case 2589:
case 657:
case 1325:
case 127:
case 4034:
case 2854:
case 3927:
case 4018:
case 403:
case 285:
case 3592:
case 3721:
case 1798:
case 1622:
case 2453:
case 2955:
case 1292:
case 56:
case 3969:
case 468:
case 2202:
case 175:
case 2426:
case 540:
case 3991:
case 1422:
case 1085:
case 2171:
case 3807:
case 878:
case 490:
case 1365:
case 486:
case 2816:
case 1206:
case 54:
case 3841:
case 2517:
case 820:
case 3790:
case 1332:
case 2296:
case 2626:
case 82:
case 2929:
case 3358:
case 3587:
case 2761:
case 1411:
case 1287:
case 639:
case 1741:
case 98:
case 3510:
case 556:
case 3394:
case 779:
case 2800:
case 1210:
case 623:
case 385:
case 2574:
case 2799:
case 257:
case 1611:
case 1518:
case 323:
case 3589:
case 3442:
case 1185:
case 3666:
case 3948:
case 3898:
case 1031:
case 792:
case 3973:
case 1511:
case 1634:
case 1618:
case 163:
case 2246:
case 3211:
case 588:
case 2043:
case 101:
case 1038:
case 3410:
case 546:
case 48:
case 713:
case 3907:
case 1266:
case 1305:
case 3566:
case 3867:
case 3687:
case 1912:
case 2139:
case 3489:
case 2262:
case 3820:
case 1418:
case 247:
case 3351:
case 1179:
case 3152:
case 3610:
case 566:
case 3575:
case 3869:
case 1242:
case 3909:
case 2733:
case 111:
case 1138:
case 2143:
case 1769:
case 2419:
case 2553:
case 2178:
case 782:
case 1921:
case 3492:
case 2827:
case 2037:
case 2526:
case 2749:
case 1720:
case 1163:
case 1077:
case 2619:
case 774:
case 55:
case 2281:
case 1767:
case 2860:
case 3728:
case 990:
case 3222:
case 550:
case 2900:
case 634:
case 4081:
case 3130:
case 948:
case 2829:
case 2039:
case 3986:
case 1990:
case 2701:
case 1079:
case 458:
case 741:
case 3549:
case 2331:
case 2165:
case 2690:
case 3862:
case 1249:
case 3408:
case 4020:
case 3726:
case 905:
case 1555:
case 4069:
case 3835:
case 2269:
case 3988:
case 1919:
case 1136:
case 3608:
case 3846:
case 2811:
case 459:
case 3157:
case 3996:
case 1980:
case 2176:
case 2528:
case 1917:
case 3315:
case 4091:
case 1781:
case 2267:
case 813:
case 3881:
case 471:
case 1416:
case 2766:
case 1045:
case 3260:
case 2822:
case 2032:
case 1529:
case 2540:
case 594:
case 3699:
case 954:
case 2065:
case 3059:
case 444:
case 841:
case 3461:
case 2150:
case 310:
case 535:
case 1233:
case 1616:
case 2248:
case 1735:
case 2742:
case 3533:
case 882:
case 803:
case 31:
case 3499:
case 197:
case 1036:
case 1527:
case 2076:
case 1762:
case 1268:
case 861:
case 3568:
case 464:
case 2934:
case 3064:
case 2710:
case 306:
case 638:
case 971:
case 1516:
case 3216:
case 778:
case 606:
case 338:
case 2241:
case 1261:
case 2787:
case 3561:
case 3946:
case 3013:
case 415:
case 72:
case 2124:
case 3896:
case 1880:
case 1297:
case 4009:
case 2377:
case 3356:
case 1660:
case 3935:
case 3433:
case 1337:
case 2209:
case 3802:
case 2789:
case 3962:
case 2640:
case 1629:
case 1427:
case 1299:
case 377:
case 3323:
case 3774:
case 3599:
case 737:
case 964:
case 1874:
case 469:
case 225:
case 2254:
case 422:
case 405:
case 2024:
case 4054:
case 2834:
case 3449:
case 3647:
case 572:
case 3719:
case 1282:
case 1788:
case 3164:
case 3370:
case 892:
case 2298:
case 2521:
case 2005:
case 3780:
case 449:
case 1378:
case 2338:
case 2286:
case 959:
case 1343:
case 3401:
case 1500:
case 1655:
case 2922:
case 2083:
case 2428:
case 2357:
case 1721:
case 3292:
case 3622:
case 1969:
case 2681:
case 2219:
case 1809:
case 2588:
case 2949:
case 2502:
case 1920:
case 2899:
case 735:
case 375:
case 2700:
case 789:
case 1991:
case 3085:
case 970:
case 1506:
case 3365:
case 2217:
case 97:
case 1967:
case 2947:
case 1790:
case 4080:
case 3786:
case 850:
case 3003:
case 85:
case 2596:
case 2897:
case 2015:
case 3940:
case 1886:
case 2662:
case 3411:
case 476:
case 1466:
case 3707:
case 1642:
case 1675:
case 3210:
case 139:
case 185:
case 227:
case 653:
case 2325:
case 3534:
case 2646:
case 353:
case 3611:
case 2968:
case 407:
case 1712:
case 3103:
case 1234:
case 3709:
case 2933:
case 2435:
case 1442:
case 1948:
case 3350:
case 2882:
case 1666:
case 1898:
case 3821:
case 2961:
case 3383:
case 856:
case 3634:
case 3511:
case 1211:
case 2801:
case 1689:
case 1487:
case 2729:
case 3177:
case 976:
case 2123:
case 3038:
case 2760:
case 3266:
case 1907:
case 784:
case 3305:
case 2562:
case 3434:
case 2849:
case 2184:
case 1030:
case 343:
case 218:
case 3179:
case 1351:
case 907:
case 3324:
case 332:
case 1610:
case 3275:
case 3748:
case 2535:
case 1909:
case 632:
case 537:
case 1606:
case 2023:
case 3114:
case 2833:
case 4053:
case 311:
case 1998:
case 2253:
case 3921:
case 611:
case 195:
case 1954:
case 86:
case 2226:
case 3720:
case 2056:
case 470:
case 1406:
case 2688:
case 1052:
case 1222:
case 520:
case 47:
case 1728:
case 3522:
case 2084:
case 3840:
case 3990:
case 1986:
case 840:
case 917:
case 2364:
case 2602:
case 428:
case 1549:
case 2520:
case 1408:
case 1862:
case 1726:
case 442:
case 3371:
case 1159:
case 2498:
case 3172:
case 1753:
case 3600:
case 3555:
case 872:
case 1255:
case 2875:
case 2992:
case 2842:
case 1988:
case 1025:
case 1835:
case 1482:
case 433:
case 3145:
case 1608:
case 2094:
case 3247:
case 209:
case 1547:
case 3201:
case 1846:
case 756:
case 3980:
case 1157:
case 429:
case 265:
case 2698:
case 2228:
case 3917:
case 4028:
case 10:
case 2567:
case 1315:
case 2407:
case 798:
case 3416:
case 3072:
case 2441:
case 3045:
case 74:
case 3393:
case 3529:
case 1497:
case 2240:
case 1699:
case 2711:
case 1461:
case 4040:
case 3746:
case 740:
case 3233:
case 2641:
case 1104:
case 1533:
case 11:
case 1697:
case 3036:
case 2194:
case 760:
case 3268:
case 3762:
case 1661:
case 1057:
case 106:
case 2673:
case 1064:
case 541:
case 889:
case 2151:
case 3516:
case 3339:
case 894:
case 491:
case 138:
case 1633:
case 2507:
case 1216:
case 3261:
case 1561:
case 1946:
case 1668:
case 1597:
case 3880:
case 2352:
case 1896:
case 1013:
case 75:
case 3627:
case 2044:
case 3660:
case 2975:
case 2473:
case 2892:
case 561:
case 1433:
case 2942:
case 2509:
case 3819:
case 2448:
case 3337:
case 2212:
case 582:
case 1468:
case 3299:
case 3629:
case 1323:
case 177:
case 387:
case 3874:
case 255:
case 452:
case 2554:
case 942:
case 2889:
case 3702:
case 3208:
case 687:
case 1582:
case 1719:
case 2469:
case 2667:
case 116:
case 1164:
case 3282:
case 2330:
case 2598:
case 3455:
case 2691:
case 513:
case 3378:
case 4090:
case 1447:
case 2620:
case 746:
case 962:
case 3343:
case 1401:
case 788:
case 1981:
case 2669:
case 1717:
case 2491:
case 3655:
case 2627:
case 4061:
case 3044:
case 1440:
case 2429:
case 304:
case 3352:
case 1787:
case 3507:
case 2339:
case 3541:
case 1379:
case 762:
case 3673:
case 729:
case 2427:
case 2299:
case 2629:
case 1105:
case 1512:
case 1789:
case 3212:
case 373:
case 733:
case 3718:
case 1209:
case 3448:
case 2337:
case 1183:
case 3942:
case 3892:
case 742:
case 966:
case 1377:
case 2195:
case 3598:
case 3221:
case 3691:
case 2455:
case 1628:
case 3330:
case 1521:
case 1298:
case 2788:
case 2282:
case 2702:
case 102:
case 3420:
case 1024:
case 183:
case 3889:
case 314:
case 355:
case 3554:
case 614:
case 4008:
case 287:
case 3810:
case 586:
case 2500:
case 590:
case 3491:
case 3669:
case 3467:
case 1706:
case 440:
case 3290:
case 3620:
case 548:
case 2378:
case 1132:
case 2919:
case 3842:
case 1269:
case 960:
case 3498:
case 345:
case 1050:
case 1690:
case 3686:
case 1165:
case 94:
case 1267:
case 2781:
case 2917:
case 3866:
case 3722:
case 3698:
case 3228:
case 3591:
case 817:
case 1528:
case 940:
case 1621:
case 4047:
case 998:
case 365:
case 558:
case 4001:
case 2136:
case 665:
case 2247:
case 488:
case 1065:
case 3240:
case 2393:
case 1540:
case 2560:
case 1032:
case 580:
case 1822:
case 956:
case 2045:
case 2416:
case 1766:
case 446:
case 3441:
case 3609:
case 1934:
case 1412:
case 2762:
case 1076:
case 2036:
case 319:
case 2826:
case 2853:
case 3573:
case 752:
case 3607:
case 1742:
case 2735:
case 3409:
case 3641:
case 2305:
case 421:
case 824:
case 1078:
case 571:
case 3123:
case 201:
case 717:
case 2828:
case 167:
case 544:
case 1395:
case 2177:
case 3801:
case 1137:
case 3961:
case 2634:
case 2618:
case 3847:
case 891:
case 3535:
case 1733:
case 2242:
case 1855:
case 4042:
case 2275:
case 2324:
case 3727:
case 147:
case 1474:
case 618:
case 3070:
case 3999:
case 3184:
case 2434:
case 1768:
case 318:
case 3562:
case 2912:
case 972:
case 2720:
case 2163:
case 1680:
case 3226:
case 1526:
case 2921:
case 1553:
case 2769:
case 2114:
case 3023:
case 776:
case 3364:
case 336:
case 608:
case 3602:
case 1701:
case 2079:
case 1039:
case 2840:
case 1829:
case 3496:
case 1480:
case 308:
case 2791:
case 2522:
case 3581:
case 3313:
case 3688:
case 2767:
case 1417:
case 3899:
case 3115:
case 522:
case 569:
case 3681:
case 3219:
case 3588:
case 1782:
case 1336:
case 2292:
case 1453:
case 2376:
case 2622:
case 1955:
case 842:
case 499:
case 3897:
case 1626:
case 2003:
case 3280:
case 2332:
case 3901:
case 549:
case 1345:
case 881:
case 1517:
case 1816:
case 2365:
case 1171:
case 829:
case 2085:
case 862:
case 3359:
case 3700:
case 4006:
case 2422:
case 1653:
case 2210:
case 1960:
case 921:
case 4010:
case 3446:
case 2287:
case 1761:
case 3662:
case 770:
case 63:
case 3304:
case 554:
case 1929:
case 630:
case 4087:
case 3015:
case 1797:
case 1193:
case 1071:
case 2185:
case 3462:
case 2103:
case 627:
case 2518:
case 253:
case 3646:
case 2611:
case 3968:
case 157:
case 1574:
case 1927:
case 327:
case 1066:
case 28:
case 651:
case 351:
case 2243:
case 3631:
case 1732:
case 3390:
case 4078:
case 2804:
case 1238:
case 280:
case 1765:
case 1944:
case 189:
case 1894:
case 467:
case 1042:
case 2382:
case 597:
case 3230:
case 447:
case 1776:
case 3876:
case 4037:
case 2556:
case 3111:
case 1309:
case 2237:
case 2146:
case 3685:
case 1166:
case 1951:
case 2523:
case 1279:
case 4039:
case 2859:
case 3579:
case 379:
case 1341:
case 2239:
case 2584:
case 1307:
case 1142:
case 2135:
case 2361:
case 3983:
case 1552:
case 2081:
case 3758:
case 3252:
case 1348:
case 2684:
case 2333:
case 268:
case 2456:
case 172:
case 1110:
case 1652:
case 3751:
case 1092:
case 248:
case 1203:
case 2484:
case 2096:
case 3134:
case 1844:
case 1189:
case 199:
case 3479:
case 1958:
case 2795:
case 2623:
case 1006:
case 2864:
case 4093:
case 286:
case 3585:
case 290:
case 2301:
case 3932:
case 341:
case 2188:
case 2347:
case 641:
case 1192:
case 1630:
case 1087:
case 674:
case 967:
case 3744:
case 2670:
case 3463:
case 2349:
case 3614:
case 1320:
case 361:
case 1231:
case 2271:
case 795:
case 1851:
case 81:
case 1089:
case 3824:
case 2957:
case 3018:
case 3034:
case 603:
case 2470:
case 682:
case 947:
case 3636:
case 2544:
case 1108:
case 70:
case 1513:
case 3715:
case 1459:
case 2154:
case 626:
case 2041:
case 3472:
case 3893:
case 2198:
case 3016:
case 326:
case 3264:
case 1182:
case 1970:
case 3436:
case 3353:
case 993:
case 1659:
case 1457:
case 2930:
case 553:
case 3100:
case 3672:
case 1771:
case 1604:
case 1362:
case 2107:
case 1425:
case 895:
case 16:
case 1082:
case 2375:
case 1197:
case 269:
case 1008:
case 222:
case 2054:
case 402:
case 483:
case 4024:
case 710:
case 1335:
case 2109:
case 2785:
case 1404:
case 2458:
case 2952:
case 1295:
case 2086:
case 4005:
case 2205:
case 198:
case 1984:
case 431:
case 2703:
case 3695:
case 2451:
case 511:
case 3160:
case 337:
case 777:
case 637:
case 925:
case 3129:
case 902:
case 983:
case 2777:
case 2020:
case 3756:
case 2830:
case 4050:
case 1049:
case 3878:
case 2173:
case 3993:
case 3495:
case 2387:
case 150:
case 2148:
case 1133:
case 62:
case 3784:
case 738:
case 1047:
case 1001:
case 2594:
case 2779:
case 3127:
case 931:
case 839:
case 3259:
case 1559:
case 563:
case 2120:
case 1413:
case 2763:
case 3029:
case 2444:
case 912:
case 271:
case 1245:
case 146:
case 3545:
case 1743:
case 3155:
case 2852:
case 1396:
case 1068:
case 1557:
case 3257:
case 2644:
case 264:
case 3536:
case 4076:
case 3770:
case 1613:
case 1147:
case 823:
case 532:
case 1302:
case 1823:
case 2191:
case 2048:
case 1424:
case 3020:
case 2756:
case 3777:
case 3250:
case 3389:
case 1334:
case 1318:
case 133:
case 2374:
case 916:
case 3451:
case 3069:
case 359:
case 2127:
case 3310:
case 1624:
case 1863:
case 1903:
case 40:
case 220:
case 1985:
case 181:
case 1483:
case 1838:
case 1814:
case 3387:
case 3148:
case 3067:
case 2993:
case 4004:
case 2878:
case 0:
case 22:
case 1752:
case 2380:
case 3852:
case 671:
case 938:
case 2572:
case 3169:
case 731:
case 344:
case 1040:
case 4059:
case 2317:
case 3763:
case 3120:
case 3306:
case 1565:
case 644:
case 1879:
case 2259:
case 857:
case 1128:
case 2971:
case 410:
case 3073:
case 2536:
case 2027:
case 4057:
case 2837:
case 977:
case 2257:
case 3392:
case 1730:
case 3276:
case 191:
case 226:
case 2264:
case 438:
case 1432:
case 3041:
case 4064:
case 3198:
case 2978:
case 867:
case 654:
case 3154:
case 1322:
case 1244:
case 2715:
case 124:
case 2636:
case 615:
case 8:
case 1803:
case 2645:
case 3731:
case 910:
case 2326:
case 2672:
case 2353:
case 477:
case 1012:
case 1190:
case 1665:
case 3342:
case 1450:
case 3054:
case 2937:
case 3694:
case 369:
case 322:
case 152:
case 3658:
case 1251:
case 1021:
case 793:
case 3141:
case 416:
case 3098:
case 649:
case 1650:
case 3703:
case 2939:
case 1090:
case 3086:
case 3494:
case 1979:
case 3458:
case 3109:
case 1583:
case 1019:
case 1327:
case 3088:
case 3925:
case 2477:
case 514:
case 3456:
case 668:
case 995:
case 368:
case 2950:
case 1639:
case 390:
case 3864:
case 2585:
case 3623:
case 686:
case 767:
case 934:
case 39:
case 690:
case 117:
case 1360:
case 2677:
case 1637:
case 7:
case 2503:
case 348:
case 3484:
case 2118:
case 3515:
case 2463:
case 2965:
case 1713:
case 2744:
case 2805:
case 3959:
case 1895:
case 1972:
case 2414:
case 3188:
case 1443:
case 1119:
case 2932:
case 1936:
case 3470:
case 1074:
case 107:
case 573:
case 203:
case 1180:
case 3196:
case 1678:
case 3271:
case 1117:
case 3349:
case 2638:
case 2531:
case 893:
case 1759:
case 1126:
case 3913:
case 3804:
case 380:
case 3745:
case 2514:
case 3964:
case 2631:
case 396:
case 1578:
case 1153:
case 3772:
case 680:
case 3278:
case 2230:
case 3062:
case 3736:
case 4030:
case 3382:
case 2431:
case 3308:
case 2122:
case 3035:
case 3825:
case 757:
case 1725:
case 825:
case 1693:
case 2312:
case 802:
case 2685:
case 545:
case 1537:
case 3857:
case 292:
case 2577:
case 2876:
case 1872:
case 2252:
case 3081:
case 434:
case 2485:
case 3361:
case 2983:
case 2022:
case 2832:
case 3584:
case 128:
case 3162:
case 1539:
case 2579:
case 2794:
case 3859:
case 658:
case 1830:
case 2049:
case 1777:
case 987:
case 2737:
case 3605:
case 1250:
case 1389:
case 773:
case 3334:
case 633:
case 2525:
case 1069:
case 1451:
case 2001:
case 329:
case 3294:
case 362:
case 629:
case 3863:
case 3814:
case 1148:
case 250:
case 1091:
case 2504:
case 704:
case 1558:
case 25:
case 1651:
case 1067:
case 1173:
case 2396:
case 2272:
case 5:
case 83:
case 3532:
case 1169:
case 830:
case 2245:
case 1714:
case 1738:
case 3040:
case 1265:
case 144:
case 1306:
case 2149:
case 1120:
case 2413:
case 2559:
case 3879:
case 827:
case 714:
case 1167:
case 2147:
case 547:
case 2613:
case 2388:
case 2101:
case 497:
case 1276:
case 2856:
case 3730:
case 1392:
case 4036:
case 3914:
case 3938:
case 3885:
case 709:
case 3432:
case 1198:
case 765:
case 1041:
case 3121:
case 115:
case 3676:
case 3322:
case 1154:
case 324:
case 3803:
case 1544:
case 3632:
case 818:
case 1009:
case 745:
case 1930:
case 2457:
case 2659:
case 3476:
case 2970:
case 2099:
case 652:
case 105:
case 1054:
case 2008:
case 1694:
case 2197:
case 2956:
case 1375:
case 352:
case 3524:
case 719:
case 1658:
case 26:
case 3251:
case 2425:
case 3021:
case 3831:
case 1098:
case 260:
case 1141:
case 3112:
case 1366:
case 2984:
case 2815:
case 2199:
case 1494:
case 149:
case 808:
case 1952:
case 2625:
case 1283:
case 4095:
case 3311:
case 1785:
case 1109:
case 2092:
case 718:
case 1368:
case 3327:
case 3019:
case 1088:
case 2652:
case 1456:
case 2373:
case 272:
case 583:
case 1002:
case 525:
case 168:
case 1684:
case 2348:
case 3639:
case 190:
case 2285:
case 186:
case 1864:
case 2006:
case 1623:
case 3017:
case 2958:
case 865:
case 3593:
case 317:
case 3360:
case 1656:
case 3174:
case 531:
case 2994:
case 299:
case 2705:
case 284:
case 3637:
case 1096:
case 3080:
case 1813:
case 148:
case 2203:
case 512:
case 1102:
case 963:
case 2630:
case 1959:
case 2192:
case 708:
case 736:
case 2010:
case 3443:
case 3945:
case 2369:
case 453:
case 3936:
case 3074:
case 1470:
case 2430:
case 2089:
case 943:
case 4031:
case 2851:
case 819:
case 1271:
case 932:
case 2231:
case 3643:
case 2106:
case 289:
case 4063:
case 3126:
case 3300:
case 463:
case 294:
case 2765:
case 1913:
case 1415:
case 221:
case 1745:
case 180:
case 2238:
case 2386:
case 196:
case 1278:
case 1772:
case 804:
case 4014:
case 2858:
case 4038:
case 2066:
case 1570:
case 873:
case 1308:
case 235:
case 3725:
case 1399:
case 727:
case 2951:
case 3693:
case 3026:
case 3537:
case 1146:
case 1237:
case 975:
case 2277:
case 1556:
case 1857:
case 37:
case 670:
case 3995:
case 1081:
case 1397:
case 1361:
case 3704:
case 370:
case 3845:
case 158:
case 1239:
case 3316:
case 1162:
case 328:
case 2341:
case 3284:
case 628:
case 2279:
case 2153:
case 3066:
case 3858:
case 1631:
case 1514:
case 3238:
case 3214:
case 1390:
case 3732:
case 2543:
case 3386:
case 689:
case 3944:
case 3263:
case 3894:
case 2126:
case 389:
case 2300:
case 694:
case 2759:
case 3042:
case 335:
case 51:
case 635:
case 3075:
case 1850:
case 927:
case 3530:
case 4070:
case 3776:
case 3398:
case 1230:
case 192:
case 2836:
case 4056:
case 2026:
case 2537:
case 1685:
case 753:
case 2053:
case 3166:
case 2693:
case 887:
case 1579:
case 4084:
case 436:
case 2316:
case 1905:
case 3307:
case 270:
case 1022:
case 500:
case 3552:
case 1252:
case 50:
case 1758:
case 2995:
case 2639:
case 3348:
case 2437:
case 3724:
case 732:
case 372:
case 3373:
case 516:
case 2327:
case 3092:
case 743:
case 1118:
case 3203:
case 3844:
case 3705:
case 1503:
case 2637:
case 699:
case 1479:
case 684:
case 936:
case 3994:
case 1677:
case 399:
case 2360:
case 2017:
case 2329:
case 1340:
case 2593:
case 1585:
case 3783:
case 763:
case 3285:
case 2119:
case 1438:
case 2764:
case 3010:
case 1414:
case 276:
case 141:
case 538:
case 3192:
case 2478:
case 2895:
case 1328:
case 3630:
case 43:
case 2215:
case 174:
case 1805:
case 1744:
case 3367:
case 1965:
case 2713:
case 3106:
case 161:
case 3320:
case 2117:
case 2571:
case 897:
case 3089:
case 1034:
case 1018:
case 1824:
case 103:
case 427:
case 711:
case 577:
case 2936:
case 3108:
case 1636:
case 2963:
case 3061:
case 404:
case 2676:
case 2322:
case 656:
case 2121:
case 1016:
case 1893:
case 2432:
case 1264:
case 539:
case 126:
case 1445:
case 356:
case 2938:
case 2885:
case 919:
case 3099:
case 523:
case 2476:
case 1672:
case 3771:
case 1645:
case 3362:
case 3604:
case 2021:
case 4051:
case 2831:
case 2251:
case 3923:
case 3425:
case 3082:
case 660:
case 3197:
case 3956:
case 455:
case 2977:
case 1937:
case 811:
case 414:
case 3346:
case 2583:
case 340:
case 3404:
case 1595:
case 3295:
case 3625:
case 2979:
case 2090:
case 909:
case 698:
case 2112:
case 2650:
case 1225:
case 1695:
case 1374:
case 1723:
case 137:
case 1160:
case 2683:
case 2334:
case 3737:
case 2550:
case 595:
case 2140:
case 1129:
case 3049:
case 242:
case 1756:
case 2424:
case 445:
case 12:
case 2752:
case 1878:
case 1495:
case 65:
case 2814:
case 2028:
case 3133:
case 281:
case 2405:
case 3739:
case 3168:
case 1784:
case 4094:
case 3047:
case 229:
case 3001:
case 2879:
case 3559:
case 688:
case 2565:
case 3149:
case 3915:
case 388:
case 1839:
case 3464:
case 1060:
case 3743:
case 1545:
case 1572:
case 3778:
case 3557:
case 2730:
case 1837:
case 1027:
case 1536:
case 1319:
case 3147:
case 3613:
case 1770:
case 3388:
case 853:
case 366:
case 666:
case 3033:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748178002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,];
var gg_b = "1748178002/";

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
