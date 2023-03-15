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
case 53:
case 2674:
case 3226:
case 1220:
case 3096:
case 2750:
case 2514:
case 762:
case 4020:
case 3853:
case 3674:
case 1710:
case 541:
case 165:
case 778:
case 1092:
case 1537:
case 1597:
case 1192:
case 1287:
case 3510:
case 4024:
case 2913:
case 3100:
case 976:
case 1815:
case 2172:
case 2608:
case 2222:
case 1561:
case 313:
case 3050:
case 2667:
case 528:
case 3855:
case 1462:
case 1043:
case 1837:
case 267:
case 3411:
case 2540:
case 2365:
case 2139:
case 1189:
case 1309:
case 3160:
case 2219:
case 883:
case 251:
case 2289:
case 375:
case 3929:
case 2533:
case 5:
case 1299:
case 2519:
case 784:
case 98:
case 3505:
case 3489:
case 2576:
case 2271:
case 414:
case 1881:
case 3923:
case 919:
case 1984:
case 92:
case 1534:
case 1536:
case 726:
case 2961:
case 3117:
case 3409:
case 3874:
case 2811:
case 605:
case 957:
case 2453:
case 3396:
case 221:
case 3428:
case 3571:
case 1621:
case 2033:
case 324:
case 3990:
case 788:
case 3214:
case 2779:
case 3357:
case 2828:
case 3596:
case 1328:
case 2239:
case 3279:
case 997:
case 4031:
case 679:
case 3735:
case 154:
case 3963:
case 686:
case 139:
case 1645:
case 1966:
case 3958:
case 1605:
case 1844:
case 1920:
case 1248:
case 38:
case 1690:
case 3482:
case 47:
case 2254:
case 1835:
case 203:
case 3790:
case 2664:
case 945:
case 3601:
case 2995:
case 3716:
case 3611:
case 3048:
case 1822:
case 2997:
case 1905:
case 3697:
case 1548:
case 1788:
case 2379:
case 2475:
case 3683:
case 2547:
case 107:
case 676:
case 898:
case 3983:
case 4013:
case 2055:
case 394:
case 1469:
case 290:
case 3318:
case 1399:
case 2598:
case 416:
case 815:
case 2204:
case 3492:
case 678:
case 61:
case 2118:
case 1692:
case 3703:
case 1924:
case 2464:
case 3258:
case 887:
case 1600:
case 91:
case 1559:
case 938:
case 2407:
case 1587:
case 1843:
case 1861:
case 3580:
case 68:
case 2622:
case 893:
case 1471:
case 1046:
case 3640:
case 473:
case 3858:
case 1681:
case 2770:
case 3667:
case 50:
case 172:
case 3616:
case 3104:
case 2568:
case 3456:
case 1903:
case 1658:
case 2281:
case 399:
case 2165:
case 2665:
case 3120:
case 3025:
case 1760:
case 3798:
case 878:
case 3881:
case 2602:
case 3111:
case 1377:
case 3196:
case 846:
case 1950:
case 2555:
case 2411:
case 2492:
case 4093:
case 3592:
case 1310:
case 1762:
case 51:
case 1629:
case 3539:
case 65:
case 4050:
case 2396:
case 3746:
case 245:
case 714:
case 3243:
case 2767:
case 3038:
case 58:
case 1654:
case 598:
case 2794:
case 2434:
case 132:
case 177:
case 1808:
case 340:
case 2699:
case 1660:
case 2597:
case 2028:
case 908:
case 447:
case 906:
case 841:
case 485:
case 1825:
case 321:
case 3384:
case 278:
case 71:
case 674:
case 137:
case 2377:
case 1770:
case 4048:
case 2918:
case 3996:
case 2393:
case 2678:
case 3057:
case 3612:
case 3386:
case 1460:
case 3032:
case 783:
case 2188:
case 2936:
case 1925:
case 3997:
case 2321:
case 2202:
case 627:
case 1652:
case 3656:
case 2384:
case 3825:
case 3839:
case 1669:
case 3277:
case 133:
case 718:
case 3270:
case 1086:
case 3469:
case 2251:
case 1490:
case 1667:
case 3042:
case 2994:
case 961:
case 254:
case 3966:
case 131:
case 3797:
case 377:
case 3709:
case 3509:
case 2309:
case 331:
case 2233:
case 1855:
case 454:
case 3474:
case 3302:
case 2709:
case 3051:
case 2862:
case 437:
case 1735:
case 1524:
case 742:
case 2531:
case 2501:
case 21:
case 4004:
case 1272:
case 200:
case 661:
case 2584:
case 1492:
case 2965:
case 1543:
case 1650:
case 565:
case 652:
case 2845:
case 3568:
case 4049:
case 3239:
case 1542:
case 3334:
case 3427:
case 1154:
case 504:
case 1737:
case 1964:
case 1400:
case 3520:
case 2827:
case 2835:
case 418:
case 2299:
case 318:
case 2730:
case 1444:
case 2728:
case 1482:
case 167:
case 952:
case 1467:
case 1353:
case 1911:
case 4078:
case 3666:
case 2339:
case 3951:
case 1729:
case 2541:
case 1777:
case 2318:
case 2687:
case 155:
case 494:
case 3278:
case 3679:
case 593:
case 2108:
case 3173:
case 1004:
case 2351:
case 1569:
case 3717:
case 1651:
case 3073:
case 2921:
case 3236:
case 147:
case 3035:
case 2524:
case 3130:
case 2960:
case 2928:
case 3889:
case 508:
case 4038:
case 1181:
case 3283:
case 1122:
case 1970:
case 737:
case 3936:
case 876:
case 777:
case 2151:
case 1723:
case 1063:
case 451:
case 1290:
case 476:
case 1827:
case 1732:
case 3303:
case 3985:
case 2212:
case 3549:
case 148:
case 3486:
case 3421:
case 1325:
case 4015:
case 2001:
case 2766:
case 276:
case 1440:
case 2868:
case 2944:
case 1511:
case 3135:
case 1769:
case 3910:
case 3688:
case 1018:
case 3309:
case 1746:
case 1413:
case 483:
case 2338:
case 269:
case 3673:
case 3719:
case 2335:
case 1604:
case 1226:
case 2228:
case 445:
case 3630:
case 241:
case 3210:
case 3444:
case 2288:
case 1020:
case 641:
case 3664:
case 2983:
case 3045:
case 1286:
case 1931:
case 223:
case 1391:
case 1513:
case 2439:
case 1914:
case 3868:
case 2168:
case 1739:
case 3388:
case 648:
case 1239:
case 2418:
case 1590:
case 4076:
case 3467:
case 3918:
case 2643:
case 1913:
case 1494:
case 3022:
case 2504:
case 3872:
case 2897:
case 2220:
case 977:
case 20:
case 3633:
case 727:
case 1056:
case 1577:
case 520:
case 3608:
case 2373:
case 3000:
case 1509:
case 2216:
case 2529:
case 1983:
case 4055:
case 2125:
case 3017:
case 3398:
case 622:
case 2094:
case 1789:
case 2865:
case 2878:
case 1786:
case 1265:
case 1740:
case 3026:
case 1363:
case 4065:
case 3218:
case 2940:
case 2537:
case 2950:
case 813:
case 2388:
case 395:
case 1866:
case 1716:
case 386:
case 4056:
case 3573:
case 2990:
case 1203:
case 1465:
case 428:
case 2724:
case 3671:
case 1682:
case 2224:
case 3149:
case 3651:
case 3829:
case 3814:
case 2836:
case 1112:
case 2549:
case 611:
case 2732:
case 2135:
case 3416:
case 2302:
case 1838:
case 2523:
case 3631:
case 1731:
case 3732:
case 440:
case 807:
case 1289:
case 2363:
case 3009:
case 2754:
case 2943:
case 569:
case 3564:
case 2499:
case 1701:
case 761:
case 336:
case 1602:
case 1744:
case 2458:
case 1555:
case 1829:
case 1001:
case 1798:
case 2693:
case 1145:
case 1009:
case 2815:
case 1594:
case 2905:
case 345:
case 2310:
case 673:
case 2160:
case 3602:
case 2006:
case 3084:
case 2430:
case 1579:
case 1085:
case 1928:
case 179:
case 4084:
case 2332:
case 830:
case 3882:
case 1159:
case 3116:
case 86:
case 3739:
case 1273:
case 3292:
case 1656:
case 1857:
case 3373:
case 1782:
case 152:
case 2244:
case 1484:
case 3066:
case 2401:
case 3067:
case 2198:
case 3819:
case 180:
case 3784:
case 481:
case 699:
case 1230:
case 225:
case 2600:
case 1102:
case 2313:
case 3856:
case 2287:
case 1406:
case 2528:
case 3259:
case 677:
case 274:
case 2681:
case 2651:
case 2192:
case 3741:
case 3186:
case 3928:
case 3152:
case 940:
case 3563:
case 3457:
case 2163:
case 226:
case 1684:
case 2898:
case 444:
case 134:
case 1376:
case 3491:
case 2184:
case 1121:
case 2210:
case 2206:
case 995:
case 2721:
case 1430:
case 4045:
case 3888:
case 1429:
case 3816:
case 1753:
case 253:
case 3812:
case 3946:
case 1360:
case 255:
case 2095:
case 1014:
case 3880:
case 2238:
case 998:
case 3704:
case 27:
case 2303:
case 2726:
case 1639:
case 3909:
case 3870:
case 2814:
case 1069:
case 2821:
case 2150:
case 405:
case 2740:
case 2774:
case 128:
case 349:
case 412:
case 1441:
case 2599:
case 3954:
case 3118:
case 3462:
case 3976:
case 2661:
case 3900:
case 64:
case 3076:
case 2957:
case 1176:
case 636:
case 2660:
case 4066:
case 3917:
case 3262:
case 920:
case 1666:
case 729:
case 3020:
case 4043:
case 3808:
case 4026:
case 1693:
case 2046:
case 1022:
case 1779:
case 1728:
case 2761:
case 287:
case 3099:
case 2517:
case 2009:
case 2252:
case 1184:
case 3437:
case 3738:
case 1442:
case 1685:
case 2677:
case 3380:
case 666:
case 298:
case 871:
case 4070:
case 2799:
case 2824:
case 1257:
case 2131:
case 602:
case 3536:
case 403:
case 1642:
case 1807:
case 34:
case 753:
case 597:
case 1094:
case 3961:
case 930:
case 3464:
case 3465:
case 700:
case 1291:
case 3767:
case 392:
case 2586:
case 3529:
case 112:
case 3655:
case 1414:
case 2014:
case 1206:
case 3183:
case 3708:
case 735:
case 3336:
case 1371:
case 591:
case 3013:
case 3854:
case 3828:
case 3907:
case 1017:
case 1875:
case 1315:
case 3126:
case 3342:
case 1706:
case 227:
case 3684:
case 929:
case 2557:
case 2138:
case 835:
case 1958:
case 927:
case 2011:
case 2903:
case 171:
case 3138:
case 1638:
case 1326:
case 4:
case 407:
case 2161:
case 2482:
case 3991:
case 1568:
case 1957:
case 1826:
case 2491:
case 860:
case 457:
case 875:
case 2199:
case 3249:
case 1431:
case 2049:
case 3368:
case 3614:
case 2329:
case 82:
case 2144:
case 1275:
case 3112:
case 848:
case 3847:
case 1755:
case 980:
case 2262:
case 57:
case 3927:
case 3559:
case 2277:
case 2869:
case 1403:
case 2833:
case 994:
case 2173:
case 3487:
case 3375:
case 15:
case 2851:
case 3027:
case 2030:
case 3123:
case 1743:
case 1719:
case 289:
case 1190:
case 2713:
case 3761:
case 1450:
case 1994:
case 1847:
case 3699:
case 1324:
case 1041:
case 983:
case 2508:
case 1394:
case 2808:
case 3275:
case 2979:
case 2348:
case 348:
case 1528:
case 2816:
case 3101:
case 359:
case 3869:
case 4090:
case 831:
case 1943:
case 365:
case 909:
case 3286:
case 3783:
case 2293:
case 1623:
case 372:
case 3414:
case 755:
case 2382:
case 1858:
case 3252:
case 526:
case 2587:
case 1922:
case 4028:
case 3413:
case 458:
case 1463:
case 713:
case 3132:
case 326:
case 620:
case 272:
case 861:
case 1026:
case 4082:
case 1120:
case 2342:
case 2376:
case 1472:
case 3544:
case 1087:
case 2982:
case 2605:
case 2207:
case 2484:
case 2925:
case 3367:
case 2496:
case 187:
case 3150:
case 1961:
case 609:
case 3728:
case 2790:
case 3332:
case 4002:
case 3344:
case 2467:
case 1836:
case 1646:
case 2748:
case 2208:
case 2738:
case 2958:
case 3268:
case 281:
case 1877:
case 710:
case 3865:
case 2197:
case 1491:
case 2510:
case 856:
case 401:
case 658:
case 1040:
case 752:
case 181:
case 2294:
case 1707:
case 590:
case 122:
case 2093:
case 2371:
case 3965:
case 452:
case 3246:
case 461:
case 749:
case 2696:
case 3577:
case 3241:
case 1773:
case 3197:
case 1635:
case 2413:
case 2884:
case 4003:
case 2909:
case 275:
case 643:
case 869:
case 2194:
case 2346:
case 1281:
case 1529:
case 1451:
case 1458:
case 385:
case 1833:
case 384:
case 1228:
case 2706:
case 1410:
case 696:
case 1105:
case 2679:
case 1896:
case 3589:
case 4034:
case 329:
case 1995:
case 3867:
case 3977:
case 380:
case 2079:
case 2089:
case 1554:
case 1347:
case 3542:
case 3762:
case 2718:
case 918:
case 1:
case 1741:
case 1148:
case 316:
case 308:
case 2652:
case 1372:
case 2593:
case 1222:
case 448:
case 1333:
case 3935:
case 3973:
case 2694:
case 1404:
case 3400:
case 1942:
case 3435:
case 322:
case 2295:
case 3004:
case 2522:
case 1880:
case 1892:
case 1412:
case 2542:
case 3558:
case 1689:
case 475:
case 2762:
case 501:
case 1851:
case 1846:
case 2485:
case 935:
case 3681:
case 1378:
case 2029:
case 2916:
case 1531:
case 149:
case 2134:
case 734:
case 895:
case 1617:
case 1481:
case 1999:
case 647:
case 4052:
case 3677:
case 2548:
case 1252:
case 769:
case 352:
case 1991:
case 1523:
case 2553:
case 1901:
case 3988:
case 292:
case 711:
case 197:
case 1137:
case 881:
case 387:
case 3795:
case 3632:
case 367:
case 1428:
case 3756:
case 3059:
case 1255:
case 268:
case 3377:
case 824:
case 2614:
case 2215:
case 1320:
case 1146:
case 3772:
case 592:
case 2390:
case 3091:
case 3169:
case 3851:
case 566:
case 117:
case 2974:
case 1179:
case 1763:
case 1097:
case 1096:
case 1139:
case 1007:
case 2671:
case 46:
case 2420:
case 419:
case 3722:
case 2424:
case 1795:
case 1853:
case 2076:
case 514:
case 4060:
case 70:
case 3774:
case 259:
case 1210:
case 2155:
case 3822:
case 536:
case 1348:
case 2174:
case 879:
case 834:
case 3945:
case 1311:
case 3645:
case 2809:
case 2752:
case 1282:
case 2017:
case 3787:
case 2255:
case 1683:
case 1830:
case 3299:
case 1754:
case 3379:
case 3225:
case 164:
case 2308:
case 1819:
case 1033:
case 2798:
case 655:
case 3567:
case 1897:
case 1420:
case 3980:
case 1932:
case 464:
case 3554:
case 3803:
case 1864:
case 2275:
case 1986:
case 1726:
case 2247:
case 1250:
case 2248:
case 2684:
case 2146:
case 2658:
case 2906:
case 1359:
case 563:
case 2429:
case 2618:
case 3052:
case 1390:
case 1674:
case 3955:
case 72:
case 2969:
case 3725:
case 2018:
case 3484:
case 1418:
case 119:
case 3018:
case 1260:
case 1715:
case 1269:
case 2116:
case 56:
case 3637:
case 3960:
case 2086:
case 3941:
case 1959:
case 3176:
case 1235:
case 4047:
case 353:
case 1874:
case 2088:
case 1407:
case 2837:
case 1676:
case 3217:
case 1756:
case 2068:
case 2893:
case 740:
case 2266:
case 252:
case 3264:
case 2378:
case 3694:
case 1062:
case 2850:
case 760:
case 2534:
case 1592:
case 1758:
case 3494:
case 1775:
case 2380:
case 397:
case 1508:
case 3687:
case 556:
case 663:
case 3553:
case 3015:
case 3016:
case 2565:
case 1188:
case 2337:
case 301:
case 547:
case 2984:
case 829:
case 478:
case 886:
case 3778:
case 3939:
case 1032:
case 2025:
case 2633:
case 74:
case 3827:
case 2544:
case 3034:
case 2327:
case 2124:
case 970:
case 1426:
case 141:
case 230:
case 1479:
case 3933:
case 3337:
case 1397:
case 2716:
case 3591:
case 2402:
case 3768:
case 3163:
case 3599:
case 862:
case 3840:
case 2582:
case 396:
case 466:
case 4010:
case 649:
case 3047:
case 669:
case 2036:
case 325:
case 2631:
case 2731:
case 1379:
case 2561:
case 3982:
case 2169:
case 3800:
case 2930:
case 449:
case 3978:
case 2126:
case 754:
case 1606:
case 4094:
case 1978:
case 1355:
case 1341:
case 2317:
case 2543:
case 1346:
case 1614:
case 126:
case 751:
case 917:
case 492:
case 2527:
case 1907:
case 1297:
case 3364:
case 2231:
case 2205:
case 1358:
case 2454:
case 2630:
case 3175:
case 3378:
case 1772:
case 1502:
case 698:
case 79:
case 743:
case 471:
case 1081:
case 2831:
case 1351:
case 1439:
case 1687:
case 2234:
case 521:
case 3950:
case 198:
case 986:
case 1981:
case 3085:
case 870:
case 660:
case 2513:
case 3451:
case 3257:
case 1727:
case 542:
case 1915:
case 1082:
case 2149:
case 43:
case 545:
case 3832:
case 1926:
case 2469:
case 1119:
case 1070:
case 3809:
case 555:
case 3873:
case 2972:
case 3227:
case 2783:
case 2235:
case 168:
case 1055:
case 2866:
case 4023:
case 3148:
case 236:
case 3871:
case 1500:
case 219:
case 239:
case 638:
case 3956:
case 867:
case 914:
case 3706:
case 913:
case 2791:
case 3199:
case 3356:
case 304:
case 2985:
case 3659:
case 2641:
case 2971:
case 3737:
case 3343:
case 549:
case 3131:
case 3078:
case 3171:
case 707:
case 2574:
case 3269:
case 3846:
case 962:
case 213:
case 3920:
case 2917:
case 1251:
case 2939:
case 201:
case 427:
case 4077:
case 3557:
case 3019:
case 1620:
case 2250:
case 288:
case 3215:
case 100:
case 785:
case 3113:
case 1076:
case 2241:
case 1434:
case 2157:
case 2470:
case 2589:
case 178:
case 195:
case 2585:
case 3747:
case 4073:
case 3300:
case 1130:
case 932:
case 923:
case 1541:
case 645:
case 779:
case 1170:
case 1008:
case 2760:
case 2391:
case 2879:
case 2406:
case 513:
case 1783:
case 442:
case 2336:
case 3168:
case 1101:
case 1939:
case 1987:
case 1828:
case 2849:
case 2052:
case 4001:
case 557:
case 2311:
case 144:
case 1106:
case 3394:
case 1902:
case 2981:
case 3080:
case 808:
case 1546:
case 705:
case 3014:
case 1419:
case 1963:
case 115:
case 3957:
case 2300:
case 3442:
case 480:
case 3690:
case 1518:
case 795:
case 3860:
case 1338:
case 2223:
case 1686:
case 3811:
case 2947:
case 1794:
case 2066:
case 3901:
case 2672:
case 3031:
case 3702:
case 2051:
case 1141:
case 3934:
case 3989:
case 1354:
case 2274:
case 2796:
case 1058:
case 937:
case 3959:
case 2465:
case 2349:
case 185:
case 2853:
case 794:
case 953:
case 3231:
case 3212:
case 774:
case 3576:
case 3750:
case 2121:
case 482:
case 379:
case 910:
case 151:
case 1042:
case 1626:
case 4088:
case 3206:
case 966:
case 2571:
case 538:
case 2895:
case 3324:
case 3521:
case 3450:
case 1208:
case 2530:
case 1823:
case 1724:
case 3485:
case 283:
case 3635:
case 575:
case 1108:
case 2177:
case 60:
case 3229:
case 1840:
case 1665:
case 3648:
case 1195:
case 2883:
case 410:
case 716:
case 2058:
case 2673:
case 3393:
case 2203:
case 942:
case 429:
case 3338:
case 959:
case 423:
case 3986:
case 2257:
case 2395:
case 1522:
case 160:
case 2506:
case 1211:
case 1204:
case 949:
case 1172:
case 105:
case 2690:
case 2211:
case 2175:
case 1382:
case 1929:
case 639:
case 1996:
case 851:
case 1468:
case 3191:
case 3419:
case 215:
case 1578:
case 3323:
case 1562:
case 2710:
case 356:
case 1936:
case 1730:
case 1632:
case 343:
case 640:
case 3184:
case 3588:
case 3622:
case 4014:
case 731:
case 681:
case 1174:
case 2964:
case 1570:
case 2408:
case 1618:
case 3137:
case 3335:
case 3904:
case 300:
case 23:
case 1051:
case 2468:
case 1780:
case 3316:
case 3650:
case 250:
case 3793:
case 3094:
case 4035:
case 248:
case 240:
case 3971:
case 3298:
case 3541:
case 2176:
case 3786:
case 3248:
case 3698:
case 3609:
case 723:
case 1374:
case 237:
case 2153:
case 982:
case 2399:
case 4008:
case 1385:
case 1580:
case 1068:
case 2305:
case 3534:
case 1168:
case 1140:
case 3107:
case 2075:
case 29:
case 1956:
case 2340:
case 1447:
case 3233:
case 613:
case 1060:
case 2579:
case 1765:
case 3782:
case 1028:
case 3799:
case 1048:
case 3063:
case 3597:
case 543:
case 1856:
case 1218:
case 947:
case 3301:
case 2758:
case 3055:
case 1113:
case 1084:
case 632:
case 1520:
case 960:
case 2010:
case 1841:
case 2237:
case 1793:
case 2154:
case 3579:
case 3305:
case 1539:
case 586:
case 2428:
case 1873:
case 1935:
case 3077:
case 579:
case 1598:
case 2734:
case 739:
case 3203:
case 2003:
case 2065:
case 3493:
case 3623:
case 1992:
case 1147:
case 571:
case 3769:
case 531:
case 1796:
case 3513:
case 2253:
case 3574:
case 2785:
case 1678:
case 1748:
case 310:
case 2189:
case 462:
case 1941:
case 374:
case 2179:
case 1982:
case 2061:
case 2860:
case 3512:
case 1933:
case 2722:
case 618:
case 3402:
case 2403:
case 439:
case 3502:
case 2653:
case 3178:
case 3054:
case 3348:
case 3441:
case 1572:
case 3253:
case 207:
case 1849:
case 3192:
case 1622:
case 2209:
case 3371:
case 3157:
case 695:
case 1133:
case 2945:
case 3938:
case 765:
case 192:
case 90:
case 3359:
case 2920:
case 2323:
case 612:
case 3454:
case 2955:
case 2445:
case 3136:
case 1294:
case 2325:
case 4018:
case 607:
case 772:
case 1370:
case 40:
case 3383:
case 2232:
case 628:
case 2459:
case 2973:
case 202:
case 2891:
case 3291:
case 3490:
case 574:
case 2490:
case 4040:
case 2649:
case 4074:
case 3103:
case 496:
case 3883:
case 4080:
case 3662:
case 369:
case 905:
case 3271:
case 2569:
case 2591:
case 1366:
case 3043:
case 810:
case 2952:
case 1103:
case 1649:
case 1035:
case 904:
case 2968:
case 2526:
case 10:
case 3041:
case 1487:
case 3033:
case 477:
case 2249:
case 821:
case 1868:
case 1611:
case 1898:
case 1702:
case 441:
case 585:
case 2387:
case 2196:
case 1906:
case 1057:
case 1589:
case 311:
case 2629:
case 2552:
case 925:
case 1088:
case 3824:
case 3545:
case 2781:
case 1679:
case 866:
case 1990:
case 3281:
case 823:
case 3349:
case 2830:
case 1276:
case 3458:
case 2646:
case 1832:
case 2472:
case 1619:
case 847:
case 1023:
case 2670:
case 796:
case 1352:
case 2705:
case 495:
case 2590:
case 472:
case 2053:
case 2938:
case 1888:
case 1831:
case 3141:
case 539:
case 2483:
case 2314:
case 1327:
case 584:
case 337:
case 1968:
case 3771:
case 3504:
case 2843:
case 228:
case 522:
case 843:
case 3497:
case 3969:
case 562:
case 204:
case 210:
case 1357:
case 3216:
case 3459:
case 3471:
case 2426:
case 2755:
case 1065:
case 2725:
case 2063:
case 606:
case 3764:
case 3590:
case 84:
case 3190:
case 3162:
case 3365:
case 2283:
case 1586:
case 456:
case 3913:
case 820:
case 1262:
case 3583:
case 4017:
case 3975:
case 924:
case 2158:
case 1164:
case 958:
case 1283:
case 3733:
case 3260:
case 2423:
case 2993:
case 1053:
case 1061:
case 4072:
case 877:
case 3223:
case 1011:
case 2595:
case 2759:
case 776:
case 2178:
case 1114:
case 633:
case 3723:
case 4091:
case 3110:
case 619:
case 1549:
case 3434:
case 1071:
case 3710:
case 2915:
case 3187:
case 2708:
case 3307:
case 208:
case 2747:
case 1551:
case 299:
case 2405:
case 2503:
case 1005:
case 3861:
case 3366:
case 3415:
case 2119:
case 3922:
case 671:
case 3144:
case 2120:
case 1224:
case 1151:
case 2104:
case 1488:
case 2976:
case 2099:
case 722:
case 3998:
case 826:
case 2720:
case 1405:
case 1553:
case 3347:
case 1894:
case 470:
case 2477:
case 11:
case 1214:
case 33:
case 2911:
case 656:
case 3477:
case 62:
case 2765:
case 2753:
case 2333:
case 2632:
case 1498:
case 3404:
case 3208:
case 703:
case 2042:
case 892:
case 1243:
case 3546:
case 701:
case 2416:
case 2575:
case 577:
case 169:
case 3265:
case 2004:
case 2166:
case 2554:
case 2040:
case 1871:
case 3158:
case 926:
case 87:
case 3836:
case 524:
case 24:
case 16:
case 1533:
case 1263:
case 3742:
case 2729:
case 2320:
case 3948:
case 4030:
case 3736:
case 2200:
case 3312:
case 2663:
case 222:
case 3605:
case 19:
case 1298:
case 1233:
case 233:
case 3193:
case 4044:
case 2007:
case 2117:
case 1199:
case 121:
case 3944:
case 3114:
case 3912:
case 2284:
case 2698:
case 3813:
case 529:
case 3424:
case 2764:
case 3730:
case 560:
case 3122:
case 2715:
case 2171:
case 3625:
case 3315:
case 3089:
case 3436:
case 2272:
case 2502:
case 1940:
case 3235:
case 1261:
case 1938:
case 150:
case 3429:
case 812:
case 1834:
case 3250:
case 2476:
case 2822:
case 136:
case 1694:
case 59:
case 249:
case 2090:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1678845602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,];
var gg_b = "1678845602/";

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
