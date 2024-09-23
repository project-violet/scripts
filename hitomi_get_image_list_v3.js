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
var o = 1;
switch (g) {
case 1613:
case 1431:
case 5:
case 2261:
case 3707:
case 4090:
case 171:
case 1894:
case 1683:
case 3278:
case 1754:
case 2977:
case 2641:
case 1326:
case 3890:
case 248:
case 2788:
case 2942:
case 1716:
case 276:
case 3357:
case 451:
case 3424:
case 4065:
case 4051:
case 1750:
case 3846:
case 2211:
case 1163:
case 185:
case 3476:
case 3620:
case 1870:
case 1522:
case 2218:
case 3804:
case 1141:
case 2883:
case 3504:
case 3067:
case 3052:
case 2539:
case 1832:
case 3578:
case 1655:
case 3038:
case 3632:
case 3467:
case 2865:
case 3863:
case 2188:
case 300:
case 3030:
case 3725:
case 1685:
case 3891:
case 1009:
case 3430:
case 1627:
case 3775:
case 1573:
case 1144:
case 1443:
case 1398:
case 274:
case 2608:
case 776:
case 3140:
case 1919:
case 2630:
case 547:
case 1724:
case 3074:
case 3704:
case 401:
case 3203:
case 1170:
case 4054:
case 3866:
case 150:
case 3062:
case 4045:
case 3341:
case 117:
case 3484:
case 1105:
case 1282:
case 134:
case 2119:
case 880:
case 3928:
case 2231:
case 2560:
case 2264:
case 1468:
case 2983:
case 356:
case 2576:
case 2184:
case 1813:
case 2991:
case 361:
case 2609:
case 560:
case 81:
case 1466:
case 3823:
case 3967:
case 484:
case 3523:
case 3532:
case 2408:
case 1045:
case 2452:
case 797:
case 2134:
case 3937:
case 533:
case 1525:
case 1738:
case 3841:
case 42:
case 2658:
case 3726:
case 1887:
case 3036:
case 688:
case 199:
case 550:
case 911:
case 3934:
case 2499:
case 1088:
case 3835:
case 2209:
case 1059:
case 1923:
case 3637:
case 2113:
case 2325:
case 1232:
case 195:
case 2850:
case 3214:
case 864:
case 3384:
case 1945:
case 767:
case 3151:
case 3765:
case 1502:
case 3584:
case 2447:
case 442:
case 1755:
case 2867:
case 3129:
case 3543:
case 3119:
case 3375:
case 2348:
case 3606:
case 1770:
case 3042:
case 3324:
case 446:
case 2713:
case 2156:
case 577:
case 1417:
case 656:
case 519:
case 172:
case 3825:
case 272:
case 780:
case 3807:
case 3818:
case 3656:
case 1342:
case 3858:
case 1651:
case 1657:
case 3006:
case 1791:
case 2091:
case 1482:
case 3865:
case 1539:
case 2238:
case 78:
case 1053:
case 2810:
case 971:
case 1273:
case 869:
case 2233:
case 2440:
case 1977:
case 146:
case 2130:
case 2354:
case 2794:
case 38:
case 3485:
case 4087:
case 1708:
case 1076:
case 1960:
case 567:
case 1487:
case 596:
case 2795:
case 1214:
case 2138:
case 895:
case 3277:
case 152:
case 2974:
case 268:
case 3177:
case 615:
case 2814:
case 1535:
case 1425:
case 3002:
case 355:
case 524:
case 3970:
case 3017:
case 56:
case 751:
case 3300:
case 1794:
case 1803:
case 1855:
case 753:
case 3096:
case 1438:
case 2913:
case 4081:
case 3558:
case 3590:
case 1730:
case 3948:
case 2281:
case 2960:
case 3660:
case 3267:
case 2161:
case 96:
case 2932:
case 838:
case 3614:
case 2903:
case 2839:
case 3631:
case 1599:
case 1396:
case 3856:
case 1878:
case 1759:
case 2473:
case 2051:
case 2360:
case 884:
case 2212:
case 1957:
case 2650:
case 3519:
case 3714:
case 3822:
case 297:
case 3782:
case 3836:
case 3231:
case 227:
case 24:
case 516:
case 3202:
case 2492:
case 1497:
case 1452:
case 2479:
case 1440:
case 3784:
case 3100:
case 174:
case 1228:
case 1900:
case 933:
case 3116:
case 860:
case 1761:
case 1350:
case 1256:
case 3929:
case 1060:
case 1827:
case 2891:
case 263:
case 1911:
case 3115:
case 19:
case 1912:
case 2343:
case 14:
case 427:
case 288:
case 1191:
case 2716:
case 2945:
case 3369:
case 687:
case 3409:
case 183:
case 3575:
case 2964:
case 3626:
case 48:
case 1166:
case 2151:
case 347:
case 2627:
case 870:
case 3161:
case 1678:
case 1499:
case 1963:
case 482:
case 3252:
case 128:
case 1048:
case 3759:
case 2135:
case 1248:
case 1159:
case 630:
case 1744:
case 3732:
case 1108:
case 731:
case 2737:
case 3184:
case 2367:
case 3219:
case 57:
case 2593:
case 2355:
case 2206:
case 358:
case 3642:
case 357:
case 527:
case 3178:
case 3961:
case 99:
case 3410:
case 3700:
case 1575:
case 1490:
case 350:
case 35:
case 1235:
case 3442:
case 3087:
case 2523:
case 2563:
case 1735:
case 2786:
case 1648:
case 2263:
case 370:
case 631:
case 1922:
case 158:
case 598:
case 2124:
case 1477:
case 2297:
case 965:
case 841:
case 2778:
case 3959:
case 3724:
case 2584:
case 1529:
case 2155:
case 877:
case 2538:
case 2425:
case 2686:
case 3811:
case 175:
case 2057:
case 259:
case 1616:
case 2929:
case 3200:
case 2459:
case 2483:
case 2037:
case 4010:
case 285:
case 1334:
case 3451:
case 3577:
case 1446:
case 3995:
case 2802:
case 1847:
case 795:
case 2237:
case 2986:
case 3977:
case 3975:
case 2712:
case 4025:
case 501:
case 2887:
case 159:
case 2985:
case 1898:
case 3456:
case 2613:
case 3985:
case 2000:
case 2979:
case 2159:
case 1357:
case 1493:
case 3221:
case 3313:
case 985:
case 68:
case 1994:
case 607:
case 1363:
case 863:
case 3443:
case 3000:
case 652:
case 3905:
case 1098:
case 2703:
case 2572:
case 1659:
case 2099:
case 3555:
case 3673:
case 3851:
case 1836:
case 2952:
case 765:
case 435:
case 3041:
case 3769:
case 601:
case 162:
case 2849:
case 1025:
case 2385:
case 1259:
case 3634:
case 3806:
case 459:
case 787:
case 1422:
case 1711:
case 1910:
case 52:
case 3192:
case 3860:
case 2873:
case 2540:
case 362:
case 2317:
case 2087:
case 3567:
case 1404:
case 3888:
case 4030:
case 384:
case 3679:
case 3849:
case 2714:
case 1848:
case 1925:
case 2920:
case 1480:
case 2490:
case 3190:
case 271:
case 3172:
case 1189:
case 489:
case 2556:
case 683:
case 1026:
case 3638:
case 388:
case 2734:
case 3757:
case 3272:
case 1322:
case 3750:
case 511:
case 2571:
case 2338:
case 2706:
case 3783:
case 179:
case 1541:
case 206:
case 2688:
case 3095:
case 2282:
case 4062:
case 2117:
case 2068:
case 1824:
case 2407:
case 1348:
case 3025:
case 563:
case 3435:
case 3220:
case 2167:
case 521:
case 3054:
case 3354:
case 374:
case 432:
case 167:
case 2831:
case 3941:
case 1713:
case 3455:
case 2011:
case 568:
case 1203:
case 771:
case 3081:
case 1705:
case 3197:
case 3772:
case 1210:
case 819:
case 2131:
case 3954:
case 3876:
case 3957:
case 2018:
case 1216:
case 4009:
case 3256:
case 621:
case 1358:
case 1376:
case 126:
case 2685:
case 1564:
case 1877:
case 1169:
case 1563:
case 4077:
case 1012:
case 1362:
case 3728:
case 2313:
case 1199:
case 1484:
case 376:
case 2687:
case 755:
case 1714:
case 2531:
case 2997:
case 970:
case 3720:
case 43:
case 3475:
case 2804:
case 590:
case 2240:
case 371:
case 1202:
case 2906:
case 3366:
case 1555:
case 1488:
case 2693:
case 808:
case 1240:
case 1161:
case 3522:
case 2101:
case 814:
case 658:
case 907:
case 17:
case 2413:
case 3684:
case 3921:
case 785:
case 431:
case 2565:
case 3407:
case 4079:
case 1437:
case 1703:
case 3794:
case 2230:
case 2195:
case 1377:
case 691:
case 1881:
case 1695:
case 1997:
case 504:
case 3654:
case 1763:
case 3251:
case 3815:
case 989:
case 2339:
case 2196:
case 1593:
case 1479:
case 2905:
case 4017:
case 1447:
case 3289:
case 481:
case 4056:
case 1810:
case 3419:
case 4076:
case 2082:
case 47:
case 16:
case 2334:
case 2504:
case 1381:
case 2242:
case 2705:
case 1258:
case 3907:
case 2682:
case 3328:
case 2202:
case 722:
case 2400:
case 1669:
case 3413:
case 3923:
case 4006:
case 1715:
case 1290:
case 2803:
case 665:
case 579:
case 2342:
case 1041:
case 2500:
case 1936:
case 564:
case 1280:
case 3118:
case 2226:
case 3537:
case 2294:
case 1901:
case 2989:
case 955:
case 3474:
case 2298:
case 784:
case 3117:
case 1078:
case 1278:
case 827:
case 67:
case 3529:
case 1668:
case 4037:
case 1740:
case 2615:
case 2854:
case 3352:
case 92:
case 410:
case 290:
case 2847:
case 2567:
case 3692:
case 1149:
case 3873:
case 2894:
case 3180:
case 1306:
case 529:
case 1762:
case 2019:
case 3527:
case 2509:
case 2396:
case 2318:
case 1537:
case 2664:
case 3894:
case 3510:
case 1628:
case 3819:
case 1620:
case 1061:
case 3651:
case 3482:
case 935:
case 437:
case 754:
case 2607:
case 118:
case 2911:
case 886:
case 100:
case 3830:
case 341:
case 1309:
case 1033:
case 3842:
case 379:
case 2293:
case 476:
case 1385:
case 1408:
case 657:
case 1690:
case 3511:
case 1113:
case 3721:
case 3550:
case 3878:
case 3078:
case 1111:
case 2720:
case 2412:
case 1766:
case 1219:
case 3318:
case 3978:
case 161:
case 3943:
case 2351:
case 2074:
case 1799:
case 1453:
case 2619:
case 3981:
case 957:
case 3781:
case 3372:
case 3911:
case 3093:
case 2194:
case 1459:
case 2096:
case 1811:
case 2835:
case 733:
case 2529:
case 311:
case 3949:
case 809:
case 2204:
case 3508:
case 2394:
case 1125:
case 2603:
case 3075:
case 1549:
case 307:
case 1831:
case 2376:
case 120:
case 1940:
case 3826:
case 1062:
case 2275:
case 3922:
case 3767:
case 829:
case 1344:
case 2381:
case 3698:
case 1820:
case 3827:
case 2515:
case 3497:
case 1185:
case 861:
case 1728:
case 3787:
case 708:
case 62:
case 299:
case 2526:
case 3338:
case 3329:
case 2256:
case 2785:
case 3965:
case 2677:
case 2816:
case 1188:
case 562:
case 1776:
case 40:
case 405:
case 824:
case 3353:
case 3893:
case 346:
case 251:
case 2213:
case 1667:
case 1373:
case 1835:
case 3603:
case 298:
case 450:
case 32:
case 39:
case 3121:
case 821:
case 3641:
case 2108:
case 1505:
case 2059:
case 3951:
case 2512:
case 339:
case 3250:
case 2944:
case 1722:
case 2421:
case 1069:
case 112:
case 453:
case 1988:
case 922:
case 1899:
case 523:
case 679:
case 418:
case 416:
case 638:
case 1920:
case 693:
case 3813:
case 3821:
case 3496:
case 2181:
case 2036:
case 1615:
case 3693:
case 3066:
case 3536:
case 3047:
case 3060:
case 988:
case 694:
case 394:
case 2384:
case 575:
case 1222:
case 3686:
case 1085:
case 3080:
case 1234:
case 2768:
case 3174:
case 1858:
case 1638:
case 1432:
case 2908:
case 1993:
case 1063:
case 737:
case 541:
case 3490:
case 1032:
case 3097:
case 2625:
case 1606:
case 1752:
case 441:
case 1190:
case 1595:
case 0:
case 483:
case 182:
case 1436:
case 3623:
case 2450:
case 1231:
case 135:
case 1916:
case 4034:
case 966:
case 3084:
case 951:
case 2813:
case 1552:
case 3153:
case 266:
case 640:
case 189:
case 939:
case 2432:
case 1254:
case 2021:
case 60:
case 1123:
case 3266:
case 2126:
case 2671:
case 4068:
case 4095:
case 859:
case 3103:
case 4067:
case 452:
case 1039:
case 2917:
case 178:
case 3088:
case 1597:
case 3483:
case 4088:
case 2708:
case 2183:
case 3186:
case 3108:
case 2272:
case 1691:
case 872:
case 226:
case 2223:
case 3561:
case 3572:
case 3706:
case 2273:
case 364:
case 2173:
case 3358:
case 279:
case 3486:
case 2680:
case 3388:
case 1503:
case 3235:
case 2115:
case 196:
case 2838:
case 3015:
case 2924:
case 932:
case 1142:
case 499:
case 98:
case 2915:
case 2046:
case 2754:
case 1349:
case 1975:
case 3709:
case 3331:
case 163:
case 3392:
case 1964:
case 3473:
case 3122:
case 4040:
case 1387:
case 716:
case 2752:
case 1943:
case 1630:
case 3431:
case 399:
case 3101:
case 2852:
case 1393:
case 2437:
case 1002:
case 3317:
case 2759:
case 1180:
case 1324:
case 1415:
case 2707:
case 1767:
case 805:
case 2172:
case 2922:
case 3903:
case 438:
case 3361:
case 87:
case 3273:
case 2296:
case 2122:
case 3334:
case 3216:
case 3834:
case 695:
case 1288:
case 3828:
case 2981:
case 532:
case 294:
case 3032:
case 831:
case 2550:
case 2152:
case 312:
case 1706:
case 218:
case 3086:
case 2514:
case 1391:
case 3576:
case 1854:
case 1388:
case 2709:
case 2606:
case 1430:
case 391:
case 3779:
case 1631:
case 852:
case 710:
case 132:
case 3659:
case 3043:
case 412:
case 212:
case 2248:
case 1094:
case 3599:
case 2573:
case 413:
case 507:
case 1905:
case 3514:
case 429:
case 2083:
case 510:
case 1675:
case 1329:
case 2066:
case 1303:
case 37:
case 434:
case 1057:
case 3351:
case 2276:
case 467:
case 2225:
case 1567:
case 250:
case 82:
case 3859:
case 1333:
case 3111:
case 2467:
case 165:
case 791:
case 2203:
case 2193:
case 2940:
case 1873:
case 1104:
case 1769:
case 4072:
case 1796:
case 1626:
case 1741:
case 685:
case 2916:
case 1429:
case 4042:
case 3209:
case 2458:
case 3057:
case 1266:
case 1323:
case 3778:
case 2205:
case 1054:
case 2918:
case 2284:
case 2414:
case 878:
case 1445:
case 2832:
case 2995:
case 1475:
case 3125:
case 265:
case 2047:
case 2626:
case 3295:
case 1419:
case 2886:
case 2669:
case 411:
case 2329:
case 3099:
case 2721:
case 2120:
case 1175:
case 2471:
case 3158:
case 3166:
case 471:
case 1833:
case 1661:
case 3053:
case 1513:
case 812:
case 3306:
case 3517:
case 586:
case 1131:
case 2635:
case 2366:
case 282:
case 2080:
case 3320:
case 1807:
case 982:
case 1081:
case 1790:
case 1075:
case 1207:
case 2153:
case 810:
case 3262:
case 2762:
case 2254:
case 2967:
case 835:
case 366:
case 2841:
case 3507:
case 61:
case 3503:
case 653:
case 3481:
case 2164:
case 2700:
case 2044:
case 2633:
case 3553:
case 509:
case 3892:
case 1435:
case 3531:
case 817:
case 1551:
case 2717:
case 2332:
case 792:
case 946:
case 1020:
case 1197:
case 2505:
case 3167:
case 3399:
case 2552:
case 2192:
case 1354:
case 3832:
case 2980:
case 2972:
case 3417:
case 498:
case 2375:
case 3925:
case 1778:
case 3368:
case 4015:
case 2662:
case 3321:
case 105:
case 2822:
case 1729:
case 515:
case 3316:
case 1135:
case 558:
case 2779:
case 2109:
case 1753:
case 994:
case 2777:
case 1120:
case 1821:
case 2564:
case 3489:
case 4063:
case 1236:
case 1976:
case 2982:
case 3008:
case 3365:
case 1343:
case 914:
case 2800:
case 3154:
case 2239:
case 1550:
case 1122:
case 491:
case 1590:
case 1013:
case 1177:
case 2388:
case 3264:
case 487:
case 269:
case 3292:
case 3889:
case 692:
case 3983:
case 232:
case 2160:
case 1008:
case 1029:
case 13:
case 3887:
case 1721:
case 1297:
case 3079:
case 2090:
case 239:
case 2328:
case 3627:
case 4089:
case 3029:
case 3768:
case 1773:
case 3112:
case 3021:
case 305:
case 1645:
case 3428:
case 2392:
case 1283:
case 887:
case 2878:
case 2081:
case 36:
case 3439:
case 245:
case 261:
case 492:
case 58:
case 1969:
case 641:
case 2383:
case 3568:
case 1720:
case 3:
case 386:
case 65:
case 2776:
case 1320:
case 4086:
case 4061:
case 3840:
case 520:
case 318:
case 3050:
case 1581:
case 1992:
case 422:
case 2007:
case 2424:
case 1099:
case 3386:
case 71:
case 862:
case 587:
case 2857:
case 1395:
case 2532:
case 4093:
case 3426:
case 1819:
case 1888:
case 490:
case 1465:
case 1747:
case 2305:
case 1842:
case 2590:
case 2601:
case 1589:
case 3091:
case 553:
case 3570:
case 2782:
case 142:
case 4038:
case 977:
case 231:
case 1518:
case 3796:
case 1758:
case 2956:
case 2969:
case 537:
case 1812:
case 820:
case 2308:
case 764:
case 3422:
case 1692:
case 2876:
case 8:
case 1224:
case 1538:
case 2559:
case 2902:
case 744:
case 876:
case 865:
case 1205:
case 1181:
case 2659:
case 1586:
case 2341:
case 900:
case 2340:
case 3420:
case 1386:
case 4018:
case 1560:
case 975:
case 1618:
case 2589:
case 991:
case 2503:
case 2428:
case 3505:
case 2882:
case 1624:
case 3574:
case 1065:
case 222:
case 3415:
case 1154:
case 3269:
case 1400:
case 3040:
case 1649:
case 531:
case 2978:
case 949:
case 2401:
case 3912:
case 2724:
case 4044:
case 2219:
case 2965:
case 3984:
case 1353:
case 647:
case 3336:
case 2620:
case 2399:
case 2345:
case 262:
case 927:
case 1380:
case 1402:
case 806:
case 2352:
case 1040:
case 746:
case 3986:
case 2310:
case 1726:
case 3562:
case 380:
case 3968:
case 1394:
case 2418:
case 3073:
case 2292:
case 2530:
case 3274:
case 632:
case 2169:
case 1621:
case 301:
case 3039:
case 1532:
case 576:
case 3230:
case 1760:
case 2726:
case 4019:
case 1756:
case 4048:
case 1814:
case 1527:
case 1389:
case 3265:
case 115:
case 1294:
case 3403:
case 3753:
case 984:
case 1889:
case 2653:
case 7:
case 2013:
case 1731:
case 3862:
case 3268:
case 2397:
case 2105:
case 3445:
case 1954:
case 3239:
case 284:
case 3046:
case 2095:
case 983:
case 2780:
case 1250:
case 177:
case 430:
case 2253:
case 748:
case 3223:
case 110:
case 2283:
case 749:
case 2270:
case 3895:
case 1474:
case 3729:
case 2825:
case 2961:
case 3808:
case 2640:
case 1521:
case 3348:
case 948:
case 938:
case 3798:
case 1444:
case 1157:
case 1927:
case 278:
case 2719:
case 1876:
case 3176:
case 725:
case 2429:
case 3616:
case 3702:
case 3215:
case 762:
case 2073:
case 2833:
case 2701:
case 1798:
case 3004:
case 3128:
case 918:
case 3126:
case 3810:
case 3516:
case 3082:
case 589:
case 2040:
case 766:
case 200:
case 1584:
case 3296:
case 3168:
case 3139:
case 2062:
case 2761:
case 3345:
case 46:
case 2947:
case 639:
case 1985:
case 2748:
case 2274:
case 3339:
case 825:
case 828:
case 1319:
case 72:
case 2496:
case 2085:
case 3179:
case 3238:
case 1218:
case 538:
case 1843:
case 2364:
case 3204:
case 3777:
case 417:
case 648:
case 1924:
case 617:
case 1316:
case 3387:
case 3538:
case 1830:
case 4064:
case 2220:
case 3736:
case 605:
case 2730:
case 101:
case 1947:
case 3213:
case 4055:
case 205:
case 2460:
case 830:
case 1296:
case 2157:
case 3705:
case 736:
case 1568:
case 4083:
case 3394:
case 637:
case 594:
case 1022:
case 998:
case 2469:
case 3332:
case 3206:
case 2581:
case 333:
case 2796:
case 3076:
case 191:
case 1327:
case 3243:
case 3427:
case 1686:
case 3533:
case 3107:
case 3132:
case 664:
case 2100:
case 757:
case 372:
case 213:
case 1265:
case 2702:
case 3077:
case 2594:
case 3546:
case 1610:
case 54:
case 472:
case 1594:
case 1355:
case 1392:
case 2299:
case 3385:
case 1953:
case 1967:
case 1869:
case 2043:
case 378:
case 34:
case 1251:
case 1891:
case 3457:
case 2941:
case 3525:
case 1028:
case 3639:
case 3019:
case 3917:
case 470:
case 3027:
case 1671:
case 1787:
case 3645:
case 2271:
case 1226:
case 968:
case 2093:
case 4032:
case 3760:
case 1569:
case 2612:
case 2663:
case 1352:
case 936:
case 3370:
case 164:
case 3217:
case 169:
case 1998:
case 2198:
case 3586:
case 403:
case 1489:
case 2089:
case 3987:
case 2076:
case 1365:
case 3400:
case 3694:
case 789:
case 1743:
case 4069:
case 2715:
case 2561:
case 3931:
case 1641:
case 2347:
case 1268:
case 1383:
case 3655:
case 336:
case 1284:
case 2020:
case 1406:
case 2486:
case 223:
case 3028:
case 4085:
case 2823:
case 1448:
case 677:
case 963:
case 2744:
case 2674:
case 2537:
case 3855:
case 3875:
case 3624:
case 1107:
case 1559:
case 3812:
case 2756:
case 3288:
case 1005:
case 4008:
case 1829:
case 1989:
case 1745:
case 2925:
case 588:
case 662:
case 2524:
case 3205:
case 3444:
case 978:
case 1220:
case 2336:
case 4092:
case 626:
case 488:
case 2472:
case 3305:
case 1903:
case 1934:
case 3648:
case 1862:
case 2586:
case 3763:
case 698:
case 1838:
case 2595:
case 3232:
case 3547:
case 684:
case 2333:
case 1921:
case 3359:
case 2837:
case 672:
case 969:
case 322:
case 3255:
case 3499:
case 636:
case 2084:
case 3094:
case 3390:
case 2141:
case 777:
case 2006:
case 3245:
case 2417:
case 3440:
case 2723:
case 3070:
case 1696:
case 1304:
case 1635:
case 324:
case 1496:
case 2936:
case 3145:
case 3293:
case 2694:
case 2824:
case 1512:
case 3745:
case 1664:
case 3201:
case 2828:
case 3569:
case 1336:
case 3312:
case 2966:
case 4052:
case 124:
case 2819:
case 2163:
case 1647:
case 2508:
case 3055:
case 1023:
case 3831:
case 1536:
case 2361:
case 2041:
case 3997:
case 4041:
case 2098:
case 2948:
case 2893:
case 623:
case 1946:
case 494:
case 1951:
case 571:
case 3780:
case 2870:
case 646:
case 1528:
case 2002:
case 1287:
case 209:
case 906:
case 2079:
case 342:
case 3379:
case 2657:
case 3774:
case 2888:
case 1200:
case 2811:
case 2349:
case 624:
case 2840:
case 3608:
case 2015:
case 1449:
case 243:
case 2064:
case 2951:
case 2335:
case 758:
case 2060:
case 3520:
case 326:
case 3661:
case 108:
case 2666:
case 363:
case 2742:
case 2558:
case 3441:
case 2448:
case 613:
case 1274:
case 1788:
case 956:
case 3137:
case 2760:
case 2645:
case 3979:
case 1508:
case 84:
case 1601:
case 1019:
case 1036:
case 3191:
case 1096:
case 2482:
case 1576:
case 2879:
case 815:
case 3594:
case 1321:
case 3208:
case 2259:
case 1656:
case 238:
case 857:
case 2003:
case 1411:
case 3885:
case 4039:
case 3346:
case 1110:
case 2290:
case 2805:
case 3149:
case 2896:
case 702:
case 4082:
case 291:
case 930:
case 976:
case 3559:
case 3919:
case 2665:
case 1229:
case 711:
case 1718:
case 151:
case 1781:
case 2722:
case 3083:
case 3340:
case 3653:
case 2485:
case 2358:
case 2591:
case 1926:
case 1633:
case 2962:
case 2187:
case 1952:
case 1523:
case 3382:
case 1514:
case 1574:
case 1893:
case 2224:
case 1516:
case 3530:
case 3479:
case 3315:
case 1734:
case 723:
case 2039:
case 1785:
case 645:
case 3045:
case 1044:
case 2605:
case 3012:
case 143:
case 1491:
case 627:
case 2743:
case 3545:
case 3756:
case 738:
case 2451:
case 2518:
case 1215:
case 3802:
case 1457:
case 1128:
case 2528:
case 962:
case 1554:
case 94:
case 2557:
case 373:
case 1112:
case 3565:
case 2655:
case 3722:
case 2899:
case 3031:
case 788:
case 2793:
case 3242:
case 1665:
case 173:
case 3254:
case 2697:
case 2910:
case 2056:
case 1262:
case 359:
case 1067:
case 255:
case 3625:
case 127:
case 1347:
case 1622:
case 1709:
case 2510:
case 3157:
case 4035:
case 1959:
case 3165:
case 444:
case 2799:
case 86:
case 252:
case 3024:
case 3291:
case 119:
case 1455:
case 3751:
case 759:
case 3817:
case 696:
case 3175:
case 2696:
case 184:
case 555:
case 2114:
case 578:
case 1213:
case 3752:
case 1526:
case 2901:
case 2258:
case 2866:
case 2444:
case 1360:
case 2806:
case 3227:
case 1991:
case 902:
case 354:
case 1434:
case 2067:
case 3676:
case 3160:
case 1681:
case 3619:
case 811:
case 798:
case 2616:
case 513:
case 1600:
case 2968:
case 2265:
case 3259:
case 1034:
case 344:
case 2048:
case 3872:
case 334:
case 3049:
case 4075:
case 796:
case 2061:
case 770:
case 3770:
case 2455:
case 3247:
case 1839:
case 3123:
case 1420:
case 1775:
case 2812:
case 1984:
case 389:
case 1579:
case 1371:
case 3908:
case 1206:
case 3303:
case 1242:
case 319:
case 2106:
case 3109:
case 1332:
case 3377:
case 1990:
case 74:
case 3554:
case 3829:
case 1267:
case 2302:
case 1913:
case 3668:
case 3980:
case 2830:
case 3972:
case 2622:
case 1666:
case 3542:
case 85:
case 349:
case 103:
case 1367:
case 1694:
case 3618:
case 506:
case 761:
case 2311:
case 1017:
case 3738:
case 433:
case 1768:
case 2643:
case 4001:
case 909:
case 75:
case 3741:
case 166:
case 1103:
case 3071:
case 3609:
case 2624:
case 2162:
case 188:
case 1121:
case 310:
case 1467:
case 233:
case 1051:
case 2476:
case 3001:
case 1852:
case 1148:
case 1871:
case 3643:
case 4043:
case 2678:
case 2232:
case 2387:
case 2904:
case 1717:
case 1853:
case 3682:
case 2660:
case 12:
case 3398:
case 3964:
case 2092:
case 2487:
case 1629:
case 850:
case 454:
case 33:
case 1341:
case 131:
case 1252:
case 1372:
case 803:
case 633:
case 2143:
case 3260:
case 1857:
case 1511:
case 2189:
case 1378:
case 1725:
case 775:
case 4073:
case 1257:
case 2330:
case 928:
case 1158:
case 1802:
case 3696:
case 76:
case 1784:
case 893:
case 2435:
case 3355:
case 536:
case 3294:
case 3509:
case 2992:
case 866:
case 3935:
case 3280:
case 2955:
case 2468:
case 2307:
case 3460:
case 2390:
case 2247:
case 3458:
case 3708:
case 581:
case 404:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1727074802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,];
var gg_b = "1727074802/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
