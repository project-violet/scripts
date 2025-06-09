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
case 547:
case 3732:
case 3208:
case 316:
case 750:
case 3567:
case 2758:
case 1878:
case 3066:
case 1726:
case 498:
case 3046:
case 3043:
case 1121:
case 2915:
case 2344:
case 2121:
case 1915:
case 663:
case 4053:
case 1639:
case 1852:
case 970:
case 532:
case 804:
case 2445:
case 3781:
case 3186:
case 2622:
case 1757:
case 1488:
case 28:
case 1393:
case 2189:
case 3404:
case 3451:
case 1396:
case 229:
case 588:
case 2673:
case 604:
case 3305:
case 2877:
case 2750:
case 2069:
case 1877:
case 3636:
case 1750:
case 3920:
case 1492:
case 2393:
case 1189:
case 724:
case 4027:
case 3548:
case 2396:
case 1622:
case 726:
case 2870:
case 3568:
case 2488:
case 3207:
case 618:
case 2974:
case 1194:
case 3918:
case 88:
case 531:
case 263:
case 3824:
case 3551:
case 913:
case 3169:
case 3149:
case 1925:
case 339:
case 1588:
case 1716:
case 3102:
case 2925:
case 1111:
case 3448:
case 1205:
case 2307:
case 1592:
case 781:
case 3934:
case 163:
case 1974:
case 2194:
case 4018:
case 1835:
case 3654:
case 2308:
case 195:
case 104:
case 2086:
case 372:
case 4017:
case 2083:
case 3467:
case 1545:
case 2587:
case 740:
case 709:
case 218:
case 3447:
case 1163:
case 1565:
case 1761:
case 557:
case 2166:
case 2565:
case 4010:
case 68:
case 1086:
case 3384:
case 2580:
case 3460:
case 3917:
case 1083:
case 935:
case 206:
case 1308:
case 295:
case 3658:
case 2304:
case 3937:
case 3500:
case 862:
case 4030:
case 976:
case 677:
case 6:
case 849:
case 1190:
case 2095:
case 3623:
case 2779:
case 29:
case 1405:
case 3507:
case 3827:
case 310:
case 3268:
case 756:
case 1304:
case 685:
case 3003:
case 598:
case 3672:
case 1632:
case 159:
case 1859:
case 1815:
case 4038:
case 1042:
case 2499:
case 3722:
case 3387:
case 479:
case 161:
case 3914:
case 2629:
case 1584:
case 3247:
case 3776:
case 3267:
case 885:
case 3650:
case 3508:
case 662:
case 3444:
case 2733:
case 1629:
case 2584:
case 3991:
case 3285:
case 911:
case 3380:
case 3240:
case 2062:
case 3345:
case 261:
case 4014:
case 1978:
case 3853:
case 2042:
case 488:
case 1499:
case 3657:
case 3260:
case 3408:
case 3098:
case 177:
case 1:
case 2287:
case 1265:
case 69:
case 3817:
case 3031:
case 2367:
case 2347:
case 1280:
case 2599:
case 3616:
case 2385:
case 2280:
case 185:
case 1655:
case 3109:
case 2360:
case 2265:
case 3564:
case 2340:
case 1287:
case 2505:
case 2825:
case 3204:
case 3251:
case 2106:
case 1288:
case 3400:
case 1619:
case 3834:
case 1348:
case 249:
case 661:
case 1874:
case 2292:
case 1935:
case 89:
case 2874:
case 1292:
case 3818:
case 4075:
case 3195:
case 3593:
case 41:
case 3641:
case 2348:
case 3596:
case 2288:
case 162:
case 3924:
case 1701:
case 1754:
case 744:
case 1106:
case 3610:
case 1409:
case 2442:
case 881:
case 1286:
case 2775:
case 3582:
case 2462:
case 640:
case 53:
case 1363:
case 1912:
case 1855:
case 1724:
case 1346:
case 998:
case 729:
case 138:
case 2724:
case 2346:
case 3816:
case 2363:
case 265:
case 2366:
case 3813:
case 126:
case 3531:
case 1108:
case 574:
case 3735:
case 1462:
case 470:
case 78:
case 2283:
case 1571:
case 576:
case 3184:
case 150:
case 511:
case 3403:
case 3289:
case 1394:
case 3406:
case 1625:
case 3096:
case 319:
case 3618:
case 407:
case 3349:
case 3369:
case 1005:
case 1495:
case 293:
case 193:
case 840:
case 809:
case 397:
case 3590:
case 2625:
case 3872:
case 704:
case 2976:
case 1196:
case 1193:
case 1791:
case 3007:
case 1659:
case 3497:
case 1832:
case 4036:
case 795:
case 3506:
case 2922:
case 413:
case 2269:
case 1738:
case 3823:
case 3778:
case 2249:
case 109:
case 3211:
case 140:
case 893:
case 626:
case 2202:
case 1249:
case 927:
case 718:
case 1922:
case 3490:
case 1881:
case 638:
case 2832:
case 882:
case 3620:
case 2196:
case 1973:
case 2595:
case 1389:
case 2791:
case 281:
case 1730:
case 824:
case 334:
case 468:
case 3482:
case 2562:
case 328:
case 1164:
case 2737:
case 1509:
case 1829:
case 2542:
case 2164:
case 3266:
case 1542:
case 2321:
case 3243:
case 3777:
case 2144:
case 3850:
case 3431:
case 693:
case 37:
case 181:
case 3008:
case 512:
case 3297:
case 761:
case 2088:
case 4061:
case 1635:
case 691:
case 2449:
case 476:
case 1168:
case 570:
case 932:
case 2469:
case 3589:
case 292:
case 2148:
case 2717:
case 644:
case 3624:
case 1449:
case 2402:
case 947:
case 2168:
case 220:
case 3494:
case 3004:
case 1306:
case 86:
case 2635:
case 2919:
case 1710:
case 1088:
case 1160:
case 2065:
case 3362:
case 2045:
case 1087:
case 3913:
case 254:
case 1586:
case 2271:
case 3774:
case 2147:
case 2080:
case 66:
case 2167:
case 2734:
case 891:
case 156:
case 154:
case 1271:
case 1080:
case 2140:
case 3725:
case 2087:
case 3801:
case 4016:
case 988:
case 2160:
case 507:
case 1065:
case 358:
case 2929:
case 2262:
case 620:
case 1720:
case 2242:
case 3950:
case 1483:
case 244:
case 854:
case 1331:
case 4057:
case 2727:
case 3614:
case 2678:
case 3047:
case 931:
case 3180:
case 291:
case 2331:
case 3421:
case 1382:
case 3957:
case 4050:
case 2483:
case 3165:
case 2486:
case 144:
case 692:
case 3691:
case 2398:
case 3546:
case 1929:
case 1262:
case 3145:
case 2720:
case 3543:
case 3203:
case 2569:
case 3489:
case 2151:
case 3206:
case 16:
case 4023:
case 3715:
case 777:
case 7:
case 1822:
case 2549:
case 2670:
case 4026:
case 1677:
case 1981:
case 3048:
case 1873:
case 3192:
case 4072:
case 1876:
case 2873:
case 4058:
case 568:
case 2677:
case 91:
case 2295:
case 2728:
case 3923:
case 3188:
case 1397:
case 1549:
case 2822:
case 656:
case 1670:
case 1569:
case 1151:
case 1104:
case 2771:
case 1993:
case 2218:
case 3327:
case 1996:
case 3274:
case 98:
case 1234:
case 3905:
case 1359:
case 493:
case 813:
case 1430:
case 929:
case 1851:
case 3320:
case 798:
case 3225:
case 2430:
case 668:
case 4005:
case 303:
case 3136:
case 482:
case 554:
case 3731:
case 556:
case 1771:
case 1173:
case 1437:
case 1218:
case 1176:
case 3892:
case 426:
case 868:
case 3478:
case 170:
case 1621:
case 3999:
case 520:
case 3865:
case 1944:
case 2315:
case 3012:
case 1054:
case 1491:
case 366:
case 3356:
case 1964:
case 3887:
case 2491:
case 465:
case 733:
case 2944:
case 1210:
case 2621:
case 2217:
case 3179:
case 2438:
case 325:
case 1139:
case 1795:
case 1646:
case 1643:
case 1228:
case 2079:
case 481:
case 3101:
case 2256:
case 2840:
case 3703:
case 2253:
case 3706:
case 56:
case 3215:
case 2514:
case 1840:
case 1253:
case 2663:
case 995:
case 607:
case 3039:
case 1885:
case 2847:
case 3984:
case 2795:
case 2591:
case 2867:
case 2646:
case 3317:
case 2228:
case 591:
case 963:
case 1907:
case 2848:
case 2611:
case 1220:
case 2762:
case 213:
case 2742:
case 3022:
case 3259:
case 1475:
case 3577:
case 409:
case 2694:
case 317:
case 35:
case 3602:
case 1868:
case 2424:
case 1848:
case 1013:
case 3987:
case 1352:
case 4045:
case 2510:
case 2129:
case 3314:
case 3671:
case 1631:
case 1428:
case 4065:
case 747:
case 456:
case 3789:
case 1698:
case 454:
case 1517:
case 4080:
case 3391:
case 1456:
case 1453:
case 3980:
case 732:
case 355:
case 2013:
case 4087:
case 1864:
case 1510:
case 2061:
case 2904:
case 788:
case 959:
case 1224:
case 1690:
case 2041:
case 4088:
case 13:
case 1783:
case 2518:
case 2132:
case 492:
case 1786:
case 2370:
case 274:
case 276:
case 812:
case 1420:
case 1534:
case 2893:
case 176:
case 3172:
case 3330:
case 2420:
case 2783:
case 302:
case 3459:
case 99:
case 1697:
case 1132:
case 526:
case 1370:
case 174:
case 2224:
case 483:
case 2377:
case 779:
case 3126:
case 3525:
case 3123:
case 360:
case 1061:
case 1951:
case 2023:
case 962:
case 1434:
case 1520:
case 2026:
case 611:
case 2237:
case 3474:
case 1058:
case 1968:
case 2606:
case 874:
case 1335:
case 900:
case 949:
case 212:
case 3270:
case 731:
case 3081:
case 1948:
case 581:
case 32:
case 1527:
case 1807:
case 2058:
case 2968:
case 83:
case 2335:
case 3766:
case 389:
case 1237:
case 3559:
case 3161:
case 46:
case 1023:
case 3743:
case 3746:
case 1026:
case 63:
case 1960:
case 2553:
case 540:
case 2155:
case 1238:
case 2769:
case 2214:
case 3278:
case 3116:
case 3113:
case 1940:
case 1808:
case 1291:
case 3642:
case 2410:
case 1410:
case 1057:
case 3794:
case 2985:
case 2808:
case 491:
case 345:
case 1214:
case 676:
case 977:
case 9:
case 3252:
case 2940:
case 2417:
case 1553:
case 1155:
case 674:
case 3273:
case 3276:
case 1027:
case 369:
case 3118:
case 1236:
case 2558:
case 2600:
case 1607:
case 3059:
case 993:
case 2020:
case 1803:
case 2911:
case 1806:
case 1020:
case 3740:
case 2523:
case 2125:
case 827:
case 133:
case 2236:
case 1558:
case 2572:
case 3419:
case 2027:
case 1174:
case 59:
case 627:
case 2028:
case 3455:
case 924:
case 3529:
case 3110:
case 1943:
case 1053:
case 3301:
case 2608:
case 1056:
case 559:
case 2053:
case 1550:
case 965:
case 2963:
case 2966:
case 1608:
case 3862:
case 198:
case 3842:
case 707:
case 3015:
case 2943:
case 2279:
case 215:
case 3768:
case 2557:
case 4086:
case 394:
case 2831:
case 4083:
case 981:
case 3429:
case 2792:
case 2254:
case 2201:
case 3555:
case 3153:
case 3699:
case 1457:
case 1921:
case 418:
case 2457:
case 2010:
case 1115:
case 1513:
case 1516:
case 341:
case 1201:
case 562:
case 713:
case 3212:
case 1898:
case 1339:
case 1792:
case 2882:
case 815:
case 3983:
case 3128:
case 1450:
case 500:
case 633:
case 3379:
case 549:
case 1426:
case 2890:
case 1780:
case 1018:
case 1693:
case 615:
case 1472:
case 2787:
case 1745:
case 1541:
case 1696:
case 127:
case 2322:
case 1897:
case 323:
case 1561:
case 2765:
case 2897:
case 3481:
case 2693:
case 909:
case 1458:
case 2696:
case 227:
case 2780:
case 768:
case 3074:
case 1373:
case 3333:
case 585:
case 1034:
case 2866:
case 1685:
case 279:
case 3962:
case 1014:
case 3229:
case 2863:
case 3316:
case 3700:
case 2038:
case 188:
case 2250:
case 2355:
case 1660:
case 1257:
case 2091:
case 2401:
case 1640:
case 1091:
case 1401:
case 2579:
case 2640:
case 2660:
case 2257:
case 776:
case 3707:
case 1038:
case 1667:
case 1355:
case 1866:
case 2685:
case 4062:
case 179:
case 461:
case 2014:
case 3078:
case 3522:
case 3802:
case 1811:
case 2903:
case 1037:
case 1319:
case 1226:
case 3077:
case 459:
case 992:
case 711:
case 3576:
case 1135:
case 1533:
case 3708:
case 2030:
case 1272:
case 2894:
case 147:
case 1536:
case 2272:
case 920:
case 1258:
case 49:
case 3281:
case 2784:
case 3995:
case 132:
case 3070:
case 2226:
case 2223:
case 983:
case 3869:
case 2668:
case 3361:
case 3849:
case 157:
case 1436:
case 462:
case 1177:
case 3692:
case 400:
case 3358:
case 3035:
case 832:
case 1075:
case 2170:
case 506:
case 11:
case 3422:
case 2075:
case 1332:
case 2990:
case 847:
case 21:
case 2381:
case 1604:
case 390:
case 2261:
case 2436:
case 3219:
case 3744:
case 1997:
case 2177:
case 3326:
case 2433:
case 879:
case 3255:
case 2554:
case 2821:
case 2329:
case 2216:
case 2178:
case 1152:
case 2213:
case 946:
case 3439:
case 647:
case 485:
case 3883:
case 1931:
case 2982:
case 3886:
case 3665:
case 712:
case 3645:
case 386:
case 4071:
case 1178:
case 477:
case 3680:
case 632:
case 1821:
case 1501:
case 3138:
case 684:
case 1869:
case 853:
case 1341:
case 2077:
case 3903:
case 2522:
case 987:
case 686:
case 755:
case 3030:
case 3894:
case 1070:
case 2232:
case 2573:
case 1995:
case 2175:
case 1281:
case 516:
case 1232:
case 1175:
case 143:
case 2281:
case 10:
case 3536:
case 975:
case 410:
case 1708:
case 3272:
case 3811:
case 1522:
case 3668:
case 2341:
case 3648:
case 1077:
case 3226:
case 3319:
case 2124:
case 2942:
case 3355:
case 3846:
case 3667:
case 2700:
case 2316:
case 2229:
case 690:
case 2962:
case 379:
case 3866:
case 2313:
case 3647:
case 2052:
case 3091:
case 121:
case 3401:
case 1707:
case 571:
case 2539:
case 3660:
case 3257:
case 3640:
case 2412:
case 884:
case 221:
case 2078:
case 3014:
case 1229:
case 1962:
case 3685:
case 1052:
case 388:
case 1700:
case 622:
case 958:
case 3213:
case 3216:
case 3329:
case 3501:
case 1512:
case 2350:
case 473:
case 184:
case 567:
case 3982:
case 2883:
case 2971:
case 1191:
case 2687:
case 1645:
case 186:
case 1796:
case 2793:
case 331:
case 2191:
case 1971:
case 2645:
case 286:
case 2796:
case 2357:
case 3931:
case 2138:
case 643:
case 3479:
case 1439:
case 778:
case 253:
case 2473:
case 2692:
case 1326:
case 1688:
case 2422:
case 3332:
case 4090:
case 80:
case 2358:
case 572:
case 290:
case 3381:
case 31:
case 701:
case 3075:
case 2326:
case 2219:
case 2323:
case 3241:
case 153:
case 3261:
case 1137:
case 2764:
case 414:
case 1117:
case 3028:
case 2239:
case 3413:
case 3416:
case 894:
case 3608:
case 3550:
case 4063:
case 4043:
case 2529:
case 1684:
case 2015:
case 1110:
case 408:
case 1529:
case 3946:
case 680:
case 652:
case 2862:
case 1354:
case 3966:
case 3053:
case 2768:
case 3557:
case 251:
case 623:
case 3279:
case 2117:
case 852:
case 880:
case 3600:
case 2767:
case 2895:
case 725:
case 3174:
case 2747:
case 269:
case 4094:
case 2273:
case 2532:
case 1902:
case 3911:
case 137:
case 823:
case 1760:
case 2222:
case 2059:
case 2760:
case 766:
case 1222:
case 1969:
case 2902:
case 3806:
case 605:
case 3523:
case 1747:
case 2785:
case 169:
case 1118:
case 471:
case 3233:
case 1767:
case 2134:
case 1895:
case 3441:
case 3373:
case 280:
case 3989:
case 1074:
case 2127:
case 3376:
case 3034:
case 0:
case 1336:
case 2605:
case 1481:
case 3322:
case 2025:
case 1120:
case 842:
case 1025:
case 3696:
case 3745:
case 2120:
case 2481:
case 2074:
case 3018:
case 3792:
case 296:
case 205:
case 2429:
case 3339:
case 936:
case 1379:
case 1983:
case 3831:
case 3450:
case 1986:
case 472:
case 75:
case 717:
case 3115:
case 3513:
case 4021:
case 2699:
case 2704:
case 3898:
case 2555:
case 3254:
case 3201:
case 1751:
case 1704:
case 1555:
case 1156:
case 241:
case 3921:
case 3788:
case 3457:
case 1699:
case 3010:
case 2379:
case 2983:
case 2128:
case 194:
case 2986:
case 3882:
case 97:
case 3644:
case 196:
case 105:
case 1721:
case 1805:
case 2337:
case 3904:
case 3061:
case 2158:
case 2992:
case 1330:
case 1235:
case 3132:
case 374:
case 1459:
case 3697:
case 3181:
case 1574:
case 3783:
case 3420:
case 1158:
case 3534:
case 910:
case 1992:
case 2235:
case 2525:
case 2123:
case 3377:
case 3224:
case 1019:
case 889:
case 3682:
case 2150:
case 1338:
case 2671:
case 3378:
case 3129:
case 2314:
case 3510:
case 1945:
case 1980:
case 689:
case 3456:
case 801:
case 255:
case 678:
case 1415:
case 3517:
case 743:
case 2391:
case 311:
case 3698:
case 1314:
case 3013:
case 2945:
case 3352:
case 519:
case 3428:
case 3631:
case 2338:
case 845:
case 2711:
case 2113:
case 1252:
case 1029:
case 3769:
case 3556:
case 4060:
case 3967:
case 1609:
case 2642:
case 3410:
case 3057:
case 1794:
case 3947:
case 660:
case 4085:
case 855:
case 101:
case 3291:
case 3985:
case 3808:
case 4047:
case 1642:
case 2609:
case 3238:
case 753:
case 1711:
case 2252:
case 1515:
case 1278:
case 1116:
case 3702:
case 245:
case 1763:
case 3418:
case 655:
case 3026:
case 1277:
case 1324:
case 3023:
case 1141:
case 12:
case 2270:
case 786:
case 1032:
case 312:
case 3072:
case 3606:
case 4068:
case 57:
case 3230:
case 3058:
case 1081:
case 3948:
case 22:
case 2277:
case 2746:
case 3119:
case 178:
case 2324:
case 2743:
case 3800:
case 3520:
case 2763:
case 2161:
case 289:
case 2766:
case 914:
case 1328:
case 617:
case 916:
case 3414:
case 2880:
case 2356:
case 1887:
case 2845:
case 266:
case 65:
case 2012:
case 2353:
case 3210:
case 737:
case 4044:
case 2865:
case 1686:
case 2683:
case 908:
case 3944:
case 1865:
case 2686:
case 3964:
case 2887:
case 1012:
case 699:
case 370:
case 2452:
case 1478:
case 3438:
case 2179:
case 1999:
case 3217:
case 1477:
case 1731:
case 1136:
case 751:
case 3218:
case 3176:
case 3575:
case 1798:
case 1225:
case 419:
case 1320:
case 103:
case 14:
case 899:
case 2470:
case 2905:
case 203:
case 24:
case 1470:
case 3359:
case 3430:
case 2798:
case 3851:
case 497:
case 3996:
case 971:
case 2133:
case 2535:
case 2477:
case 2731:
case 85:
case 1782:
case 3868:
case 1602:
case 2570:
case 2318:
case 1076:
case 1334:
case 4007:
case 313:
case 3742:
case 741:
case 1022:
case 117:
case 299:
case 939:
case 625:
case 1435:
case 3325:
case 84:
case 3220:
case 803:
case 2435:
case 558:
case 2259:
case 2022:
case 796:
case 2334:
case 3907:
case 3424:
case 1669:
case 3530:
case 2602:
case 1649:
case 1570:
case 666:
case 25:
case 1318:
case 3885:
case 3908:
case 3079:
case 1317:
case 64:
case 3860:
case 428:
case 2578:
case 1552:
case 2310:
case 2706:
case 2703:
case 2101:
case 723:
case 1703:
case 1154:
case 3538:
case 47:
case 752:
case 3228:
case 3591:
case 3646:
case 3867:
case 2984:
case 3666:
case 4008:
case 2039:
case 1298:
case 1854:
case 3045:
case 1521:
case 2913:
case 54:
case 503:
case 2362:
case 3065:
case 1309:
case 2342:
case 858:
case 1446:
case 248:
case 1443:
case 3718:
case 3147:
case 354:
case 1466:
case 2463:
case 2466:
case 2231:
case 455:
case 148:
case 1282:
case 3734:
case 4055:
case 3160:
case 1342:
case 2298:
case 2854:
case 1913:
case 2521:
case 2801:
case 1362:
case 3306:
case 1051:
case 1004:
case 3710:
case 3088:
case 4019:
case 392:
case 525:
case 1395:
case 943:
case 1624:
case 2411:
case 175:
case 1411:
case 320:
case 3092:
case 658:
case 3402:
case 2395:
case 1589:
case 2290:
case 2624:
case 3717:
case 3148:
case 2941:
case 383:
case 1675:
case 564:
case 187:
case 2961:
case 2494:
case 2004:
case 3549:
case 887:
case 1926:
case 1188:
case 2715:
case 3753:
case 1630:
case 2489:
case 2203:
case 3756:
case 2637:
case 1972:
case 2958:
case 2068:
case 922:
case 1594:
case 2833:
case 2048:
case 2836:
case 2594:
case 1833:
case 1048:
case 42:
case 4032:
case 3295:
case 1836:
case 1637:
case 1192:
case 2972:
case 990:
case 3873:
case 230:
case 489:
case 2630:
case 1203:
case 3822:
case 3502:
case 648:
case 2923:
case 2188:
case 1715:
case 1759:
case 1566:
case 344:
case 2950:
case 3242:
case 1145:
case 3262:
case 2040:
case 675:
case 3929:
case 258:
case 1546:
case 3678:
case 2614:
case 1180:
case 1047:
case 55:
case 1067:
case 1421:
case 1638:
case 2421:
case 2638:
case 1879:
case 391:
case 1371:
case 3839:
case 986:
case 1614:
case 2180:
case 1085:
case 2047:
case 3652:
case 1187:
case 2145:
case 2543:
case 4029:
case 2691:
case 3398:
case 2546:
case 3486:
case 2566:
case 2165:
case 3483:
case 2563:
case 1060:
case 969:
case 2289:
case 1590:
case 2093:
case 2403:
case 555:
case 67:
case 1634:
case 393:
case 2841:
case 2349:
case 3311:
case 219:
case 197:
case 2618:
case 1861:
case 1349:
case 937:
case 119:
case 297:
case 1618:
case 44:
case 1841:
case 634:
case 1369:
case 3107:
case 382:
case 716:
case 1096:
case 1093:
case 1403:
case 2582:
case 3462:
case 1735:
case 836:
case 3775:
case 324:
case 3442:
case 560:
case 1617:
case 338:
case 1598:
case 2954:
case 1813:
case 828:
case 466:
case 1954:
case 1064:
case 3912:
case 2816:
case 3363:
case 2617:
case 3343:
case 3724:
case 2598:
case 3855:
case 1044:
case 3286:
case 3099:
case 1582:
case 425:
case 17:
case 994:
case 767:
case 2857:
case 3084:
case 2770:
case 381:
case 3939:
case 697:
case 3542:
case 3471:
case 1246:
case 1431:
case 228:
case 1777:
case 1243:
case 128:
case 3321:
case 3509:
case 2263:
case 578:
case 2266:
case 1656:
case 2008:
case 4039:
case 619:
case 1653:
case 27:
case 2979:
case 1857:
case 134:
case 1770:
case 2386:
case 1933:
case 1858:
case 2872:
case 980:
case 1294:
case 952:
case 499:
case 2627:
case 3714:
case 2778:
case 3249:
case 2823:
case 2503:
case 545:
case 1490:
case 3922:
case 2826:
case 1823:
case 1503:
case 1105:
case 897:
case 1506:
case 2752:
case 1627:
case 309:
case 3193:
case 3595:
case 45:
case 3196:
case 2294:
case 2620:
case 2936:
case 1007:
case 2933:
case 3659:
case 1497:
case 1853:
case 2387:
case 1240:
case 2722:
case 1365:
case 3009:
case 3499:
case 1260:
case 2508:
case 3182:
case 775:
case 2267:
case 2650:
case 1380:
case 2247:
case 2171:
case 1991:
case 1464:
case 2773:
case 2380:
case 2285:
case 1171:
case 421:
case 1508:
case 2444:
case 3733:
case 569:
case 1267:
case 1722:
case 2657:
case 2260:
case 787:
case 3815:
case 2938:
case 4078:
case 2853:
case 1914:
case 3198:
case 1387:
case 2345:
case 2240:
case 1672:
case 2500:
case 2658:
case 3351:
case 359:
case 3859:
case 1388:
case 4077:
case 3632:
case 3095:
case 3405:
case 1626:
case 3970:
case 443:
case 40:
case 1623:
case 1507:
case 551:
case 1930:
case 748:
case 2268:
case 2507:
case 2827:
case 2930:
case 3190:
case 902:
case 39:
case 2623:
case 3779:
case 673:
case 3681:
case 2388:
case 3977:
case 2672:
case 1500:
case 2496:
case 2006:
case 1658:
case 541:
case 1407:
case 978:
case 1712:
case 3106:
case 453:
case 3701:
case 1818:
case 4035:
case 1195:
case 1593:
case 2400:
case 2090:
case 422:
case 2834:
case 2641:
case 2596:
case 2195:
case 1975:
case 1400:
case 1090:
case 1834:
case 3935:
case 594:
case 3874:
case 490:
case 3368:
case 2661:
case 2712:
case 989:
case 1204:
case 1251:
case 2097:
case 3288:
case 758:
case 1564:
case 1810:
case 2142:
case 273:
case 3287:
case 610:
case 2162:
case 1544:
case 3599:
case 385:
case 3347:
case 3367:
case 2031:
case 484:
case 2082:
case 552:
case 580:
case 3071:
case 1616:
case 1613:
case 3385:
case 945:
case 523:
case 377:
case 1162:
case 3:
case 1408:
case 1098:
case 3484:
case 3265:
case 1142:
case 2109:
case 2927:
case 1548:
case 2451:
case 469:
case 2094:
case 2830:
case 3622:
case 839:
case 1633:
case 2305:
case 2200:
case 442:
case 3673:
case 2729:
case 3492:
case 1920:
case 1837:
case 1011:
case 329:
case 3676:
case 1729:
case 3049:
case 2011:
case 672:
case 3959:
case 1200:
case 2568:
case 3488:
case 3870:
case 867:
case 1927:
case 3396:
case 1404:
case 1451:
case 3393:
case 2891:
case 3758:
case 872:
case 214:
case 2732:
case 1186:
case 1928:
case 1781:
case 1679:
case 964:
case 1540:
case 2043:
case 3915:
case 2046:
case 797:
case 2956:
case 1560:
case 3639:
case 2953:
case 966:
case 1956:
case 3364:
case 3480:
case 2560:
case 1953:
case 2814:
case 1063:
case 3878:
case 2679:
case 4015:
case 2540:
case 3121:
case 1838:
case 3726:
case 719:
case 3284:
case 1732:
case 3465:
case 1399:
case 2781:
case 50:
case 1891:
case 925:
case 1567:
case 3445:
case 639:
case 3772:
case 116:
case 1917:
case 3083:
case 3299:
case 1460:
case 816:
case 494:
case 1384:
case 272:
case 3086:
case 496:
case 2654:
case 405:
case 3308:
case 1440:
case 1485:
case 671:
case 318:
case 1719:
case 1244:
case 3587:
case 3146:
case 2719:
case 2244:
case 1910:
case 1021:
case 3143:
case 3163:
case 2264:
case 1654:
case 306:
case 3612:
case 2440:
case 172:
case 1875:
case 363:
case 3592:
case 77:
case 480:
case 452:
case 1293:
case 3835:
case 584:
case 3974:
case 3713:
case 1102:
case 2824:
case 2504:
case 614:
case 1824:
case 2448:
case 1755:
case 139:
case 2468:
case 3588:
case 1149:
case 616:
case 2089:
case 2293:
case 1918:
case 3194:
case 2875:
case 736:
case 2934:
case 3307:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749506401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,];
var gg_b = "1749506401/";

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
