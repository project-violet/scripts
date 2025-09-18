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
case 2553:
case 3964:
case 3915:
case 3877:
case 2226:
case 2952:
case 4:
case 411:
case 1790:
case 848:
case 2197:
case 2938:
case 1125:
case 2300:
case 1693:
case 682:
case 145:
case 987:
case 1869:
case 2093:
case 3485:
case 404:
case 2332:
case 802:
case 2980:
case 2321:
case 3697:
case 631:
case 2263:
case 1219:
case 839:
case 2261:
case 699:
case 969:
case 1945:
case 3436:
case 2358:
case 2451:
case 269:
case 2510:
case 3709:
case 181:
case 1046:
case 2814:
case 858:
case 2030:
case 3896:
case 973:
case 1602:
case 3963:
case 4077:
case 1275:
case 2428:
case 3280:
case 155:
case 1731:
case 517:
case 3676:
case 1874:
case 2949:
case 319:
case 3629:
case 287:
case 384:
case 126:
case 2882:
case 3252:
case 109:
case 2808:
case 2324:
case 3536:
case 2215:
case 2646:
case 3979:
case 2088:
case 800:
case 775:
case 520:
case 2514:
case 103:
case 2034:
case 2303:
case 3477:
case 1242:
case 2447:
case 2411:
case 1469:
case 185:
case 947:
case 3298:
case 313:
case 44:
case 3284:
case 3056:
case 2206:
case 257:
case 3212:
case 3885:
case 3797:
case 1574:
case 1634:
case 1105:
case 2090:
case 2983:
case 354:
case 680:
case 2320:
case 263:
case 2582:
case 1156:
case 2414:
case 279:
case 2465:
case 1788:
case 1378:
case 3577:
case 3283:
case 1794:
case 141:
case 957:
case 693:
case 1569:
case 130:
case 3637:
case 2511:
case 833:
case 2547:
case 761:
case 2450:
case 652:
case 574:
case 2031:
case 2828:
case 2033:
case 2392:
case 1633:
case 3729:
case 1622:
case 2998:
case 2482:
case 4085:
case 1287:
case 344:
case 3335:
case 1571:
case 2558:
case 2672:
case 3835:
case 1106:
case 142:
case 3886:
case 1684:
case 2931:
case 1749:
case 2012:
case 2205:
case 268:
case 3642:
case 2818:
case 2098:
case 108:
case 883:
case 3719:
case 1612:
case 2268:
case 2892:
case 770:
case 1878:
case 2351:
case 318:
case 2566:
case 4086:
case 2820:
case 630:
case 1209:
case 2421:
case 1370:
case 3385:
case 1237:
case 3775:
case 2432:
case 2400:
case 1738:
case 3956:
case 724:
case 410:
case 968:
case 838:
case 1752:
case 2466:
case 2083:
case 92:
case 2520:
case 2772:
case 2119:
case 334:
case 1163:
case 1161:
case 182:
case 2308:
case 2824:
case 427:
case 1946:
case 3291:
case 1784:
case 772:
case 3486:
case 3061:
case 1798:
case 237:
case 3742:
case 2492:
case 1712:
case 140:
case 2988:
case 3079:
case 131:
case 2314:
case 2365:
case 3916:
case 2994:
case 3396:
case 1478:
case 2902:
case 2225:
case 3925:
case 1371:
case 3294:
case 2858:
case 2518:
case 1115:
case 1164:
case 216:
case 681:
case 3675:
case 2821:
case 3145:
case 2592:
case 609:
case 2993:
case 1229:
case 2311:
case 1369:
case 892:
case 2313:
case 626:
case 2991:
case 22:
case 867:
case 2401:
case 3377:
case 3230:
case 2175:
case 1045:
case 366:
case 3498:
case 1376:
case 1786:
case 3849:
case 1329:
case 2247:
case 622:
case 3583:
case 23:
case 3581:
case 362:
case 3914:
case 1559:
case 2316:
case 3965:
case 3394:
case 3302:
case 1271:
case 3778:
case 4038:
case 4052:
case 718:
case 582:
case 2699:
case 212:
case 2863:
case 2406:
case 1397:
case 1917:
case 912:
case 3000:
case 3598:
case 121:
case 3481:
case 3066:
case 1100:
case 3483:
case 4049:
case 3296:
case 3852:
case 1487:
case 1459:
case 994:
case 2864:
case 1695:
case 3058:
case 1158:
case 3947:
case 3032:
case 3911:
case 3913:
case 1274:
case 664:
case 2627:
case 2555:
case 2506:
case 86:
case 3512:
case 3580:
case 3449:
case 3898:
case 4081:
case 3884:
case 1686:
case 2178:
case 3331:
case 2254:
case 3333:
case 3092:
case 1192:
case 828:
case 1104:
case 1635:
case 1989:
case 3148:
case 1957:
case 3236:
case 2515:
case 2564:
case 156:
case 620:
case 2035:
case 3552:
case 3678:
case 2648:
case 3812:
case 2806:
case 3928:
case 2855:
case 2799:
case 3018:
case 542:
case 1101:
case 2639:
case 1475:
case 2368:
case 2607:
case 1940:
case 2579:
case 3003:
case 3334:
case 3881:
case 3883:
case 2526:
case 3001:
case 4012:
case 3139:
case 3910:
case 3452:
case 146:
case 910:
case 3020:
case 1120:
case 2356:
case 2563:
case 1519:
case 674:
case 2727:
case 766:
case 593:
case 3493:
case 2218:
case 2805:
case 365:
case 3491:
case 3903:
case 3890:
case 447:
case 1040:
case 2170:
case 1777:
case 3235:
case 94:
case 1359:
case 625:
case 2640:
case 4022:
case 2425:
case 585:
case 1154:
case 3920:
case 3771:
case 215:
case 3834:
case 4033:
case 3773:
case 3383:
case 479:
case 1529:
case 1110:
case 2743:
case 2062:
case 120:
case 1939:
case 2741:
case 2717:
case 2292:
case 2204:
case 2868:
case 3157:
case 3189:
case 1948:
case 3312:
case 3904:
case 3591:
case 1837:
case 1796:
case 3488:
case 2220:
case 2416:
case 1809:
case 3494:
case 371:
case 1089:
case 3402:
case 598:
case 1057:
case 2935:
case 3051:
case 2201:
case 24:
case 1476:
case 784:
case 3831:
case 541:
case 1597:
case 3833:
case 3900:
case 1537:
case 3893:
case 3669:
case 3891:
case 1043:
case 911:
case 2171:
case 713:
case 3141:
case 3117:
case 136:
case 2364:
case 1677:
case 2995:
case 3434:
case 3958:
case 3671:
case 3673:
case 545:
case 2643:
case 3921:
case 1785:
case 1897:
case 2617:
case 754:
case 3923:
case 3047:
case 3011:
case 4030:
case 3770:
case 526:
case 3144:
case 1437:
case 1108:
case 806:
case 532:
case 509:
case 1999:
case 1319:
case 621:
case 2556:
case 4093:
case 1409:
case 3894:
case 1696:
case 2258:
case 361:
case 2326:
case 3924:
case 2789:
case 2266:
case 2644:
case 28:
case 2379:
case 555:
case 3014:
case 2096:
case 3431:
case 581:
case 3349:
case 211:
case 2:
case 3050:
case 3162:
case 3546:
case 15:
case 115:
case 2636:
case 1425:
case 1640:
case 2497:
case 1204:
case 2939:
case 305:
case 1717:
case 1062:
case 2110:
case 1805:
case 563:
case 1085:
case 0:
case 796:
case 3711:
case 1856:
case 3747:
case 2387:
case 1170:
case 2040:
case 974:
case 3610:
case 3185:
case 557:
case 1036:
case 3446:
case 1201:
case 1689:
case 1657:
case 1744:
case 3708:
case 1935:
case 876:
case 2597:
case 1986:
case 76:
case 377:
case 2429:
case 2151:
case 579:
case 2837:
case 3750:
case 920:
case 2948:
case 3207:
case 1220:
case 2809:
case 2796:
case 547:
case 3653:
case 3765:
case 349:
case 3345:
case 455:
case 41:
case 1077:
case 917:
case 1740:
case 2113:
case 481:
case 4046:
case 1641:
case 2375:
case 2897:
case 2041:
case 63:
case 1173:
case 2043:
case 409:
case 694:
case 2927:
case 426:
case 3647:
case 3611:
case 2537:
case 1224:
case 1995:
case 1364:
case 964:
case 728:
case 1315:
case 3710:
case 236:
case 3071:
case 222:
case 353:
case 1266:
case 1789:
case 1379:
case 18:
case 301:
case 922:
case 3608:
case 2829:
case 866:
case 111:
case 2876:
case 367:
case 2165:
case 77:
case 2114:
case 569:
case 1568:
case 314:
case 1221:
case 2182:
case 1556:
case 2999:
case 1223:
case 3728:
case 2108:
case 3074:
case 587:
case 1174:
case 389:
case 2696:
case 3614:
case 2409:
case 3665:
case 578:
case 391:
case 537:
case 1460:
case 2271:
case 2559:
case 921:
case 1316:
case 1406:
case 3243:
case 3241:
case 1699:
case 2124:
case 3704:
case 1455:
case 1748:
case 348:
case 1211:
case 2442:
case 2376:
case 2269:
case 1213:
case 2099:
case 986:
case 1826:
case 516:
case 1864:
case 3666:
case 3244:
case 819:
case 286:
case 2121:
case 2487:
case 2123:
case 1560:
case 3703:
case 2274:
case 1627:
case 3600:
case 884:
case 2166:
case 2027:
case 1250:
case 2542:
case 358:
case 2917:
case 3623:
case 431:
case 2943:
case 3973:
case 1325:
case 440:
case 3720:
case 3572:
case 3658:
case 256:
case 2309:
case 1515:
case 1564:
case 2118:
case 2337:
case 854:
case 493:
case 1855:
case 452:
case 2419:
case 3135:
case 3692:
case 1254:
case 1178:
case 3467:
case 388:
case 225:
case 300:
case 946:
case 1426:
case 813:
case 1210:
case 3872:
case 435:
case 3545:
case 2635:
case 2104:
case 2859:
case 2795:
case 246:
case 2007:
case 3257:
case 3289:
case 3601:
case 1415:
case 1727:
case 1561:
case 925:
case 64:
case 3700:
case 2519:
case 1563:
case 3970:
case 706:
case 2475:
case 1639:
case 729:
case 1985:
case 3721:
case 3567:
case 1526:
case 1579:
case 1936:
case 408:
case 3445:
case 333:
case 2940:
case 702:
case 510:
case 1328:
case 3499:
case 1084:
case 3848:
case 2612:
case 208:
case 3937:
case 1500:
case 3763:
case 3527:
case 1098:
case 280:
case 3655:
case 993:
case 1353:
case 3198:
case 657:
case 952:
case 1142:
case 1351:
case 2878:
case 3184:
case 323:
case 3909:
case 3779:
case 4039:
case 3389:
case 3357:
case 3726:
case 2155:
case 168:
case 1818:
case 446:
case 4007:
case 1922:
case 1205:
case 1767:
case 1256:
case 935:
case 1523:
case 2160:
case 1931:
case 3599:
case 1354:
case 2738:
case 1083:
case 942:
case 4048:
case 647:
case 1081:
case 3715:
case 1820:
case 293:
case 3087:
case 3340:
case 252:
case 1745:
case 1524:
case 456:
case 1432:
case 2780:
case 908:
case 1423:
case 1421:
case 1187:
case 1159:
case 980:
case 2067:
case 2126:
case 2179:
case 1049:
case 594:
case 240:
case 3663:
case 1404:
case 1492:
case 53:
case 673:
case 3755:
case 1994:
case 1225:
case 3149:
case 1503:
case 3344:
case 512:
case 2161:
case 282:
case 1520:
case 1382:
case 1772:
case 950:
case 3976:
case 2374:
case 3827:
case 1313:
case 1991:
case 1080:
case 2276:
case 1311:
case 2652:
case 2578:
case 1866:
case 3664:
case 3246:
case 1403:
case 3615:
case 807:
case 1858:
case 2373:
case 1052:
case 999:
case 2781:
case 3317:
case 1823:
case 3152:
case 669:
case 116:
case 940:
case 1821:
case 3439:
case 2680:
case 3841:
case 783:
case 2470:
case 91:
case 1321:
case 2219:
case 1091:
case 1980:
case 1332:
case 173:
case 705:
case 3191:
case 2945:
case 3440:
case 3557:
case 3625:
case 1197:
case 909:
case 2790:
case 1551:
case 932:
case 637:
case 1553:
case 1279:
case 926:
case 862:
case 759:
case 2691:
case 1813:
case 3327:
case 1811:
case 3267:
case 3756:
case 3705:
case 1938:
case 2125:
case 945:
case 187:
case 3102:
case 2722:
case 2967:
case 2733:
case 504:
case 422:
case 4017:
case 4041:
case 1088:
case 1646:
case 4043:
case 1324:
case 232:
case 1094:
case 1002:
case 1882:
case 2602:
case 3245:
case 511:
case 3616:
case 1814:
case 2688:
case 1176:
case 2046:
case 1129:
case 3076:
case 21:
case 3399:
case 3339:
case 2574:
case 4057:
case 4089:
case 3668:
case 743:
case 1206:
case 3443:
case 2473:
case 2156:
case 2471:
case 3307:
case 3840:
case 2105:
case 2634:
case 3725:
case 3544:
case 1810:
case 1301:
case 1303:
case 203:
case 3959:
case 3987:
case 668:
case 2168:
case 872:
case 55:
case 1854:
case 3656:
case 2793:
case 2469:
case 1413:
case 3134:
case 3605:
case 1550:
case 1411:
case 328:
case 1318:
case 3942:
case 701:
case 1998:
case 2622:
case 985:
case 792:
case 3543:
case 753:
case 3517:
case 2631:
case 3857:
case 767:
case 2571:
case 2573:
case 2259:
case 2287:
case 903:
case 2730:
case 2702:
case 2794:
case 241:
case 3122:
case 3716:
case 1851:
case 3131:
case 714:
case 1414:
case 1465:
case 3133:
case 1828:
case 1033:
case 1304:
case 3348:
case 1031:
case 1450:
case 1022:
case 230:
case 1148:
case 665:
case 3635:
case 172:
case 2872:
case 1262:
case 2618:
case 1449:
case 200:
case 325:
case 1333:
case 1004:
case 995:
case 1092:
case 1884:
case 3686:
case 1331:
case 3419:
case 2135:
case 1812:
case 1538:
case 4059:
case 731:
case 4087:
case 160:
case 799:
case 1236:
case 1953:
case 1951:
case 857:
case 740:
case 2186:
case 2758:
case 233:
case 1001:
case 1003:
case 1881:
case 3103:
case 1480:
case 671:
case 879:
case 2567:
case 2721:
case 576:
case 3475:
case 988:
case 1438:
case 2700:
case 3519:
case 1954:
case 3039:
case 2603:
case 3795:
case 2766:
case 2257:
case 2289:
case 1908:
case 1277:
case 2472:
case 2624:
case 1330:
case 1199:
case 1982:
case 742:
case 248:
case 3329:
case 2974:
case 1849:
case 2792:
case 1950:
case 406:
case 534:
case 873:
case 3819:
case 958:
case 2217:
case 3273:
case 1914:
case 3587:
case 708:
case 1388:
case 291:
case 780:
case 239:
case 1024:
case 1483:
case 3100:
case 607:
case 1481:
case 1127:
case 1066:
case 991:
case 2973:
case 1296:
case 1584:
case 2623:
case 3397:
case 2621:
case 3943:
case 3875:
case 661:
case 1880:
case 3166:
case 1598:
case 3027:
case 3542:
case 2195:
case 258:
case 1913:
case 1947:
case 3158:
case 2600:
case 1512:
case 948:
case 1023:
case 2701:
case 3487:
case 3123:
case 2703:
case 4019:
case 2071:
case 1352:
case 1117:
case 1490:
case 1966:
case 953:
case 2613:
case 3927:
case 1900:
case 2754:
case 1893:
case 3537:
case 46:
case 703:
case 1531:
case 2299:
case 3375:
case 1533:
case 3785:
case 2069:
case 1380:
case 1047:
case 1011:
case 1932:
case 670:
case 3147:
case 1434:
case 4029:
case 1671:
case 989:
case 2753:
case 3409:
case 2614:
case 1082:
case 317:
case 2665:
case 3044:
case 943:
case 816:
case 289:
case 730:
case 2728:
case 3437:
case 2650:
case 2074:
case 1144:
case 3319:
case 3182:
case 3999:
case 1433:
case 3114:
case 2196:
case 2367:
case 1349:
case 3876:
case 1295:
case 3150:
case 1924:
case 292:
case 1830:
case 253:
case 745:
case 259:
case 2610:
case 2185:
case 1903:
case 1588:
case 868:
case 3777:
case 1235:
case 3359:
case 1594:
case 1769:
case 2654:
case 672:
case 2136:
case 165:
case 1491:
case 47:
case 554:
case 320:
case 205:
case 3939:
case 3685:
case 2248:
case 990:
case 3154:
case 1920:
case 660:
case 3907:
case 949:
case 2162:
case 1383:
case 2546:
case 1381:
case 3636:
case 3796:
case 983:
case 2765:
case 755:
case 249:
case 1494:
case 1402:
case 2207:
case 3809:
case 2628:
case 1157:
case 1312:
case 781:
case 1591:
case 2239:
case 290:
case 238:
case 3429:
case 277:
case 3153:
case 3476:
case 732:
case 1833:
case 1774:
case 726:
case 1831:
case 1384:
case 1430:
case 959:
case 2708:
case 2372:
case 2782:
case 385:
case 2134:
case 1862:
case 228:
case 1068:
case 2656:
case 722:
case 3793:
case 477:
case 3168:
case 1477:
case 3690:
case 3634:
case 2725:
case 3473:
case 3156:
case 3471:
case 1212:
case 3870:
case 618:
case 2441:
case 2443:
case 449:
case 3574:
case 2190:
case 1885:
case 483:
case 1955:
case 3569:
case 330:
case 717:
case 1960:
case 2131:
case 1496:
case 3378:
case 1281:
case 341:
case 2716:
case 1283:
case 4070:
case 2857:
case 2889:
case 27:
case 3573:
case 2009:
case 3287:
case 1335:
case 144:
case 1729:
case 2543:
case 2541:
case 1386:
case 928:
case 3631:
case 764:
case 2037:
case 3622:
case 2705:
case 2097:
case 3693:
case 453:
case 2756:
case 1462:
case 894:
case 467:
case 1395:
case 296:
case 1025:
case 3790:
case 3945:
case 720:
case 2193:
case 2191:
case 812:
case 2768:
case 2817:
case 489:
case 1697:
case 3219:
case 2843:
case 2919:
case 1737:
case 2399:
case 2130:
case 1961:
case 1562:
case 1146:
case 355:
case 381:
case 3046:
case 3688:
case 1709:
case 3694:
case 2245:
case 3630:
case 332:
case 2457:
case 184:
case 1016:
case 26:
case 1979:
case 2844:
case 1926:
case 309:
case 119:
case 4073:
case 1676:
case 4071:
case 666:
case 561:
case 3570:
case 2102:
case 3722:
case 1238:
case 2929:
case 1293:
case 1291:
case 3784:
case 3649:
case 2539:
case 1742:
case 1486:
case 3163:
case 1435:
case 2344:
case 597:
case 1026:
case 399:
case 1167:
case 929:
case 1396:
case 1916:
case 3297:
case 2448:
case 2899:
case 2755:
case 2661:
case 2706:
case 562:
case 3126:
case 3712:
case 340:
case 2439:
case 804:
case 2317:
case 2152:
case 1586:
case 2341:
case 1675:
case 1535:
case 206:
case 3373:
case 3371:
case 1925:
case 1294:
case 1064:
case 1288:
case 1759:
case 1895:
case 1377:
case 2664:
case 2615:
case 166:
case 3578:
case 1230:
case 3638:
case 2548:
case 1145:
case 2075:
case 684:
case 350:
case 3229:
case 3749:
case 1886:
case 3684:
case 1642:
case 1290:
case 3155:
case 2112:
case 495:
case 342:
case 2389:
case 2357:
case 3106:
case 2726:
case 2184:
case 2660:
case 3878:
case 1234:
case 1595:
case 308:
case 1172:
case 2763:
case 433:
case 2761:
case 2527:
case 2606:
case 2499:
case 2848:
case 1968:
case 1385:
case 721:
case 3683:
case 1336:
case 393:
case 2340:
case 2807:
case 352:
case 488:
case 2715:
case 400:
case 2427:
case 644:
case 1222:
case 1362:
case 1231:
case 2599:
case 3314:
case 3365:
case 3994:
case 548:
case 3225:
case 2026:
case 3503:
case 2079:
case 3988:
case 1760:
case 3049:
case 1706:
case 1448:
case 1755:
case 1899:
case 2619:
case 1663:
case 2486:
case 539:
case 2063:
case 378:
case 4058:
case 2291:
case 822:
case 696:
case 4021:
case 966:
case 4023:
case 1679:
case 2435:
case 234:
case 1507:
case 3175:
case 934:
case 1180:
case 1664:
case 1246:
case 1615:
case 32:
case 2787:
case 2759:
case 497:
case 3347:
case 864:
case 3800:
case 462:
case 1827:
case 1075:
case 2145:
case 3592:
case 66:
case 1343:
case 4024:
case 3038:
case 1317:
case 3823:
case 3832:
case 817:
case 3518:
case 470:
case 2015:
case 129:
case 3858:
case 2925:
case 2202:
case 3052:
case 1407:
case 1138:
case 3645:
case 3420:
case 3142:
case 218:
case 1198:
case 2234:
case 123:
case 712:
case 1660:
case 1184:
case 3268:
case 3892:
case 3328:
case 1761:
case 1937:
case 1042:
case 2055:
case 73:
case 2642:
case 3818:
case 2886:
case 3256:
case 3767:
case 2835:
case 1726:
case 1779:
case 2060:
case 1357:
case 976:
case 3558:
case 3424:
case 2290:
case 3803:
case 3466:
case 4004:
case 276:
case 4092:
case 3083:
case 1715:
case 2659:
case 3354:
case 2231:
case 67:
case 1181:
case 2385:
case 3432:
case 2968:
case 918:
case 460:
case 4018:
case 1087:
case 2336:
case 1840:
case 1725:
case 3983:
case 623:
case 1190:
case 3255:
case 2005:
case 1443:
case 2056:
case 1668:
case 1417:
case 1441:
case 2284:
case 3447:
case 2862:
case 3550:
case 128:
case 3411:
case 3413:
case 583:
case 3810:
case 2596:
case 825:
case 3514:
case 1987:
case 505:
case 1959:
case 590:
case 465:
case 3746:
case 17:
case 711:
case 7:
case 3137:
case 913:
case 3318:
case 846:
case 1942:
case 549:
case 1541:
case 1517:
case 2729:
case 1348:
case 3031:
case 3912:
case 3304:
case 3033:
case 3828:
case 2906:
case 3022:
case 3511:
case 1716:
case 4054:
case 3851:
case 3853:
case 2281:
case 954:
case 2609:
case 3414:
case 1133:
case 3465:
case 2496:
case 3358:
case 1625:
case 1440:
case 1843:
case 3261:
case 2485:
case 75:
case 1768:
case 3300:
case 3847:
case 4065:
case 1756:
case 543:
case 1327:
case 3813:
case 2249:
case 3938:
case 1705:
case 3952:
case 2025:
case 196:
case 4050:
case 2964:
case 3553:
case 3279:
case 2915:
case 2877:
case 3226:
case 3324:
case 16:
case 284:
case 3094:
case 1489:
case 3002:
case 1540:
case 1102:
case 1194:
case 1188:
case 219:
case 74:
case 2585:
case 2146:
case 2280:
case 1076:
case 553:
case 821:
case 629:
case 501:
case 3554:
case 1919:
case 1245:
case 4047:
case 4013:
case 3129:
case 3451:
case 2047:
case 2932:
case 596:
case 1069:
case 2522:
case 899:
case 691:
case 2531:
case 3468:
case 40:
case 639:
case 2923:
case 757:
case 961:
case 1345:
case 2673:
case 3169:
case 3740:
case 3077:
case 2958:
case 2490:
case 3315:
case 2966:
case 3224:
case 3995:
case 2352:
case 2117:
case 419:
case 1710:
case 3456:
case 2338:
case 1647:
case 2900:
case 4016:
case 2669:
case 3405:
case 2422:
case 2674:
case 1367:
case 975:
case 3200:
case 2050:
case 2433:
case 2014:
case 2065:
case 192:
case 747:
case 3096:
case 1846:
case 2534:
case 2008:
case 3174:
case 2888:
case 261:
case 304:
case 2802:
case 658:
case 779:
case 3361:
case 3363:
case 207:
case 56:
case 3556:
case 3505:
case 3292:
case 3204:
case 2670:
case 1248:
case 3741:
case 3717:
case 1546:
case 2381:
case 35:
case 2834:
case 315:
case 1162:
case 2010:
case 2773:
case 3425:
case 808:
case 2502:
case 3170:
case 2594:
case 3516:
case 600:
case 3036:
case 159:
case 2493:
case 3085:
case 444:
case 842:
case 3805:
case 2491:
case 1654:
case 1747:
case 1713:
case 2286:
case 2769:
case 3986:
case 2774:
case 2384:
case 2833:
case 2822:
case 2918:
case 413:
case 3201:
case 1372:
case 2051:
case 1782:
case 2053:
case 695:
case 3935:
case 2430:
case 835:
case 3657:
case 3689:
case 787:
case 3525:
case 3220:
case 2494:
case 271:
case 1207:
case 2402:
case 1765:
case 1714:
case 2488:
case 1653:
case 3355:
case 2591:
case 1239:
case 769:
case 2593:
case 2157:
case 2312:
case 1750:
case 2992:
case 683:
case 3799:
case 3855:
case 2812:
case 3461:
case 2552:
case 2236:
case 3564:
case 3426:
case 310:
case 3479:
case 272:
case 737:
case 2148:
case 885:
case 778:
case 851:
case 3178:
case 2333:
case 476:
case 3254:
case 2322:
case 1618:
case 2262:
case 803:
case 72:
case 4060:
case 3356:
case 2954:
case 3563:
case 1700:
case 1289:
case 638:
case 1257:
case 1766:
case 677:
case 898:
case 2390:
case 1603:
case 2139:
case 3415:
case 2910:
case 1601:
case 4006:
case 3579:
case 3936:
case 2881:
case 3251:
case 716:
case 830:
case 1620:
case 1445:
case 960:
case 3228:
case 3368:
case 1721:
case 1723:
case 2480:
case 2549:
case 3699:
case 3861:
case 1217:
case 4015:
case 3406:
case 3455:
case 643:
case 2778:
case 191:
case 2388:
case 3316:
case 2965:
case 102:
case 2394:
case 2982:
case 394:
case 845:
case 2330:
case 262:
case 2277:
case 2583:
case 2908:
case 1624:
case 3826:
case 3879:
case 1346:
case 2581:
case 2498:
case 3213:
case 1974:
case 1867:
case 3247:
case 2484:
case 297:
case 2021:
case 809:
case 327:
case 601:
case 49:
case 2023:
case 2838:
case 1600:
case 2947:
case 2393:
case 692:
case 2032:
case 653:
case 506:
case 832:
case 997:
case 3627:
case 2391:
case 3864:
case 4061:
case 4063:
case 2058:
case 1703:
case 2852:
case 3560:
case 1701:
case 3325:
case 2296:
case 855:
case 81:
case 3214:
case 1973:
case 614:
case 3707:
case 1658:
case 2483:
case 3095:
case 1632:
case 158:
case 2598:
case 4026:
case 2584:
case 689:
case 3739:
case 4079:
case 1623:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758218401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,];
var gg_b = "1758218401/";

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
