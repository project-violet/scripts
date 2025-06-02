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
case 926:
case 892:
case 2163:
case 1727:
case 803:
case 1068:
case 2984:
case 2881:
case 2321:
case 2551:
case 715:
case 984:
case 232:
case 255:
case 4058:
case 3602:
case 801:
case 74:
case 1846:
case 1878:
case 680:
case 3316:
case 3659:
case 3547:
case 4017:
case 1569:
case 3398:
case 1828:
case 3494:
case 1484:
case 829:
case 20:
case 1388:
case 3570:
case 2976:
case 1125:
case 2504:
case 1149:
case 3520:
case 2599:
case 2926:
case 2678:
case 1175:
case 2646:
case 1532:
case 369:
case 3792:
case 1782:
case 2948:
case 1681:
case 516:
case 3911:
case 1476:
case 2257:
case 459:
case 2098:
case 3964:
case 2535:
case 2296:
case 302:
case 1344:
case 2543:
case 2785:
case 2218:
case 1740:
case 3183:
case 307:
case 1108:
case 617:
case 1765:
case 2661:
case 266:
case 572:
case 289:
case 3846:
case 1955:
case 577:
case 1409:
case 1659:
case 2197:
case 3828:
case 1398:
case 828:
case 490:
case 3303:
case 2368:
case 2464:
case 3149:
case 703:
case 797:
case 2723:
case 2411:
case 3175:
case 2773:
case 2859:
case 4080:
case 243:
case 3532:
case 368:
case 2110:
case 169:
case 84:
case 3681:
case 2719:
case 1814:
case 13:
case 3476:
case 2286:
case 4042:
case 500:
case 241:
case 729:
case 107:
case 3740:
case 1183:
case 2795:
case 1805:
case 3193:
case 3221:
case 2180:
case 198:
case 2648:
case 1129:
case 3271:
case 2236:
case 736:
case 2978:
case 1207:
case 3732:
case 363:
case 78:
case 2298:
case 4030:
case 248:
case 3582:
case 944:
case 3664:
case 1884:
case 3894:
case 327:
case 304:
case 2353:
case 665:
case 3809:
case 3611:
case 1374:
case 640:
case 1478:
case 823:
case 1747:
case 1066:
case 2684:
case 906:
case 2562:
case 867:
case 346:
case 535:
case 557:
case 1268:
case 821:
case 234:
case 1000:
case 1501:
case 3396:
case 3959:
case 3655:
case 3357:
case 4056:
case 3577:
case 199:
case 1221:
case 3133:
case 2585:
case 3179:
case 1540:
case 1271:
case 794:
case 2855:
case 2491:
case 3207:
case 1631:
case 3113:
case 2288:
case 1732:
case 163:
case 2715:
case 721:
case 1582:
case 104:
case 127:
case 3770:
case 1894:
case 3324:
case 3428:
case 3884:
case 3720:
case 3478:
case 2799:
case 520:
case 1991:
case 1809:
case 709:
case 2137:
case 3066:
case 3747:
case 2811:
case 275:
case 4063:
case 1106:
case 2905:
case 283:
case 2203:
case 3876:
case 2831:
case 1318:
case 460:
case 574:
case 1414:
case 939:
case 445:
case 1053:
case 2117:
case 2024:
case 1959:
case 1396:
case 3501:
case 3386:
case 88:
case 2751:
case 2158:
case 3565:
case 1405:
case 1527:
case 1160:
case 2410:
case 1351:
case 1806:
case 778:
case 1020:
case 980:
case 1571:
case 2837:
case 3922:
case 3475:
case 3032:
case 1467:
case 684:
case 2164:
case 2757:
case 2858:
case 2430:
case 2588:
case 1483:
case 408:
case 3148:
case 3680:
case 2738:
case 2967:
case 2131:
case 157:
case 3126:
case 550:
case 626:
case 135:
case 3012:
case 81:
case 2332:
case 1315:
case 2890:
case 3845:
case 1956:
case 642:
case 1700:
case 320:
case 1658:
case 3753:
case 3879:
case 2503:
case 1194:
case 2497:
case 1335:
case 3201:
case 2544:
case 976:
case 1227:
case 2908:
case 1152:
case 3069:
case 2606:
case 1766:
case 2099:
case 3020:
case 779:
case 2295:
case 462:
case 3930:
case 3070:
case 174:
case 2536:
case 3240:
case 1642:
case 2993:
case 2613:
case 1475:
case 2219:
case 423:
case 4091:
case 1425:
case 3467:
case 1032:
case 3282:
case 1680:
case 1148:
case 2629:
case 2645:
case 2347:
case 2925:
case 2239:
case 2223:
case 357:
case 1254:
case 917:
case 2975:
case 1012:
case 2273:
case 2043:
case 2422:
case 335:
case 3997:
case 3617:
case 4059:
case 878:
case 563:
case 522:
case 120:
case 2262:
case 2550:
case 2320:
case 1829:
case 2463:
case 1753:
case 851:
case 2487:
case 561:
case 3109:
case 205:
case 3343:
case 1963:
case 3227:
case 71:
case 25:
case 3047:
case 3766:
case 1069:
case 3152:
case 745:
case 27:
case 2102:
case 1319:
case 1917:
case 1697:
case 871:
case 3825:
case 1395:
case 644:
case 3687:
case 1867:
case 300:
case 2906:
case 1460:
case 2750:
case 1373:
case 1883:
case 2608:
case 2830:
case 2458:
case 1553:
case 3269:
case 2392:
case 1161:
case 2417:
case 3065:
case 858:
case 1114:
case 1270:
case 1362:
case 230:
case 1220:
case 372:
case 3232:
case 687:
case 3942:
case 1808:
case 2683:
case 2798:
case 3433:
case 682:
case 638:
case 2716:
case 1082:
case 2897:
case 1707:
case 2667:
case 890:
case 2365:
case 3980:
case 3721:
case 2301:
case 2856:
case 759:
case 3212:
case 219:
case 1610:
case 154:
case 3413:
case 3319:
case 4055:
case 3406:
case 1566:
case 1385:
case 2340:
case 3395:
case 1849:
case 100:
case 2251:
case 2744:
case 3134:
case 790:
case 1001:
case 3883:
case 3339:
case 3768:
case 3247:
case 2822:
case 3937:
case 2382:
case 3114:
case 1065:
case 859:
case 2095:
case 570:
case 464:
case 2181:
case 172:
case 2913:
case 492:
case 1942:
case 3808:
case 1445:
case 2480:
case 2538:
case 403:
case 1433:
case 639:
case 3082:
case 2675:
case 2377:
case 1092:
case 1128:
case 2887:
case 429:
case 2557:
case 2327:
case 914:
case 785:
case 2596:
case 2929:
case 3610:
case 1212:
case 218:
case 1980:
case 2073:
case 1721:
case 758:
case 2979:
case 2518:
case 1146:
case 354:
case 1771:
case 1054:
case 3719:
case 1257:
case 1098:
case 1172:
case 901:
case 2476:
case 3286:
case 2512:
case 341:
case 1296:
case 929:
case 1785:
case 2193:
case 2149:
case 3464:
case 1504:
case 61:
case 1036:
case 645:
case 1926:
case 3773:
case 3859:
case 2007:
case 1646:
case 1238:
case 1948:
case 2782:
case 3110:
case 964:
case 3762:
case 188:
case 847:
case 3156:
case 389:
case 3274:
case 155:
case 132:
case 842:
case 4060:
case 137:
case 3224:
case 3634:
case 679:
case 2569:
case 731:
case 2878:
case 3197:
case 2388:
case 79:
case 1371:
case 519:
case 3891:
case 1881:
case 3122:
case 2861:
case 2691:
case 3172:
case 747:
case 3296:
case 3218:
case 207:
case 293:
case 1130:
case 3036:
case 2071:
case 2167:
case 2931:
case 1723:
case 3504:
case 2021:
case 2350:
case 1859:
case 1773:
case 3515:
case 143:
case 833:
case 1110:
case 286:
case 1274:
case 2452:
case 2602:
case 166:
case 388:
case 1762:
case 94:
case 1224:
case 784:
case 2955:
case 678:
case 2659:
case 2398:
case 3187:
case 653:
case 2494:
case 1307:
case 1605:
case 1455:
case 2108:
case 726:
case 1614:
case 440:
case 1003:
case 465:
case 3984:
case 3881:
case 3050:
case 3321:
case 3551:
case 513:
case 2876:
case 3831:
case 3117:
case 2501:
case 2000:
case 2826:
case 2386:
case 671:
case 2565:
case 381:
case 396:
case 3459:
case 3137:
case 658:
case 3961:
case 2066:
case 685:
case 3609:
case 511:
case 673:
case 3914:
case 3694:
case 1684:
case 3652:
case 375:
case 250:
case 3402:
case 1562:
case 76:
case 1341:
case 383:
case 2268:
case 3203:
case 838:
case 1057:
case 2113:
case 921:
case 412:
case 2446:
case 2592:
case 1216:
case 887:
case 2554:
case 2428:
case 2374:
case 2720:
case 2478:
case 3799:
case 1789:
case 1096:
case 3190:
case 994:
case 1648:
case 298:
case 3743:
case 3585:
case 2179:
case 806:
case 1236:
case 1946:
case 3855:
case 1038:
case 3491:
case 2207:
case 1928:
case 1676:
case 962:
case 334:
case 476:
case 1751:
case 1244:
case 2461:
case 782:
case 2396:
case 2655:
case 2357:
case 2527:
case 32:
case 2902:
case 2160:
case 1609:
case 2338:
case 2769:
case 1137:
case 1459:
case 3684:
case 1864:
case 495:
case 1694:
case 1402:
case 1652:
case 3250:
case 3341:
case 2582:
case 2852:
case 3216:
case 2894:
case 204:
case 3353:
case 2809:
case 2991:
case 1300:
case 3096:
case 2221:
case 261:
case 505:
case 2041:
case 2540:
case 3946:
case 1855:
case 3595:
case 86:
case 4049:
case 1491:
case 4025:
case 3481:
case 3626:
case 4075:
case 936:
case 810:
case 2631:
case 3928:
case 3487:
case 1544:
case 1312:
case 2637:
case 1908:
case 2227:
case 945:
case 960:
case 35:
case 2766:
case 91:
case 2277:
case 692:
case 1606:
case 2152:
case 1456:
case 46:
case 2315:
case 410:
case 3262:
case 3320:
case 3550:
case 3051:
case 1890:
case 3774:
case 1503:
case 2408:
case 3463:
case 2304:
case 1155:
case 2658:
case 1430:
case 2483:
case 1588:
case 3598:
case 3679:
case 2860:
case 3633:
case 4046:
case 1738:
case 1369:
case 3629:
case 3516:
case 3645:
case 2910:
case 3347:
case 2690:
case 111:
case 3925:
case 3949:
case 3239:
case 717:
case 4078:
case 3035:
case 712:
case 3043:
case 3422:
case 4028:
case 235:
case 252:
case 3099:
case 2521:
case 2806:
case 2351:
case 2020:
case 1796:
case 1410:
case 979:
case 113:
case 2930:
case 2070:
case 3536:
case 1718:
case 3004:
case 3613:
case 1:
case 1837:
case 52:
case 1164:
case 1757:
case 2467:
case 3015:
case 4061:
case 1487:
case 2184:
case 2201:
case 4014:
case 105:
case 15:
case 1842:
case 812:
case 2069:
case 3606:
case 487:
case 817:
case 2987:
case 3332:
case 3890:
case 1051:
case 795:
case 2829:
case 2389:
case 1262:
case 3660:
case 220:
case 1724:
case 2753:
case 2879:
case 406:
case 3155:
case 1645:
case 1516:
case 1347:
case 2292:
case 2680:
case 1633:
case 3967:
case 583:
case 2254:
case 1925:
case 1239:
case 444:
case 1043:
case 575:
case 2012:
case 3796:
case 953:
case 1786:
case 1993:
case 1613:
case 3718:
case 3:
case 3285:
case 313:
case 596:
case 2922:
case 2972:
case 3164:
case 2449:
case 64:
case 2082:
case 4076:
case 3675:
case 1667:
case 2707:
case 4026:
case 1897:
case 3557:
case 3929:
case 1301:
case 973:
case 2990:
case 119:
case 318:
case 3073:
case 3933:
case 3979:
case 958:
case 714:
case 3023:
case 985:
case 1736:
case 3442:
case 2541:
case 2040:
case 840:
case 2270:
case 3204:
case 865:
case 3299:
case 588:
case 130:
case 2362:
case 555:
case 1191:
case 3693:
case 3215:
case 2630:
case 971:
case 2808:
case 1716:
case 1490:
case 3480:
case 3538:
case 1574:
case 662:
case 2460:
case 2105:
case 1524:
case 2323:
case 1458:
case 2883:
case 2339:
case 2768:
case 431:
case 2247:
case 3822:
case 3382:
case 694:
case 623:
case 1810:
case 609:
case 756:
case 216:
case 3340:
case 2917:
case 2697:
case 3251:
case 49:
case 621:
case 2134:
case 1675:
case 1649:
case 1625:
case 1557:
case 3667:
case 3365:
case 2980:
case 1243:
case 118:
case 2721:
case 3856:
case 3301:
case 319:
case 442:
case 1023:
case 2146:
case 3736:
case 1979:
case 1204:
case 1095:
case 330:
case 589:
case 3289:
case 1299:
case 2232:
case 1863:
case 2942:
case 1913:
case 2479:
case 1693:
case 3798:
case 1019:
case 2433:
case 1538:
case 3716:
case 2001:
case 2500:
case 125:
case 3608:
case 4052:
case 1822:
case 3392:
case 484:
case 814:
case 1872:
case 543:
case 2566:
case 740:
case 608:
case 3102:
case 3810:
case 1340:
case 2849:
case 2385:
case 1744:
case 541:
case 1251:
case 2875:
case 1062:
case 3437:
case 501:
case 3037:
case 1462:
case 1965:
case 1815:
case 700:
case 3647:
case 3559:
case 648:
case 1901:
case 2709:
case 529:
case 2794:
case 3379:
case 1804:
case 3124:
case 597:
case 190:
case 2962:
case 1843:
case 3297:
case 854:
case 2651:
case 1581:
case 2973:
case 2033:
case 1851:
case 1731:
case 2923:
case 777:
case 816:
case 62:
case 2225:
case 2079:
case 1612:
case 3982:
case 2643:
case 4071:
case 1138:
case 4021:
case 2358:
case 2528:
case 1423:
case 2919:
case 2699:
case 1473:
case 2578:
case 493:
case 2995:
case 1632:
case 2546:
case 2317:
case 1196:
case 185:
case 359:
case 158:
case 1502:
case 256:
case 877:
case 4068:
case 2208:
case 872:
case 649:
case 1889:
case 2534:
case 2380:
case 1647:
case 1345:
case 3899:
case 1559:
case 3804:
case 2427:
case 3755:
case 925:
case 2505:
case 1124:
case 2477:
case 3843:
case 390:
case 1174:
case 1297:
case 1313:
case 3851:
case 681:
case 1090:
case 1591:
case 3581:
case 4007:
case 3731:
case 3954:
case 2748:
case 1982:
case 3138:
case 371:
case 1210:
case 3495:
case 2440:
case 3764:
case 3439:
case 683:
case 3272:
case 3042:
case 3360:
case 3711:
case 3222:
case 1620:
case 3632:
case 2283:
case 918:
case 2482:
case 385:
case 1415:
case 353:
case 774:
case 1136:
case 1862:
case 3682:
case 378:
case 9:
case 280:
case 2229:
case 179:
case 3290:
case 1912:
case 2935:
case 499:
case 1308:
case 2107:
case 2623:
case 3010:
case 655:
case 632:
case 2673:
case 688:
case 4041:
case 1443:
case 427:
case 1022:
case 2412:
case 1435:
case 422:
case 3640:
case 2397:
case 1198:
case 2213:
case 1791:
case 463:
case 3920:
case 2904:
case 2093:
case 3030:
case 3531:
case 446:
case 1063:
case 521:
case 3947:
case 2761:
case 3103:
case 3349:
case 2705:
case 1367:
case 720:
case 295:
case 2951:
case 2469:
case 3144:
case 3056:
case 2734:
case 1873:
case 3217:
case 1383:
case 2854:
case 1823:
case 523:
case 562:
case 2662:
case 145:
case 567:
case 852:
case 3097:
case 3258:
case 11:
case 2746:
case 153:
case 3415:
case 3136:
case 2171:
case 3692:
case 3912:
case 1290:
case 3862:
case 1682:
case 820:
case 3404:
case 3308:
case 666:
case 3499:
case 1511:
case 689:
case 3435:
case 151:
case 3443:
case 3022:
case 2387:
case 2685:
case 3932:
case 1640:
case 752:
case 1781:
case 212:
case 2989:
case 1030:
case 1531:
case 1970:
case 450:
case 58:
case 1947:
case 3601:
case 1237:
case 3969:
case 641:
case 3451:
case 1103:
case 3895:
case 1555:
case 3150:
case 2206:
case 1677:
case 1375:
case 508:
case 2447:
case 2509:
case 2594:
case 643:
case 1217:
case 3839:
case 2322:
case 536:
case 360:
case 3702:
case 1097:
case 2372:
case 1258:
case 2793:
case 2140:
case 123:
case 3195:
case 761:
case 2986:
case 3438:
case 3334:
case 850:
case 1264:
case 51:
case 162:
case 560:
case 121:
case 3496:
case 2182:
case 948:
case 4012:
case 3418:
case 763:
case 244:
case 3542:
case 1671:
case 722:
case 3173:
case 109:
case 2775:
case 3305:
case 704:
case 3123:
case 727:
case 1231:
case 3139:
case 2749:
case 3797:
case 206:
case 619:
case 1953:
case 2924:
case 2871:
case 2974:
case 3162:
case 1059:
case 2506:
case 238:
case 579:
case 4069:
case 2005:
case 630:
case 2560:
case 2061:
case 92:
case 1328:
case 2603:
case 1888:
case 3668:
case 2127:
case 3803:
case 394:
case 1195:
case 1730:
case 2918:
case 2698:
case 2579:
case 798:
case 1438:
case 1580:
case 1850:
case 3590:
case 2359:
case 367:
case 625:
case 3722:
case 1119:
case 3486:
case 2078:
case 457:
case 321:
case 1710:
case 1361:
case 1496:
case 2513:
case 18:
case 3844:
case 2226:
case 2154:
case 2767:
case 1607:
case 861:
case 899:
case 2807:
case 3002:
case 618:
case 3537:
case 975:
case 3255:
case 3953:
case 210:
case 1162:
case 983:
case 578:
case 863:
case 3517:
case 804:
case 1966:
case 1816:
case 3763:
case 1668:
case 3328:
case 996:
case 2165:
case 226:
case 1202:
case 2508:
case 400:
case 3758:
case 2234:
case 2944:
case 611:
case 585:
case 3717:
case 1055:
case 2841:
case 284:
case 2094:
case 1886:
case 770:
case 3666:
case 1556:
case 315:
case 3587:
case 4001:
case 2214:
case 1348:
case 2052:
case 1444:
case 3737:
case 2261:
case 90:
case 1189:
case 3281:
case 590:
case 3199:
case 3104:
case 2170:
case 2567:
case 103:
case 477:
case 791:
case 769:
case 164:
case 2471:
case 1064:
case 247:
case 73:
case 3352:
case 242:
case 4054:
case 1384:
case 1031:
case 2779:
case 3498:
case 1921:
case 3309:
case 2733:
case 3143:
case 3135:
case 3790:
case 2745:
case 1450:
case 1838:
case 2311:
case 3653:
case 29:
case 2364:
case 3403:
case 1563:
case 3259:
case 1151:
case 559:
case 416:
case 886:
case 869:
case 233:
case 891:
case 3376:
case 966:
case 989:
case 4077:
case 1896:
case 3326:
case 2950:
case 3886:
case 802:
case 3597:
case 1737:
case 893:
case 231:
case 3348:
case 3444:
case 2169:
case 392:
case 1281:
case 3189:
case 3291:
case 397:
case 2657:
case 1104:
case 65:
case 2525:
case 943:
case 605:
case 3011:
case 3510:
case 2696:
case 768:
case 2866:
case 4040:
case 2998:
case 3064:
case 364:
case 1572:
case 870:
case 1352:
case 454:
case 2278:
case 1394:
case 3971:
case 3530:
case 3031:
case 2246:
case 3384:
case 941:
case 2112:
case 3874:
case 1416:
case 1143:
case 2026:
case 2800:
case 1013:
case 1604:
case 2439:
case 2157:
case 2423:
case 1358:
case 1528:
case 2272:
case 2711:
case 3689:
case 2473:
case 1699:
case 3847:
case 2222:
case 2632:
case 1546:
case 1293:
case 3985:
case 258:
case 3482:
case 718:
case 954:
case 285:
case 1492:
case 2306:
case 2851:
case 2080:
case 1033:
case 1249:
case 1079:
case 1225:
case 1939:
case 3776:
case 2731:
case 2954:
case 3141:
case 3748:
case 1337:
case 1635:
case 2612:
case 2755:
case 3505:
case 3153:
case 2843:
case 290:
case 1812:
case 725:
case 3342:
case 819:
case 3514:
case 466:
case 1651:
case 542:
case 1166:
case 356:
case 547:
case 2263:
case 2815:
case 2965:
case 830:
case 916:
case 3380:
case 3006:
case 3820:
case 2899:
case 2804:
case 3784:
case 3870:
case 1794:
case 3604:
case 646:
case 2620:
case 1847:
case 1689:
case 3869:
case 4016:
case 1985:
case 3995:
case 3615:
case 3546:
case 2230:
case 2940:
case 1283:
case 3317:
case 3492:
case 3033:
case 977:
case 2090:
case 2591:
case 3225:
case 3079:
case 3643:
case 1748:
case 2124:
case 1505:
case 2017:
case 1427:
case 40:
case 2297:
case 1342:
case 432:
case 3401:
case 1561:
case 3651:
case 699:
case 3752:
case 2977:
case 340:
case 156:
case 2502:
case 77:
case 627:
case 1208:
case 2927:
case 3832:
case 3390:
case 2647:
case 1820:
case 1006:
case 2333:
case 3709:
case 2889:
case 1534:
case 1870:
case 3794:
case 663:
case 2379:
case 1784:
case 3447:
case 2873:
case 668:
case 2759:
case 1951:
case 705:
case 1734:
case 496:
case 1854:
case 2383:
case 811:
case 481:
case 1892:
case 245:
case 3322:
case 3552:
case 3882:
case 176:
case 260:
case 2702:
case 3372:
case 75:
case 21:
case 2087:
case 1714:
case 3008:
case 813:
case 2819:
case 8:
case 2665:
case 1705:
case 2367:
case 1168:
case 195:
case 3206:
case 2116:
case 1548:
case 2443:
case 1213:
case 1695:
case 1915:
case 2242:
case 1526:
case 1801:
case 1999:
case 312:
case 957:
case 1576:
case 449:
case 1279:
case 1049:
case 1025:
case 1432:
case 3067:
case 2136:
case 3171:
case 1229:
case 2912:
case 279:
case 2862:
case 3121:
case 582:
case 3728:
case 2654:
case 3778:
case 2499:
case 3420:
case 3951:
case 3469:
case 1509:
case 2056:
case 1447:
case 686:
case 2217:
case 3854:
case 1882:
case 1260:
case 434:
case 2097:
case 624:
case 3714:
case 607:
case 693:
case 602:
case 63:
case 920:
case 2885:
case 2677:
case 1206:
case 395:
case 3548:
case 711:
case 251:
case 4018:
case 3915:
case 3695:
case 1827:
case 2640:
case 3397:
case 805:
case 3213:
case 1387:
case 1989:
case 85:
case 510:
case 3619:
case 3526:
case 3999:
case 2781:
case 112:
case 2920:
case 3904:
case 56:
case 3576:
case 2030:
case 2970:
case 448:
case 1746:
case 253:
case 1171:
case 3025:
case 7:
case 3279:
case 2682:
case 1121:
case 3229:
case 2290:
case 3935:
case 1363:
case 3639:
case 1470:
case 2010:
case 2511:
case 3673:
case 1778:
case 670:
case 1420:
case 3101:
case 580:
case 339:
case 182:
case 3284:
case 2346:
case 1005:
case 1560:
case 1061:
case 3400:
case 781:
case 1252:
case 3650:
case 2763:
case 3708:
case 1127:
case 405:
case 2558:
case 2328:
case 3807:
case 2787:
case 654:
case 2537:
case 2953:
case 36:
case 950:
case 1924:
case 310:
case 2059:
case 1821:
case 3391:
case 1381:
case 1974:
case 3938:
case 3078:
case 221:
case 4043:
case 4035:
case 82:
case 595:
case 616:
case 1725:
case 1749:
case 2941:
case 3767:
case 3868:
case 1688:
case 2803:
case 294:
case 1140:
case 3783:
case 3918:
case 1986:
case 2091:
case 3996:
case 3957:
case 1441:
case 267:
case 4004:
case 2722:
case 262:
case 576:
case 139:
case 338:
case 3209:
case 3294:
case 387:
case 734:
case 849:
case 3005:
case 2816:
case 3252:
case 1400:
case 3061:
case 3560:
case 672:
case 72:
case 2668:
case 3014:
case 1807:
case 2797:
case 3924:
case 2836:
case 517:
case 3381:
case 3974:
case 2900:
case 1391:
case 3821:
case 963:
case 2710:
case 2361:
case 600:
case 1248:
case 3182:
case 2314:
case 1513:
case 344:
case 2542:
case 1636:
case 1226:
case 3775:
case 927:
case 2305:
case 896:
case 2123:
case 2607:
case 1046:
case 1767:
case 2457:
case 3749:
case 881:
case 3725:
case 1698:
case 3688:
case 1868:
case 2730:
case 999:
case 2195:
case 1529:
case 1359:
case 3986:
case 1533:
case 2438:
case 3441:
case 4089:
case 875:
case 413:
case 2119:
case 236:
case 2641:
case 418:
case 832:
case 142:
case 540:
case 3048:
case 201:
case 2824:
case 3593:
case 1853:
case 3936:
case 2488:
case 2971:
case 2031:
case 2530:
case 2384:
case 3076:
case 2874:
case 80:
case 3112:
case 229:
case 1733:
case 3638:
case 1120:
case 2189:
case 2291:
case 1170:
case 1567:
case 3407:
case 3657:
case 3525:
case 2011:
case 1686:
case 3866:
case 1421:
case 968:
case 2064:
case 1471:
case 2742:
case 743:
case 3331:
case 3084:
case 1094:
case 184:
case 1903:
case 2326:
case 3950:
case 2886:
case 3706:
case 1214:
case 425:
case 2597:
case 331:
case 2202:
case 3760:
case 652:
case 2653:
case 3364:
case 2403:
case 657:
case 1841:
case 333:
case 419:
case 347:
case 866:
case 2907:
case 1228:
case 2522:
case 1936:
case 1076:
case 2394:
case 3853:
case 3779:
case 1593:
case 2498:
case 2309:
case 1800:
case 2143:
case 2790:
case 993:
case 3729:
case 2199:
case 1657:
case 1355:
case 1549:
case 2104:
case 3421:
case 3686:
case 4085:
case 2436:
case 969:
case 991:
case 3713:
case 1618:
case 1998:
case 3903:
case 2968:
case 24:
case 1084:
case 3205:
case 788:
case 2666:
case 755:
case 2896:
case 1950:
case 3009:
case 70:
case 674:
case 1169:
case 3052:
case 3261:
case 2737:
case 3147:
case 131:
case 326:
case 2600:
case 1311:
case 2450:
case 3674:
case 1364:
case 2563:
case 3508:
case 1468:
case 3624:
case 3841:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748901602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,];
var gg_b = "1748901602/";

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
