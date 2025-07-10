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
case 2224:
case 1470:
case 515:
case 655:
case 2227:
case 1622:
case 3247:
case 3600:
case 1227:
case 3063:
case 2622:
case 2383:
case 3642:
case 1224:
case 2470:
case 620:
case 3566:
case 2419:
case 1482:
case 2679:
case 2952:
case 1092:
case 3197:
case 2482:
case 586:
case 2125:
case 706:
case 1952:
case 523:
case 471:
case 3426:
case 4001:
case 823:
case 2764:
case 1419:
case 251:
case 92:
case 3409:
case 2446:
case 955:
case 3468:
case 53:
case 1548:
case 772:
case 1142:
case 2398:
case 1186:
case 3937:
case 3891:
case 3044:
case 35:
case 4019:
case 2186:
case 600:
case 920:
case 1024:
case 163:
case 3485:
case 1027:
case 4082:
case 2142:
case 3833:
case 2548:
case 3095:
case 3179:
case 2874:
case 1973:
case 1292:
case 2751:
case 1645:
case 2743:
case 2697:
case 577:
case 2694:
case 1877:
case 90:
case 594:
case 4070:
case 894:
case 783:
case 3625:
case 2645:
case 2292:
case 2779:
case 729:
case 1667:
case 3143:
case 3980:
case 1916:
case 1262:
case 1779:
case 2667:
case 3906:
case 2949:
case 396:
case 1832:
case 3972:
case 2587:
case 1722:
case 714:
case 3065:
case 2808:
case 127:
case 3293:
case 3301:
case 3861:
case 1584:
case 3231:
case 2368:
case 2722:
case 227:
case 3498:
case 1869:
case 889:
case 2794:
case 1239:
case 182:
case 2975:
case 2651:
case 867:
case 2643:
case 748:
case 1975:
case 1062:
case 3725:
case 2745:
case 1643:
case 1326:
case 384:
case 3319:
case 2239:
case 3370:
case 3857:
case 453:
case 3771:
case 3483:
case 3093:
case 2159:
case 107:
case 3854:
case 3288:
case 2921:
case 3953:
case 173:
case 1281:
case 2778:
case 1736:
case 3357:
case 3534:
case 2076:
case 2215:
case 3690:
case 1038:
case 39:
case 3354:
case 485:
case 3537:
case 3928:
case 1778:
case 629:
case 948:
case 2948:
case 839:
case 1369:
case 1114:
case 359:
case 3104:
case 3658:
case 132:
case 3020:
case 4033:
case 1117:
case 1002:
case 3107:
case 2040:
case 2117:
case 2002:
case 1040:
case 1826:
case 2369:
case 3819:
case 1930:
case 2885:
case 1868:
case 2276:
case 2308:
case 1081:
case 1491:
case 378:
case 3801:
case 929:
case 3361:
case 609:
case 2081:
case 2491:
case 3760:
case 1015:
case 1885:
case 1276:
case 2238:
case 3005:
case 1308:
case 390:
case 3966:
case 3220:
case 2240:
case 1202:
case 191:
case 2604:
case 2158:
case 2552:
case 3614:
case 3289:
case 3477:
case 662:
case 1552:
case 3617:
case 1607:
case 1240:
case 1332:
case 2374:
case 3056:
case 1575:
case 4057:
case 1850:
case 972:
case 733:
case 4054:
case 3432:
case 3996:
case 1213:
case 58:
case 493:
case 3203:
case 3790:
case 70:
case 2898:
case 2461:
case 2678:
case 983:
case 606:
case 218:
case 3391:
case 88:
case 1678:
case 2636:
case 2160:
case 1418:
case 3333:
case 3408:
case 1898:
case 3469:
case 244:
case 2516:
case 880:
case 2704:
case 1549:
case 3256:
case 536:
case 1707:
case 3714:
case 1704:
case 2549:
case 3178:
case 3572:
case 368:
case 906:
case 72:
case 1435:
case 1454:
case 1984:
case 2013:
case 2457:
case 691:
case 2944:
case 3924:
case 1774:
case 1995:
case 262:
case 932:
case 2947:
case 3927:
case 2669:
case 1777:
case 1055:
case 162:
case 3358:
case 869:
case 2851:
case 2843:
case 3538:
case 1037:
case 3823:
case 2774:
case 3733:
case 3540:
case 1460:
case 2118:
case 248:
case 3252:
case 3791:
case 148:
case 3657:
case 295:
case 109:
case 2589:
case 782:
case 3108:
case 3502:
case 3635:
case 3654:
case 1520:
case 502:
case 632:
case 876:
case 1304:
case 1799:
case 408:
case 1963:
case 2864:
case 2237:
case 991:
case 1632:
case 3317:
case 2867:
case 1237:
case 2307:
case 2505:
case 2632:
case 1867:
case 1255:
case 2799:
case 2304:
case 3581:
case 1864:
case 3661:
case 3478:
case 1608:
case 2157:
case 1206:
case 3216:
case 3075:
case 1378:
case 1229:
case 2556:
case 3633:
case 3735:
case 1280:
case 3249:
case 2206:
case 283:
case 272:
case 2993:
case 1414:
case 2272:
case 374:
case 3407:
case 2845:
case 1897:
case 763:
case 3825:
case 2931:
case 2417:
case 2674:
case 3199:
case 2053:
case 2894:
case 172:
case 2414:
case 446:
case 0:
case 3842:
case 2490:
case 1708:
case 2133:
case 3718:
case 2810:
case 2822:
case 1191:
case 106:
case 1029:
case 3761:
case 4014:
case 618:
case 206:
case 2029:
case 1133:
case 1490:
case 751:
case 3939:
case 3800:
case 1822:
case 558:
case 1810:
case 566:
case 866:
case 1699:
case 1253:
case 2965:
case 1988:
case 2699:
case 1458:
case 1965:
case 6:
case 2988:
case 3221:
case 3177:
case 1503:
case 2732:
case 3513:
case 3451:
case 3443:
case 1379:
case 4059:
case 1228:
case 951:
case 1905:
case 3150:
case 12:
case 2905:
case 860:
case 3248:
case 2379:
case 3342:
case 3230:
case 1785:
case 2683:
case 744:
case 2322:
case 2310:
case 44:
case 1066:
case 663:
case 1711:
case 3198:
case 2785:
case 1768:
case 1650:
case 1709:
case 1394:
case 1726:
case 3524:
case 3719:
case 2547:
case 1595:
case 1397:
case 511:
case 3527:
case 3048:
case 1345:
case 1547:
case 2595:
case 3782:
case 1544:
case 3746:
case 2726:
case 3464:
case 2836:
case 2266:
case 2920:
case 220:
case 3030:
case 4023:
case 2459:
case 7:
case 155:
case 2698:
case 475:
case 2989:
case 3371:
case 56:
case 1836:
case 3902:
case 86:
case 321:
case 2878:
case 963:
case 1912:
case 1296:
case 1170:
case 2611:
case 343:
case 2471:
case 2783:
case 898:
case 3359:
case 1471:
case 1783:
case 3539:
case 598:
case 673:
case 682:
case 3494:
case 1146:
case 3814:
case 3084:
case 2364:
case 2119:
case 3817:
case 3087:
case 1182:
case 2367:
case 4000:
case 2807:
case 570:
case 1367:
case 2425:
case 1565:
case 2804:
case 3126:
case 1798:
case 2956:
case 1486:
case 3111:
case 2096:
case 2442:
case 3890:
case 4025:
case 465:
case 3185:
case 3422:
case 57:
case 3410:
case 1351:
case 2593:
case 1343:
case 492:
case 3287:
case 1531:
case 1609:
case 1626:
case 3284:
case 3858:
case 2626:
case 1593:
case 2351:
case 2343:
case 3682:
case 2940:
case 121:
case 1371:
case 4043:
case 3989:
case 835:
case 355:
case 553:
case 1030:
case 853:
case 333:
case 221:
case 1464:
case 2524:
case 1938:
case 3544:
case 1782:
case 905:
case 1048:
case 2782:
case 1325:
case 3397:
case 510:
case 441:
case 3726:
case 1524:
case 810:
case 1976:
case 2938:
case 3394:
case 2860:
case 3683:
case 2342:
case 742:
case 1592:
case 2230:
case 1300:
case 300:
case 3066:
case 3711:
case 101:
case 913:
case 1386:
case 201:
case 65:
case 4064:
case 81:
case 3785:
case 51:
case 1342:
case 1230:
case 4067:
case 2300:
case 2592:
case 3423:
case 847:
case 1248:
case 2443:
case 547:
case 1150:
case 861:
case 32:
case 950:
case 1915:
case 2150:
case 3905:
case 3228:
case 2981:
case 3379:
case 699:
case 1451:
case 1443:
case 1323:
case 2479:
case 1682:
case 157:
case 2619:
case 1858:
case 3626:
case 1619:
case 1284:
case 3531:
case 3750:
case 2646:
case 2858:
case 1479:
case 2323:
case 477:
case 3351:
case 257:
case 759:
case 1410:
case 2562:
case 4094:
case 43:
case 2670:
case 3096:
case 4045:
case 734:
case 2410:
case 1562:
case 2890:
case 3798:
case 1126:
case 684:
case 3364:
case 3903:
case 423:
case 1109:
case 3565:
case 3367:
case 996:
case 2497:
case 3182:
case 1087:
case 1817:
case 3807:
case 2445:
case 1497:
case 2126:
case 3804:
case 1494:
case 790:
case 3611:
case 243:
case 1539:
case 1601:
case 3471:
case 4079:
case 3170:
case 2539:
case 329:
case 2661:
case 1273:
case 2478:
case 1992:
case 1436:
case 2618:
case 1859:
case 2859:
case 69:
case 524:
case 3154:
case 3135:
case 824:
case 1478:
case 2273:
case 2992:
case 978:
case 796:
case 3157:
case 1052:
case 2314:
case 3864:
case 1581:
case 436:
case 634:
case 3234:
case 212:
case 2515:
case 2317:
case 3867:
case 3237:
case 3505:
case 1314:
case 2581:
case 3304:
case 3520:
case 1502:
case 1108:
case 1390:
case 1654:
case 3161:
case 309:
case 348:
case 1791:
case 2252:
case 48:
case 3589:
case 1252:
case 678:
case 593:
case 893:
case 2108:
case 2390:
case 1733:
case 2502:
case 504:
case 2654:
case 2635:
case 1540:
case 2924:
case 1538:
case 3669:
case 3055:
case 959:
case 3777:
case 3995:
case 2358:
case 1576:
case 1924:
case 3774:
case 3851:
case 2538:
case 3843:
case 2132:
case 3503:
case 3965:
case 3072:
case 956:
case 3988:
case 3699:
case 942:
case 3253:
case 3879:
case 2174:
case 2360:
case 4007:
case 2718:
case 3810:
case 750:
case 3822:
case 3133:
case 2761:
case 2275:
case 2016:
case 138:
case 1049:
case 3029:
case 1016:
case 3191:
case 2049:
case 3006:
case 1360:
case 1718:
case 3708:
case 2939:
case 274:
case 3769:
case 3272:
case 454:
case 2404:
case 372:
case 3993:
case 3845:
case 3417:
case 3674:
case 1407:
case 3414:
case 3677:
case 2199:
case 1404:
case 3041:
case 439:
case 2075:
case 1691:
case 1757:
case 3280:
case 1871:
case 3556:
case 1754:
case 1735:
case 885:
case 2871:
case 2754:
case 1962:
case 3378:
case 1075:
case 326:
case 668:
case 2757:
case 3240:
case 3332:
case 743:
case 1474:
case 290:
case 1614:
case 2614:
case 2289:
case 466:
case 391:
case 2617:
case 2474:
case 190:
case 3433:
case 3308:
case 3190:
case 3885:
case 3015:
case 3276:
case 2801:
case 458:
case 1801:
case 2361:
case 2005:
case 3238:
case 2318:
case 1499:
case 2104:
case 3930:
case 479:
case 3826:
case 1819:
case 1089:
case 2107:
case 3040:
case 2012:
case 1107:
case 3117:
case 1012:
case 552:
case 1104:
case 852:
case 1846:
case 3114:
case 3369:
case 2089:
case 2819:
case 159:
case 2357:
case 2555:
case 2870:
case 3778:
case 2335:
case 2354:
case 2537:
case 3215:
case 1537:
case 19:
case 1335:
case 1354:
case 757:
case 3948:
case 1555:
case 4077:
case 1870:
case 2928:
case 3281:
case 268:
case 2178:
case 2572:
case 1660:
case 3984:
case 3454:
case 1003:
case 3883:
case 4032:
case 3013:
case 168:
case 3457:
case 1572:
case 3704:
case 3399:
case 697:
case 242:
case 2469:
case 1714:
case 3707:
case 1717:
case 549:
case 701:
case 581:
case 808:
case 3549:
case 2529:
case 2714:
case 849:
case 674:
case 1333:
case 2790:
case 3898:
case 3418:
case 4069:
case 318:
case 1541:
case 3678:
case 1391:
case 3521:
case 2333:
case 1203:
case 3160:
case 2056:
case 1432:
case 3374:
case 2758:
case 469:
case 3377:
case 828:
case 974:
case 1056:
case 2996:
case 2432:
case 3530:
case 3743:
case 3697:
case 2723:
case 105:
case 437:
case 3350:
case 1179:
case 3973:
case 2625:
case 2955:
case 2934:
case 1095:
case 3100:
case 865:
case 2671:
case 1122:
case 2468:
case 3027:
case 1263:
case 1528:
case 774:
case 1110:
case 565:
case 2891:
case 2937:
case 25:
case 688:
case 921:
case 47:
case 2411:
case 363:
case 3024:
case 15:
case 1937:
case 1891:
case 3401:
case 4009:
case 3186:
case 3142:
case 1047:
case 3548:
case 2833:
case 2095:
case 2485:
case 2263:
case 2528:
case 2110:
case 470:
case 1409:
case 2194:
case 4011:
case 2566:
case 1426:
case 3419:
case 3952:
case 1145:
case 2197:
case 4068:
case 125:
case 2145:
case 4085:
case 3092:
case 225:
case 3482:
case 3767:
case 531:
case 3125:
case 1194:
case 2409:
case 3446:
case 2426:
case 621:
case 988:
case 2244:
case 213:
case 1686:
case 1642:
case 2247:
case 2642:
case 2295:
case 445:
case 1247:
case 3610:
case 3383:
case 3622:
case 1244:
case 3470:
case 2686:
case 113:
case 575:
case 1031:
case 2857:
case 46:
case 3159:
case 1953:
case 2854:
case 875:
case 2771:
case 1288:
case 2941:
case 1854:
case 307:
case 1265:
case 1771:
case 3921:
case 643:
case 4050:
case 1370:
case 3309:
case 1164:
case 1319:
case 3651:
case 957:
case 2382:
case 2623:
case 1725:
case 1623:
case 2725:
case 2596:
case 382:
case 411:
case 840:
case 2659:
case 3808:
case 712:
case 2972:
case 3587:
case 1818:
case 3385:
case 1088:
case 2065:
case 1231:
case 3584:
case 1861:
case 2231:
case 2861:
case 2742:
case 1700:
case 1293:
case 2088:
case 3710:
case 1065:
case 3368:
case 54:
case 817:
case 196:
case 1906:
case 4083:
case 3262:
case 3123:
case 3916:
case 1450:
case 460:
case 3039:
case 3664:
case 296:
case 2906:
case 1143:
case 3667:
case 2789:
case 1712:
case 3970:
case 3702:
case 2720:
case 2712:
case 3533:
case 3740:
case 448:
case 1789:
case 3341:
case 409:
case 2577:
case 3036:
case 128:
case 2574:
case 2926:
case 2260:
case 2909:
case 3946:
case 2830:
case 3776:
case 4037:
case 1113:
case 1830:
case 4055:
case 1577:
case 1911:
case 1437:
case 761:
case 1968:
case 3372:
case 1434:
case 1455:
case 868:
case 1985:
case 2434:
case 2455:
case 2437:
case 2060:
case 542:
case 3380:
case 3613:
case 2705:
case 1603:
case 3473:
case 380:
case 2316:
case 149:
case 108:
case 842:
case 1349:
case 3236:
case 3278:
case 249:
case 1599:
case 856:
case 3306:
case 556:
case 2603:
case 1115:
case 1480:
case 1090:
case 559:
case 619:
case 2429:
case 859:
case 246:
case 3449:
case 2569:
case 2373:
case 472:
case 834:
case 1181:
case 146:
case 252:
case 2480:
case 2090:
case 1612:
case 993:
case 1620:
case 89:
case 3535:
case 3554:
case 904:
case 624:
case 1472:
case 2214:
case 2998:
case 1058:
case 3355:
case 1998:
case 2058:
case 2620:
case 2612:
case 2756:
case 3207:
case 3640:
case 919:
case 590:
case 890:
case 1176:
case 2605:
case 1290:
case 2176:
case 3615:
case 1605:
case 2290:
case 1138:
case 4072:
case 2884:
case 3189:
case 924:
case 2453:
case 2441:
case 2887:
case 2102:
case 2508:
case 1140:
case 771:
case 1887:
case 3120:
case 1017:
case 3007:
case 2140:
case 4080:
case 1884:
case 1014:
case 3004:
case 1441:
case 3064:
case 1511:
case 14:
case 3639:
case 3501:
case 1162:
case 1223:
case 1568:
case 1585:
case 1387:
case 2223:
case 2162:
case 3251:
case 4066:
case 400:
case 3131:
case 2852:
case 1665:
case 2999:
case 217:
case 3430:
case 117:
case 1999:
case 896:
case 1852:
case 1023:
case 3267:
case 275:
case 3837:
case 3834:
case 3855:
case 433:
case 3933:
case 2023:
case 175:
case 3662:
case 3051:
case 1747:
case 1693:
case 4028:
case 2526:
case 1466:
case 1873:
case 140:
case 2974:
case 2631:
case 2509:
case 3546:
case 40:
case 1526:
case 3519:
case 1631:
case 2744:
case 3165:
case 2747:
case 584:
case 1795:
case 2788:
case 2663:
case 1765:
case 1271:
case 1127:
case 550:
case 610:
case 2086:
case 850:
case 131:
case 2496:
case 2932:
case 3829:
case 2124:
case 961:
case 1932:
case 231:
case 3144:
case 386:
case 2849:
case 525:
case 2765:
case 2271:
case 1042:
case 947:
case 2000:
case 2225:
case 1583:
case 3245:
case 653:
case 813:
case 3918:
case 1908:
case 3079:
case 1225:
case 2583:
case 3297:
case 910:
case 2550:
case 1644:
case 2731:
case 599:
case 3222:
case 3163:
case 1969:
case 1647:
case 2330:
case 1793:
case 2242:
case 805:
case 292:
case 2200:
case 2647:
case 1695:
case 1286:
case 1875:
case 1731:
case 505:
case 661:
case 3935:
case 61:
case 265:
case 3045:
case 716:
case 3487:
case 2348:
case 3484:
case 2821:
case 3841:
case 3094:
case 1805:
case 1427:
case 271:
case 2001:
case 451:
case 1424:
case 2270:
case 2564:
case 640:
case 3444:
case 1196:
case 1001:
case 370:
case 2424:
case 917:
case 1567:
case 543:
case 345:
case 2282:
case 2246:
case 1684:
case 1219:
case 3226:
case 3559:
case 398:
case 1282:
case 3696:
case 2201:
case 940:
case 2070:
case 1551:
case 3876:
case 2730:
case 1393:
case 857:
case 2551:
case 337:
case 3838:
case 2331:
case 1070:
case 2046:
case 3009:
case 2748:
case 2082:
case 2820:
case 1492:
case 2978:
case 3187:
case 37:
case 463:
case 1046:
case 2889:
case 2019:
case 11:
case 3250:
case 1784:
case 3586:
case 3542:
case 1787:
case 2522:
case 2128:
case 3500:
case 781:
case 3392:
case 708:
case 1510:
case 1128:
case 1522:
case 21:
case 888:
case 2784:
case 3431:
case 1907:
case 4039:
case 3917:
case 2803:
case 247:
case 692:
case 1579:
case 147:
case 2904:
case 2363:
case 2579:
case 3083:
case 3813:
case 2907:
case 2648:
case 2856:
case 2439:
case 3050:
case 153:
case 36:
case 473:
case 253:
case 1648:
case 1856:
case 521:
case 965:
case 992:
case 2347:
case 1630:
case 2545:
case 3098:
case 1395:
case 1597:
case 3488:
case 2344:
case 3796:
case 631:
case 482:
case 3324:
case 1344:
case 1545:
case 1347:
case 2395:
case 4062:
case 3283:
case 1033:
case 574:
case 1895:
case 1415:
case 3827:
case 1943:
case 3149:
case 928:
case 216:
case 608:
case 1951:
case 2773:
case 2129:
case 1675:
case 1844:
case 2943:
case 2951:
case 1106:
case 1129:
case 1773:
case 2675:
case 3116:
case 379:
case 3923:
case 2033:
case 2415:
case 597:
case 2180:
case 4040:
case 4038:
case 3653:
case 3641:
case 3299:
case 1578:
case 3077:
case 1172:
case 792:
case 3755:
case 1621:
case 4076:
case 285:
case 908:
case 366:
case 2649:
case 2291:
case 3629:
case 1616:
case 949:
case 2438:
case 2303:
case 2964:
case 1476:
case 1863:
case 2476:
case 3680:
case 2752:
case 1649:
case 1967:
case 2616:
case 3099:
case 3489:
case 2402:
case 1440:
case 1402:
case 3420:
case 358:
case 3959:
case 838:
case 1141:
case 3672:
case 3753:
case 3741:
case 104:
case 3232:
case 3340:
case 3590:
case 3302:
case 3655:
case 302:
case 3069:
case 204:
case 2945:
case 952:
case 2673:
case 3925:
case 775:
case 1775:
case 1261:
case 3208:
case 2035:
case 3376:
case 2413:
case 1218:
case 1893:
case 2994:
case 1035:
case 3403:
case 2218:
case 2831:
case 4:
case 3558:
case 2261:
case 717:
case 3942:
case 1155:
case 2922:
case 3839:
case 322:
case 2134:
case 1922:
case 1910:
case 3772:
case 224:
case 3456:
case 2254:
case 3008:
case 1305:
case 1018:
case 3315:
case 1888:
case 3517:
case 2865:
case 812:
case 1504:
case 3706:
case 2749:
case 1652:
case 3514:
case 3729:
case 1716:
case 2504:
case 1257:
case 2652:
case 2061:
case 2979:
case 3381:
case 219:
case 2507:
case 1254:
case 2305:
case 2888:
case 2277:
case 1672:
case 3153:
case 3141:
case 2274:
case 1412:
case 3402:
case 1892:
case 1274:
case 723:
case 3440:
case 1121:
case 1489:
case 2672:
case 258:
case 1099:
case 2959:
case 68:
case 3967:
case 715:
case 1175:
case 3649:
case 266:
case 1313:
case 3438:
case 3863:
case 490:
case 3752:
case 1606:
case 166:
case 2074:
case 1737:
case 2653:
case 3536:
case 777:
case 1755:
case 883:
case 794:
case 3172:
case 3578:
case 1299:
case 826:
case 1641:
case 1074:
case 385:
case 572:
case 73:
case 179:
case 636:
case 3091:
case 872:
case 316:
case 2149:
case 3675:
case 2923:
case 279:
case 2116:
case 3943:
case 459:
case 1149:
case 1827:
case 3895:
case 2315:
case 1780:
case 3254:
case 514:
case 2514:
case 1381:
case 814:
case 654:
case 3257:
case 2706:
case 1729:
case 3061:
case 3716:
case 319:
case 176:
case 1517:
case 1315:
case 3018:
case 3507:
case 3305:
case 3910:
case 468:
case 324:
case 4003:
case 2456:
case 862:
case 3945:
case 1558:
case 1152:
case 562:
case 2376:
case 1338:
case 3054:
case 3035:
case 3994:
case 1925:
case 939:
case 3261:
case 3997:
case 2152:
case 1069:
case 3721:
case 1971:
case 767:
case 848:
case 102:
case 1655:
case 789:
case 3320:
case 1302:
case 509:
case 1590:
case 741:
case 1637:
case 393:
case 2590:
case 2302:
case 1340:
case 304:
case 3389:
case 1753:
case 202:
case 2655:
case 1741:
case 17:
case 3046:
case 1187:
case 3082:
case 2362:
case 4095:
case 2728:
case 1802:
case 3492:
case 3978:
case 2187:
case 4047:
case 754:
case 1362:
case 1026:
case 45:
case 2184:
case 3889:
case 27:
case 1009:
case 3070:
case 2696:
case 3201:
case 2876:
case 2463:
case 3393:
case 1838:
case 137:
case 2268:
case 1463:
case 1285:
case 2838:
case 2211:
case 941:
case 245:
case 3282:
case 198:
case 2960:
case 3246:
case 1339:
case 1226:
case 1209:
case 2339:
case 413:
case 3687:
case 145:
case 298:
case 2815:
case 3567:
case 425:
case 1881:
case 3564:
case 371:
case 3196:
case 3001:
case 689:
case 270:
case 2881:
case 3424:
case 450:
case 2444:
case 641:
case 1815:
case 1085:
case 3427:
case 2488:
case 994:
case 3545:
case 2098:
case 903:
case 2324:
case 3344:
case 484:
case 686:
case 80:
case 310:
case 1324:
case 630:
case 3594:
case 1488:
case 2465:
case 1327:
case 3630:
case 2958:
case 977:
case 3395:
case 1571:
case 3648:
case 820:
case 16:
case 353:
case 555:
case 4093:
case 615:
case 2571:
case 855:
case 335:
case 1628:
case 923:
case 2431:
case 82:
case 986:
case 694:
case 52:
case 2914:
case 1813:
case 1083:
case 1493:
case 3803:
case 3363:
case 3579:
case 1914:
case 2130:
case 2493:
case 3904:
case 260:
case 1917:
case 1431:
case 3907:
case 2250:
case 3522:
case 780:
case 3128:
case 2148:
case 4088:
case 1392:
case 500:
case 1500:
case 3462:
case 1148:
case 736:
case 2500:
case 2392:
case 1586:
case 31:
case 63:
case 937:
case 2582:
case 1727:
case 1396:
case 3631:
case 241:
case 3509:
case 289:
case 3744:
case 1546:
case 3466:
case 2519:
case 702:
case 3693:
case 3747:
case 167:
case 1188:
case 2165:
case 573:
case 1051:
case 375:
case 97:
case 1933:
case 2855:
case 2834:
case 873:
case 421:
case 787:
case 1834:
case 1855:
case 1264:
case 2051:
case 2043:
case 769:
case 645:
case 2131:
case 3852:
case 1193:
case 3999:
case 3059:
case 2193:
case 722:
case 1131:
case 2639:
case 67:
case 2501:
case 401:
case 488:
case 2064:
case 776:
case 2448:
case 1251:
case 998:
case 2251:
case 3568:
case 1067:
case 34:
case 1501:
case 527:
case 96:
case 2935:
case 2954:
case 863:
case 2957:
case 563:
case 1097:
case 3598:
case 1487:
case 1762:
case 1328:
case 1957:
case 1045:
case 2097:
case 2762:
case 2279:
case 13:
case 1935:
case 2841:
case 2094:
case 2484:
case 3550:
case 3330:
case 3242:
case 2222:
case 2210:
case 1627:
case 3200:
case 1210:
case 3071:
case 1163:
case 1222:
case 2627:
case 911:
case 3644:
case 203:
case 766:
case 2245:
case 3225:
case 1961:
case 215:
case 2739:
case 1294:
case 1918:
case 2294:
case 443:
case 2918:
case 2297:
case 1692:
case 115:
case 3583:
case 2961:
case 3788:
case 3663:
case 2880:
case 2022:
case 3496:
case 1806:
case 1829:
case 2366:
case 123:
case 960:
case 331:
case 3849:
case 2806:
case 1366:
case 2829:
case 2147:
case 758:
case 1880:
case 1022:
case 3765:
case 1010:
case 3705:
case 1715:
case 136:
case 2236:
case 1329:
case 2866:
case 381:
case 308:
case 1236:
case 236:
case 3349:
case 2306:
case 180:
case 1866:
case 1473:
case 2329:
case 2278:
case 349:
case 1613:
case 1380:
case 1156:
case 3455:
case 3434:
case 3968:
case 1372:
case 2156:
case 1901:
case 3911:
case 2036:
case 8:
case 979:
case 1078:
case 3909:
case 2946:
case 1103:
case 2738:
case 1919:
case 3574:
case 1946:
case 2103:
case 76:
case 2776:
case 2919:
case 1036:
case 464:
case 666:
case 2452:
case 4073:
case 28:
case 3789:
case 1533:
case 1740:
case 711:
case 1828:
case 518:
case 3848:
case 2740:
case 3712:
case 1970:
case 2828:
case 3321:
case 1004:
case 602:
case 3453:
case 3441:
case 2421:
case 2189:
case 1007:
case 3508:
case 1112:
case 1518:
case 3887:
case 2120:
case 770:
case 3258:
case 2004:
case 4016:
case 1421:
case 3352:
case 669:
case 1475:
case 3605:
case 1615:
case 2713:
case 3290:
case 3703:
case 798:
case 2535:
case 1207:
case 2334:
case 1204:
case 3214:
case 737:
case 1334:
case 1355:
case 2204:
case 3058:
case 1557:
case 3756:
case 1337:
case 1554:
case 3406:
case 3429:
case 497:
case 239:
case 1416:
case 969:
case 3569:
case 2416:
case 139:
case 532:
case 3115:
case 3480:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752152402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,];
var gg_b = "1752152402/";

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
