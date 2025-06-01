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
case 349:
case 1498:
case 935:
case 2242:
case 1007:
case 3016:
case 3512:
case 2758:
case 3916:
case 1292:
case 376:
case 2448:
case 3259:
case 2270:
case 678:
case 2321:
case 1565:
case 2133:
case 1506:
case 1496:
case 1002:
case 652:
case 35:
case 3954:
case 2555:
case 2413:
case 191:
case 3918:
case 2635:
case 136:
case 235:
case 2839:
case 1705:
case 1297:
case 3275:
case 1766:
case 1213:
case 880:
case 3060:
case 2008:
case 3081:
case 1246:
case 1447:
case 1979:
case 2801:
case 2908:
case 3352:
case 188:
case 3310:
case 3185:
case 3128:
case 3960:
case 3469:
case 816:
case 2006:
case 433:
case 251:
case 324:
case 1055:
case 1470:
case 1274:
case 3704:
case 3564:
case 623:
case 1710:
case 2161:
case 3126:
case 2180:
case 3886:
case 2906:
case 2762:
case 3635:
case 1721:
case 3413:
case 1358:
case 1882:
case 3839:
case 2275:
case 950:
case 724:
case 1122:
case 2811:
case 25:
case 881:
case 1203:
case 1314:
case 3773:
case 2018:
case 3555:
case 2630:
case 864:
case 1127:
case 1887:
case 2366:
case 2305:
case 3758:
case 2916:
case 3270:
case 1093:
case 1691:
case 276:
case 144:
case 2259:
case 249:
case 3714:
case 1560:
case 2512:
case 567:
case 3298:
case 2357:
case 3180:
case 2886:
case 3906:
case 1917:
case 3762:
case 3820:
case 19:
case 1634:
case 3065:
case 3502:
case 3492:
case 1749:
case 2704:
case 1518:
case 1459:
case 1950:
case 685:
case 2981:
case 3801:
case 924:
case 3296:
case 2403:
case 2310:
case 2185:
case 2128:
case 3908:
case 2825:
case 898:
case 1543:
case 776:
case 1012:
case 1475:
case 2081:
case 2683:
case 960:
case 1420:
case 3736:
case 1338:
case 333:
case 2870:
case 3176:
case 1029:
case 2530:
case 1983:
case 557:
case 1929:
case 3738:
case 2612:
case 3178:
case 2541:
case 1660:
case 1897:
case 3875:
case 4060:
case 820:
case 4054:
case 76:
case 2723:
case 1846:
case 3190:
case 2201:
case 4018:
case 45:
case 3288:
case 3602:
case 1534:
case 1119:
case 3487:
case 2693:
case 1941:
case 2529:
case 1145:
case 899:
case 1874:
case 1930:
case 683:
case 534:
case 2583:
case 2195:
case 809:
case 4016:
case 1616:
case 2371:
case 449:
case 2424:
case 2220:
case 1643:
case 748:
case 3286:
case 2738:
case 2679:
case 3612:
case 679:
case 5:
case 1109:
case 784:
case 3239:
case 2144:
case 4008:
case 2178:
case 2211:
case 1194:
case 3847:
case 3530:
case 821:
case 348:
case 1488:
case 451:
case 1287:
case 1869:
case 3034:
case 36:
case 1665:
case 3617:
case 761:
case 3934:
case 2535:
case 1163:
case 2607:
case 3898:
case 3583:
case 1177:
case 1737:
case 3332:
case 2286:
case 3371:
case 3693:
case 1323:
case 562:
case 961:
case 3201:
case 1771:
case 261:
case 2190:
case 3789:
case 3896:
case 1935:
case 3337:
case 984:
case 546:
case 1172:
case 2602:
case 579:
case 1140:
case 1035:
case 2482:
case 3723:
case 3664:
case 2813:
case 1664:
case 3411:
case 2846:
case 4064:
case 1789:
case 3732:
case 2618:
case 3771:
case 2119:
case 3172:
case 928:
case 444:
case 3323:
case 1693:
case 1529:
case 2874:
case 597:
case 2030:
case 717:
case 507:
case 3177:
case 1195:
case 2930:
case 894:
case 2616:
case 1220:
case 1332:
case 3389:
case 1934:
case 49:
case 2224:
case 3486:
case 728:
case 1617:
case 40:
case 2338:
case 1870:
case 4017:
case 697:
case 3194:
case 868:
case 3425:
case 2029:
case 148:
case 2983:
case 859:
case 2681:
case 273:
case 2929:
case 4050:
case 1541:
case 2660:
case 400:
case 217:
case 1239:
case 3282:
case 2336:
case 160:
case 2897:
case 3608:
case 1607:
case 289:
case 4007:
case 2737:
case 3643:
case 3941:
case 3030:
case 3848:
case 2935:
case 3618:
case 161:
case 3119:
case 841:
case 626:
case 1602:
case 1288:
case 2131:
case 328:
case 3654:
case 2035:
case 3439:
case 989:
case 491:
case 373:
case 4079:
case 2109:
case 3336:
case 2608:
case 1875:
case 3660:
case 1211:
case 488:
case 645:
case 2194:
case 674:
case 2803:
case 526:
case 3983:
case 2425:
case 4055:
case 2869:
case 3892:
case 1176:
case 1859:
case 2665:
case 3338:
case 2486:
case 2163:
case 3420:
case 3543:
case 2213:
case 2304:
case 300:
case 3516:
case 3012:
case 3475:
case 1497:
case 1296:
case 3912:
case 2399:
case 3362:
case 2447:
case 1801:
case 288:
case 390:
case 736:
case 3017:
case 1006:
case 1502:
case 988:
case 1065:
case 2055:
case 2248:
case 151:
case 2274:
case 543:
case 1161:
case 2955:
case 1298:
case 1820:
case 39:
case 692:
case 3917:
case 2442:
case 2151:
case 701:
case 1180:
case 3367:
case 3560:
case 489:
case 592:
case 3581:
case 1579:
case 2184:
case 936:
case 1758:
case 2292:
case 375:
case 611:
case 901:
case 2768:
case 1321:
case 1474:
case 3093:
case 2565:
case 1555:
case 1773:
case 3964:
case 3203:
case 3314:
case 4035:
case 1413:
case 3721:
case 236:
case 291:
case 3122:
case 2766:
case 135:
case 1446:
case 2705:
case 3358:
case 1357:
case 3752:
case 229:
case 3710:
case 610:
case 900:
case 2917:
case 1886:
case 2367:
case 2017:
case 990:
case 3055:
case 3248:
case 124:
case 1981:
case 4029:
case 2950:
case 3979:
case 3399:
case 2362:
case 1629:
case 3447:
case 90:
case 686:
case 1960:
case 1128:
case 1403:
case 388:
case 290:
case 3757:
case 775:
case 2543:
case 1060:
case 744:
case 2475:
case 3079:
case 3246:
case 4083:
case 473:
case 1683:
case 1368:
case 1918:
case 638:
case 2064:
case 70:
case 3297:
case 3766:
case 1275:
case 2882:
case 2358:
case 1054:
case 2122:
case 872:
case 15:
case 3496:
case 3002:
case 3506:
case 1517:
case 3565:
case 944:
case 729:
case 586:
case 79:
case 2314:
case 1018:
case 2127:
case 3907:
case 1916:
case 1305:
case 275:
case 2269:
case 2700:
case 858:
case 2691:
case 2093:
case 1259:
case 2356:
case 4041:
case 3498:
case 1043:
case 2993:
case 2373:
case 510:
case 3184:
case 869:
case 2581:
case 3824:
case 1169:
case 2658:
case 2937:
case 366:
case 3170:
case 2876:
case 2853:
case 1426:
case 2538:
case 659:
case 640:
case 1863:
case 3142:
case 2878:
case 1666:
case 1222:
case 807:
case 4005:
case 594:
case 1330:
case 2844:
case 897:
case 839:
case 1894:
case 3233:
case 471:
case 2071:
case 2673:
case 1428:
case 2032:
case 64:
case 1103:
case 3196:
case 914:
case 604:
case 3729:
case 393:
case 1938:
case 4057:
case 1657:
case 2285:
case 54:
case 1872:
case 1537:
case 2422:
case 1877:
case 3261:
case 1610:
case 119:
case 2662:
case 2226:
case 1329:
case 3280:
case 214:
case 3589:
case 2233:
case 3536:
case 1923:
case 3071:
case 1023:
case 3391:
case 3971:
case 3932:
case 3175:
case 3844:
case 187:
case 1461:
case 3853:
case 2741:
case 3037:
case 577:
case 1284:
case 495:
case 3538:
case 165:
case 2730:
case 1192:
case 3937:
case 703:
case 2170:
case 4000:
case 845:
case 4049:
case 826:
case 1845:
case 314:
case 2523:
case 2198:
case 903:
case 613:
case 2280:
case 1146:
case 766:
case 3667:
case 1433:
case 3285:
case 1819:
case 3573:
case 3755:
case 27:
case 3381:
case 1379:
case 3445:
case 2253:
case 3052:
case 1263:
case 3010:
case 1209:
case 163:
case 2712:
case 3779:
case 3638:
case 2750:
case 3957:
case 1355:
case 2111:
case 843:
case 2244:
case 1490:
case 1500:
case 515:
case 3057:
case 256:
case 795:
case 2431:
case 2015:
case 3419:
case 155:
case 3558:
case 3343:
case 2921:
case 2494:
case 371:
case 1718:
case 3101:
case 2188:
case 2125:
case 1307:
case 3905:
case 2885:
case 2828:
case 1549:
case 3005:
case 2599:
case 1754:
case 2623:
case 2021:
case 2764:
case 756:
case 1302:
case 295:
case 1716:
case 1453:
case 2826:
case 196:
case 3318:
case 131:
case 2463:
case 3880:
case 1743:
case 2900:
case 2793:
case 2000:
case 1515:
case 205:
case 1568:
case 2419:
case 1067:
case 669:
case 3750:
case 13:
case 1317:
case 3365:
case 3712:
case 2638:
case 2779:
case 3440:
case 3244:
case 2514:
case 2957:
case 1708:
case 127:
case 3111:
case 3253:
case 1495:
case 771:
case 1566:
case 3949:
case 2052:
case 2556:
case 414:
case 2952:
case 2636:
case 2755:
case 3308:
case 2910:
case 1312:
case 1765:
case 2445:
case 1962:
case 3049:
case 3717:
case 1557:
case 1364:
case 81:
case 3793:
case 2567:
case 305:
case 2354:
case 2861:
case 2295:
case 947:
case 2707:
case 4037:
case 3186:
case 1851:
case 1014:
case 3900:
case 1637:
case 2968:
case 2318:
case 569:
case 3409:
case 3599:
case 2562:
case 3623:
case 1393:
case 1510:
case 3764:
case 1973:
case 271:
case 1956:
case 4071:
case 2343:
case 558:
case 3504:
case 2316:
case 2905:
case 1219:
case 3885:
case 182:
case 118:
case 3188:
case 1494:
case 1290:
case 3073:
case 4089:
case 1921:
case 3632:
case 3956:
case 2231:
case 1125:
case 318:
case 68:
case 616:
case 2549:
case 1828:
case 2272:
case 1409:
case 931:
case 532:
case 487:
case 2478:
case 3552:
case 3056:
case 3393:
case 1021:
case 2240:
case 1623:
case 2716:
case 3958:
case 2302:
case 2277:
case 2453:
case 296:
case 680:
case 1900:
case 2743:
case 3014:
case 1463:
case 3914:
case 1000:
case 3364:
case 1793:
case 206:
case 2476:
case 2515:
case 2004:
case 2827:
case 955:
case 3350:
case 852:
case 17:
case 2999:
case 3765:
case 1276:
case 3566:
case 1477:
case 1253:
case 963:
case 580:
case 3884:
case 2263:
case 1712:
case 706:
case 2209:
case 632:
case 33:
case 2781:
case 1750:
case 1278:
case 327:
case 170:
case 2355:
case 3708:
case 2822:
case 2760:
case 2182:
case 2490:
case 156:
case 3568:
case 1431:
case 3067:
case 1015:
case 1068:
case 306:
case 2364:
case 918:
case 727:
case 2058:
case 2245:
case 1861:
case 1707:
case 2958:
case 3277:
case 1295:
case 3743:
case 2014:
case 698:
case 1880:
case 331:
case 1318:
case 1120:
case 396:
case 2637:
case 867:
case 730:
case 1066:
case 1005:
case 2510:
case 3444:
case 2552:
case 1101:
case 2632:
case 2956:
case 2671:
case 2073:
case 1343:
case 1702:
case 1905:
case 2568:
case 3294:
case 1833:
case 1558:
case 355:
case 2067:
case 930:
case 664:
case 4038:
case 23:
case 3781:
case 1779:
case 2967:
case 2317:
case 3209:
case 3760:
case 1514:
case 3182:
case 3822:
case 2708:
case 2062:
case 2566:
case 927:
case 2505:
case 2495:
case 3099:
case 1010:
case 3904:
case 93:
case 3263:
case 782:
case 2124:
case 3827:
case 1636:
case 508:
case 4036:
case 1445:
case 2962:
case 2706:
case 2765:
case 1381:
case 4067:
case 1890:
case 699:
case 1667:
case 2938:
case 3819:
case 2657:
case 1285:
case 3113:
case 2537:
case 427:
case 2038:
case 3146:
case 2840:
case 1334:
case 2652:
case 2610:
case 1662:
case 1226:
case 4062:
case 620:
case 857:
case 2383:
case 3649:
case 2571:
case 3148:
case 114:
case 2532:
case 2036:
case 4058:
case 2169:
case 3192:
case 2227:
case 1658:
case 1159:
case 3335:
case 2668:
case 1937:
case 1614:
case 3461:
case 1538:
case 2426:
case 353:
case 3284:
case 3480:
case 2863:
case 520:
case 1735:
case 2809:
case 1656:
case 1971:
case 1391:
case 3621:
case 2666:
case 2605:
case 1878:
case 1844:
case 509:
case 3197:
case 1175:
case 719:
case 482:
case 537:
case 418:
case 3923:
case 2341:
case 4073:
case 1536:
case 52:
case 2428:
case 1032:
case 3089:
case 2649:
case 3383:
case 2734:
case 2174:
case 787:
case 3532:
case 3036:
case 3571:
case 1604:
case 1198:
case 319:
case 1523:
case 3936:
case 3652:
case 1484:
case 3329:
case 1699:
case 2113:
case 765:
case 3537:
case 463:
case 103:
case 3038:
case 193:
case 1729:
case 753:
case 1233:
case 862:
case 1147:
case 142:
case 3428:
case 3485:
case 2621:
case 953:
case 2989:
case 3330:
case 3605:
case 287:
case 431:
case 496:
case 2461:
case 987:
case 2284:
case 879:
case 722:
case 846:
case 2192:
case 1730:
case 1170:
case 2335:
case 166:
case 3668:
case 2791:
case 406:
case 2788:
case 2725:
case 4019:
case 3102:
case 1232:
case 3867:
case 1815:
case 1271:
case 1118:
case 3690:
case 3223:
case 938:
case 2164:
case 786:
case 529:
case 3580:
case 1237:
case 3862:
case 3107:
case 1116:
case 500:
case 2695:
case 238:
case 2027:
case 1645:
case 2804:
case 3984:
case 4045:
case 710:
case 2528:
case 2193:
case 3676:
case 286:
case 1800:
case 2117:
case 3951:
case 3533:
case 3858:
case 1339:
case 1787:
case 2437:
case 3653:
case 3051:
case 1026:
case 3644:
case 210:
case 3387:
case 69:
case 1985:
case 3739:
case 847:
case 1821:
case 3856:
case 1181:
case 2150:
case 1527:
case 3873:
case 544:
case 1028:
case 91:
case 738:
case 2471:
case 911:
case 601:
case 3027:
case 3585:
case 87:
case 3193:
case 3899:
case 2720:
case 702:
case 338:
case 2107:
case 691:
case 1810:
case 636:
case 4040:
case 2561:
case 243:
case 1933:
case 2580:
case 1631:
case 856:
case 1672:
case 3725:
case 178:
case 3922:
case 2701:
case 211:
case 2873:
case 3324:
case 3471:
case 3432:
case 4094:
case 1866:
case 1805:
case 3711:
case 1423:
case 310:
case 1609:
case 3112:
case 3437:
case 1663:
case 895:
case 2814:
case 711:
case 1080:
case 2653:
case 2051:
case 3117:
case 1106:
case 2951:
case 2533:
case 1165:
case 1980:
case 2676:
case 31:
case 902:
case 1868:
case 474:
case 1311:
case 3236:
case 2858:
case 945:
case 162:
case 397:
case 1944:
case 2094:
case 974:
case 2909:
case 1215:
case 3267:
case 1832:
case 3796:
case 1871:
case 3129:
case 3823:
case 3405:
case 726:
case 492:
case 2421:
case 1044:
case 2994:
case 589:
case 307:
case 1078:
case 1053:
case 1976:
case 4051:
case 3626:
case 3262:
case 2661:
case 3798:
case 179:
case 146:
case 3468:
case 2963:
case 2204:
case 2590:
case 2313:
case 1076:
case 1249:
case 245:
case 866:
case 226:
case 2759:
case 3770:
case 1594:
case 1200:
case 2397:
case 2977:
case 3258:
case 2836:
case 3045:
case 125:
case 1684:
case 1499:
case 3742:
case 1509:
case 3945:
case 3214:
case 3410:
case 3452:
case 2578:
case 1:
case 2931:
case 2392:
case 3369:
case 774:
case 2775:
case 2040:
case 803:
case 2135:
case 1370:
case 1990:
case 2838:
case 745:
case 3457:
case 411:
case 2940:
case 1703:
case 1090:
case 3747:
case 3019:
case 2072:
case 2415:
case 926:
case 1342:
case 2031:
case 1774:
case 3313:
case 2468:
case 41:
case 997:
case 1519:
case 939:
case 3299:
case 907:
case 617:
case 2626:
case 2262:
case 1252:
case 2798:
case 3063:
case 673:
case 2183:
case 2466:
case 2823:
case 1456:
case 134:
case 410:
case 1713:
case 3374:
case 3094:
case 1257:
case 239:
case 2129:
case 3909:
case 2267:
case 2796:
case 1545:
case 3940:
case 2273:
case 3576:
case 2019:
case 3415:
case 3972:
case 1205:
case 3775:
case 3931:
case 4022:
case 2256:
case 3040:
case 797:
case 1462:
case 739:
case 2452:
case 573:
case 326:
case 1191:
case 4027:
case 3397:
case 1995:
case 3977:
case 3449:
case 3836:
case 1792:
case 814:
case 3191:
case 1759:
case 126:
case 2200:
case 1836:
case 3792:
case 3627:
case 1977:
case 3375:
case 1397:
case 661:
case 2684:
case 2509:
case 1077:
case 3095:
case 1578:
case 1931:
case 3266:
case 1972:
case 9:
case 2370:
case 2563:
case 2221:
case 1040:
case 1838:
case 925:
case 2090:
case 2342:
case 4033:
case 1072:
case 1576:
case 779:
case 1031:
case 822:
case 2978:
case 1094:
case 584:
case 2944:
case 633:
case 946:
case 7:
case 2832:
case 3746:
case 887:
case 1374:
case 1994:
case 2044:
case 2078:
case 725:
case 1348:
case 3456:
case 1680:
case 2651:
case 2976:
case 1299:
case 3414:
case 1661:
case 2540:
case 1063:
case 174:
case 3748:
case 1963:
case 865:
case 962:
case 3134:
case 2249:
case 2076:
case 2572:
case 3519:
case 2531:
case 3090:
case 1273:
case 3342:
case 2467:
case 2797:
case 1369:
case 1919:
case 957:
case 2205:
case 283:
case 3990:
case 3370:
case 1945:
case 983:
case 3509:
case 2095:
case 3684:
case 257:
case 3:
case 1410:
case 1214:
case 1303:
case 3404:
case 1770:
case 548:
case 2191:
case 325:
case 1045:
case 2995:
case 2375:
case 648:
case 2774:
case 2748:
case 346:
case 3953:
case 3249:
case 783:
case 934:
case 3396:
case 3976:
case 4026:
case 660:
case 379:
case 2210:
case 2414:
case 1466:
case 1183:
case 1595:
case 2746:
case 107:
case 234:
case 3044:
case 2473:
case 4028:
case 4085:
case 3978:
case 139:
case 1628:
case 2257:
case 1685:
case 1129:
case 3871:
case 2545:
case 757:
case 3832:
case 3215:
case 2926:
case 3868:
case 1117:
case 2800:
case 2339:
case 1236:
case 3961:
case 3061:
case 3080:
case 110:
case 434:
case 3423:
case 3866:
case 2985:
case 2160:
case 3584:
case 549:
case 1112:
case 550:
case 1150:
case 985:
case 624:
case 576:
case 2028:
case 1432:
case 3489:
case 3672:
case 2619:
case 1725:
case 524:
case 3631:
case 3386:
case 2232:
case 2118:
case 2320:
case 483:
case 83:
case 3551:
case 3933:
case 1526:
case 2438:
case 1022:
case 457:
case 1786:
case 1899:
case 2237:
case 2143:
case 3810:
case 2116:
case 3388:
case 3852:
case 1695:
case 3677:
case 1027:
case 830:
case 1804:
case 1193:
case 2436:
case 462:
case 2489:
case 3028:
case 3782:
case 1739:
case 3928:
case 3985:
case 2866:
case 4044:
case 1387:
case 3160:
case 2108:
case 4078:
case 2423:
case 223:
case 2609:
case 778:
case 923:
case 2724:
case 2663:
case 2061:
case 535:
case 3522:
case 4053:
case 1051:
case 1653:
case 831:
case 806:
case 2980:
case 1951:
case 1533:
case 3800:
case 3926:
case 2868:
case 1676:
case 446:
case 3787:
case 1382:
case 1984:
case 3436:
case 3849:
case 4:
case 2325:
case 2388:
case 2852:
case 1084:
case 2810:
case 1107:
case 1223:
case 1561:
case 2640:
case 143:
case 1580:
case 2551:
case 2033:
case 2631:
case 1102:
case 2857:
case 278:
case 3619:
case 1690:
case 3118:
case 3271:
case 855:
case 3320:
case 3815:
case 1289:
case 2598:
case 2408:
case 3903:
case 2883:
case 3460:
case 653:
case 3345:
case 1947:
case 3481:
case 1047:
case 1719:
case 2625:
case 2377:
case 1574:
case 3003:
case 665:
case 221:
case 2465:
case 1942:
case 3069:
case 1745:
case 2092:
case 1070:
case 3293:
case 833:
case 1834:
case 2340:
case 1455:
case 48:
case 687:
case 3969:
case 2207:
case 2331:
case 2974:
case 2394:
case 721:
case 1407:
case 3416:
case 1597:
case 2841:
case 1891:
case 2309:
case 3217:
case 884:
case 1998:
case 337:
case 399:
case 2255:
case 2048:
case 1353:
case 2946:
case 1592:
case 2570:
case 565:
case 320:
case 3639:
case 177:
case 2013:
case 553:
case 2542:
case 3212:
case 1996:
case 1376:
case 3138:
case 3250:
case 1137:
case 3686:
case 1959:
case 1777:
case 2969:
case 1216:
case 3207:
case 3992:
case 2069:
case 3406:
case 14:
case 3340:
case 1772:
case 3688:
case 168:
case 1395:
case 3377:
case 1975:
case 3202:
case 408:
case 1731:
case 1218:
case 321:
case 254:
case 2003:
case 2601:
case 3189:
case 1132:
case 848:
case 72:
case 3883:
case 2460:
case 3598:
case 140:
case 3408:
case 159:
case 3123:
case 2481:
case 498:
case 1450:
case 860:
case 799:
case 1075:
case 1412:
case 519:
case 3013:
case 1260:
case 1464:
case 2639:
case 2138:
case 2454:
case 2835:
case 3046:
case 3279:
case 619:
case 999:
case 937:
case 2559:
case 3570:
case 3363:
case 1794:
case 92:
case 3547:
case 3309:
case 2217:
case 237:
case 299:
case 1503:
case 2136:
case 464:
case 3830:
case 3974:
case 209:
case 3841:
case 2753:
case 754:
case 2283:
case 3586:
case 3082:
case 2520:
case 3785:
case 2802:
case 3728:
case 3982:
case 1939:
case 2167:
case 3351:
case 964:
case 281:
case 2501:
case 582:
case 3104:
case 518:
case 264:
case 1234:
case 3525:
case 158:
case 2780:
case 3698:
case 2807:
case 169:
case 1328:
case 1385:
case 63:
case 2761:
case 409:
case 1152:
case 1441:
case 3642:
case 1784:
case 998:
case 53:
case 2241:
case 1020:
case 3670:
case 38:
case 316:
case 1806:
case 3817:
case 1865:
case 2158:
case 2434:
case 824:
case 4069:
case 2230:
case 1669:
case 1001:
case 454:
case 2173:
case 4003:
case 3384:
case 2733:
case 530:
case 208:
case 1429:
case 3647:
case 764:
case 380:
case 2675:
case 1808:
case 1483:
case 1105:
case 1901:
case 2156:
case 1524:
case 1843:
case 3162:
case 2199:
case 2726:
case 3761:
case 3024:
case 1816:
case 3807:
case 4074:
case 1648:
case 3491:
case 3501:
case 655:
case 2525:
case 2893:
case 2785:
case 2728:
case 3802:
case 2982:
case 2696:
case 381:
case 1380:
case 2351:
case 506:
case 2864:
case 531:
case 716:
case 1646:
case 932:
case 1854:
case 4013:
case 1925:
case 398:
case 3327:
case 280:
case 1697:
case 3156:
case 2850:
case 3879:
case 1121:
case 1587:
case 1088:
case 1025:
case 2647:
case 732:
case 606:
case 2384:
case 3733:
case 1986:
case 2670:
case 216:
case 555:
case 3322:
case 3434:
case 115:
case 4092:
case 1333:
case 2642:
case 2511:
case 3241:
case 3114:
case 1582:
case 3539:
case 2784:
case 3333:
case 3086:
case 2020:
case 1241:
case 2168:
case 80:
case 3986:
case 1659:
case 671:
case 1230:
case 1434:
case 3692:
case 2669:
case 44:
case 2001:
case 3587:
case 1173:
case 1733:
case 890:
case 3025:
case 3722:
case 2808:
case 4075:
case 2105:
case 3860:
case 2483:
case 3121:
case 758:
case 2524:
case 1156:
case 3881:
case 459:
case 3646:
case 2039:
case 3435:
case 3613:
case 3361:
case 958:
case 1802:
case 272:
case 3380:
case 181:
case 3818:
case 1924:
case 875:
case 1501:
case 3674:
case 3648:
case 571:
case 2430:
case 844:
case 2234:
case 3149:
case 258:
case 547:
case 1780:
case 3843:
case 2328:
case 2385:
case 269:
case 494:
case 1024:
case 1761:
case 3105:
case 3483:
case 180:
case 2925:
case 1850:
case 2881:
case 3901:
case 1812:
case 2587:
case 57:
case 915:
case 3603:
case 2088:
case 1384:
case 4047:
case 2986:
case 3806:
case 4070:
case 116:
case 3291:
case 2727:
case 3669:
case 215:
case 3784:
case 570:
case 1642:
case 2086:
case 2582:
case 3751:
case 2843:
case 1726:
case 3441:
case 1987:
case 3328:
case 369:
case 3110:
case 1698:
case 1087:
case 1525:
case 1893:
case 3430:
case 3234:
case 1785:
case 1728:
case 67:
case 3157:
case 505:
case 2361:
case 2818:
case 1696:
case 2380:
case 1864:
case 2646:
case 595:
case 477:
case 1082:
case 2435:
case 2098:
case 913:
case 889:
case 3763:
case 1841:
case 2891:
case 2206:
case 1547:
case 2344:
case 1830:
case 3503:
case 1048:
case 304:
case 2592:
case 3794:
case 1570:
case 1913:
case 241:
case 277:
case 2682:
case 2208:
case 3464:
case 3260:
case 1013:
case 1611:
case 2376:
case 2996:
case 3709:
case 3281:
case 1123:
case 359:
case 340:
case 1097:
case 3075:
case 2947:
case 3254:
case 4025:
case 4088:
case 3975:
case 1997:
case 1377:
case 368:
case 2047:
case 1625:
case 3772:
case 1688:
case 3132:
case 2574:
case 121:
case 3171:
case 3218:
case 34:
case 1092:
case 1596:
case 777:
case 1340:
case 713:
case 3059:
case 3243:
case 2970:
case 1207:
case 1992:
case 2042:
case 1795:
case 741:
case 2464:
case 2260:
case 1744:
case 1778:
case 3682:
case 120:
case 1250:
case 1138:
case 1454:
case 3376:
case 3996:
case 1212:
case 994:
case 3402:
case 3592:
case 2569:
case 904:
case 3353:
case 1418:
case 828:
case 2794:
case 472:
case 3206:
case 740:
case 3687:
case 204:
case 199:
case 137:
case 3344:
case 1136:
case 2503:
case 2624:
case 1443:
case 469:
case 1753:
case 3597:
case 1416:
case 2137:
case 3970:
case 3390:
case 4020:
case 2959:
case 1319:
case 2216:
case 1969:
case 2777:
case 3546:
case 3745:
case 1069:
case 968:
case 3834:
case 3070:
case 2975:
case 268:
case 3719:
case 2772:
case 2731:
case 154:
case 3548:
case 2171:
case 1790:
case 1264:
case 1903:
case 873:
case 259:
case 1481:
case 2254:
case 704:
case 3479:
case 1345:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748797202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,];
var gg_b = "1748797202/";

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
