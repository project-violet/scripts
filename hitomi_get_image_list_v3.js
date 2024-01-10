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
case 386:
case 2567:
case 2351:
case 1414:
case 25:
case 811:
case 1875:
case 3774:
case 724:
case 2505:
case 1563:
case 3267:
case 715:
case 60:
case 3463:
case 4045:
case 3860:
case 3982:
case 2859:
case 1541:
case 966:
case 1555:
case 741:
case 3847:
case 2536:
case 1462:
case 1603:
case 2934:
case 2169:
case 3323:
case 954:
case 2374:
case 1558:
case 3432:
case 3232:
case 1494:
case 217:
case 3823:
case 3278:
case 1471:
case 194:
case 1774:
case 1935:
case 435:
case 1222:
case 1077:
case 1441:
case 2078:
case 2521:
case 1775:
case 1777:
case 2936:
case 3238:
case 282:
case 1640:
case 1941:
case 3802:
case 2304:
case 3317:
case 1651:
case 31:
case 2681:
case 1248:
case 1054:
case 2025:
case 1670:
case 3150:
case 1803:
case 2091:
case 2865:
case 1432:
case 1592:
case 2354:
case 3043:
case 2901:
case 122:
case 720:
case 3580:
case 2348:
case 3632:
case 1694:
case 2974:
case 3000:
case 3602:
case 1890:
case 3556:
case 1749:
case 331:
case 186:
case 1856:
case 1330:
case 575:
case 184:
case 2116:
case 857:
case 1811:
case 3636:
case 3961:
case 3749:
case 3203:
case 1194:
case 675:
case 2192:
case 2477:
case 3423:
case 1865:
case 1717:
case 3934:
case 953:
case 1290:
case 1309:
case 4017:
case 1761:
case 4002:
case 3138:
case 3927:
case 2395:
case 1957:
case 2283:
case 1072:
case 465:
case 3401:
case 2470:
case 572:
case 2667:
case 2024:
case 1728:
case 3555:
case 1806:
case 1004:
case 701:
case 2827:
case 3628:
case 2403:
case 687:
case 3471:
case 3291:
case 3805:
case 2786:
case 3964:
case 1919:
case 1158:
case 730:
case 49:
case 382:
case 355:
case 3957:
case 2:
case 1621:
case 3533:
case 1009:
case 1942:
case 1099:
case 2503:
case 249:
case 2727:
case 2289:
case 4037:
case 3695:
case 3967:
case 3834:
case 2949:
case 372:
case 1204:
case 2847:
case 1255:
case 3667:
case 1343:
case 3666:
case 2983:
case 1850:
case 2523:
case 162:
case 3318:
case 1997:
case 1289:
case 3433:
case 1703:
case 1789:
case 843:
case 61:
case 3495:
case 3135:
case 2486:
case 1201:
case 1507:
case 2066:
case 2335:
case 1051:
case 2407:
case 3713:
case 1736:
case 2738:
case 473:
case 2336:
case 3972:
case 3419:
case 1992:
case 3800:
case 1832:
case 1594:
case 3541:
case 1084:
case 3443:
case 3740:
case 1897:
case 3730:
case 1818:
case 866:
case 3250:
case 3799:
case 1492:
case 3277:
case 2878:
case 1586:
case 1853:
case 1947:
case 2125:
case 1826:
case 273:
case 317:
case 2613:
case 1391:
case 1305:
case 2196:
case 3754:
case 1384:
case 3204:
case 3454:
case 2213:
case 1642:
case 1319:
case 1780:
case 526:
case 340:
case 722:
case 3601:
case 268:
case 2266:
case 2033:
case 1756:
case 2955:
case 869:
case 1281:
case 3030:
case 3302:
case 3258:
case 3848:
case 99:
case 2868:
case 1027:
case 118:
case 2683:
case 3022:
case 3935:
case 3914:
case 3053:
case 3231:
case 868:
case 316:
case 1342:
case 3757:
case 2338:
case 3854:
case 1858:
case 2698:
case 1448:
case 610:
case 2814:
case 3739:
case 147:
case 2453:
case 2764:
case 818:
case 2592:
case 2248:
case 888:
case 174:
case 3118:
case 2134:
case 485:
case 947:
case 310:
case 1734:
case 1155:
case 2739:
case 1367:
case 321:
case 2723:
case 3365:
case 923:
case 2715:
case 255:
case 3200:
case 1584:
case 2577:
case 831:
case 1727:
case 2393:
case 2850:
case 3529:
case 3059:
case 1273:
case 1271:
case 303:
case 1977:
case 3518:
case 762:
case 2625:
case 681:
case 4040:
case 2976:
case 2038:
case 1712:
case 2208:
case 837:
case 1529:
case 175:
case 1267:
case 1920:
case 1835:
case 3849:
case 1764:
case 1050:
case 3387:
case 3726:
case 1654:
case 3382:
case 542:
case 2408:
case 3251:
case 399:
case 3536:
case 3657:
case 4022:
case 1242:
case 587:
case 998:
case 3699:
case 2341:
case 524:
case 581:
case 3784:
case 3107:
case 1499:
case 362:
case 2488:
case 1896:
case 3750:
case 3168:
case 2973:
case 577:
case 2561:
case 858:
case 100:
case 1449:
case 1990:
case 3775:
case 2874:
case 752:
case 1352:
case 3638:
case 1312:
case 1513:
case 2031:
case 2051:
case 2543:
case 2948:
case 867:
case 836:
case 743:
case 3630:
case 2993:
case 2342:
case 1021:
case 128:
case 1332:
case 1879:
case 3786:
case 129:
case 169:
case 2551:
case 3853:
case 3947:
case 3133:
case 2064:
case 63:
case 1200:
case 3005:
case 3858:
case 3313:
case 1207:
case 2946:
case 2939:
case 3817:
case 3139:
case 933:
case 3530:
case 52:
case 2830:
case 2244:
case 1010:
case 1551:
case 2267:
case 643:
case 370:
case 1206:
case 344:
case 2129:
case 1324:
case 387:
case 964:
case 2472:
case 1902:
case 3714:
case 3137:
case 2057:
case 1034:
case 4047:
case 2662:
case 3307:
case 3992:
case 2597:
case 3723:
case 1908:
case 3035:
case 2941:
case 3885:
case 3744:
case 3431:
case 2457:
case 1726:
case 3578:
case 996:
case 263:
case 3876:
case 2630:
case 1804:
case 117:
case 2480:
case 1405:
case 1632:
case 1424:
case 1506:
case 1133:
case 1329:
case 2522:
case 2392:
case 2388:
case 350:
case 209:
case 2230:
case 3872:
case 801:
case 1445:
case 1409:
case 2437:
case 3865:
case 659:
case 1617:
case 2337:
case 233:
case 1731:
case 982:
case 1463:
case 3234:
case 496:
case 2579:
case 1636:
case 629:
case 3160:
case 445:
case 3717:
case 2451:
case 114:
case 593:
case 3762:
case 1783:
case 1221:
case 878:
case 2346:
case 3001:
case 2650:
case 3537:
case 3634:
case 347:
case 777:
case 503:
case 334:
case 2286:
case 2058:
case 3186:
case 2943:
case 1321:
case 3279:
case 3629:
case 2843:
case 76:
case 242:
case 32:
case 1011:
case 4028:
case 157:
case 272:
case 336:
case 3789:
case 330:
case 652:
case 1795:
case 2813:
case 2753:
case 2793:
case 729:
case 3083:
case 3018:
case 1523:
case 2839:
case 3916:
case 46:
case 960:
case 1174:
case 202:
case 2081:
case 967:
case 384:
case 458:
case 439:
case 1869:
case 4013:
case 390:
case 3769:
case 2903:
case 994:
case 1623:
case 112:
case 1440:
case 469:
case 2655:
case 1843:
case 1876:
case 1770:
case 2624:
case 2542:
case 3197:
case 1223:
case 325:
case 134:
case 1464:
case 541:
case 2402:
case 380:
case 427:
case 2443:
case 4067:
case 3056:
case 1283:
case 2940:
case 3591:
case 3149:
case 1258:
case 2135:
case 1274:
case 2118:
case 2653:
case 2495:
case 3503:
case 1017:
case 3068:
case 2410:
case 4082:
case 93:
case 3464:
case 1284:
case 3190:
case 1205:
case 3924:
case 1188:
case 3772:
case 3842:
case 1299:
case 898:
case 2820:
case 3574:
case 2126:
case 2022:
case 1547:
case 3868:
case 1585:
case 171:
case 1800:
case 2217:
case 669:
case 3029:
case 2123:
case 1237:
case 1146:
case 3179:
case 558:
case 3221:
case 3573:
case 3991:
case 3889:
case 4084:
case 3487:
case 2703:
case 430:
case 3893:
case 1111:
case 3958:
case 612:
case 913:
case 2991:
case 2904:
case 3198:
case 1959:
case 1793:
case 3439:
case 3821:
case 2590:
case 3116:
case 3064:
case 3272:
case 3182:
case 3925:
case 2587:
case 3334:
case 1825:
case 745:
case 3208:
case 1956:
case 2313:
case 2345:
case 4062:
case 1486:
case 3768:
case 700:
case 1191:
case 3979:
case 2875:
case 2806:
case 3980:
case 1812:
case 787:
case 1683:
case 2956:
case 2494:
case 920:
case 2178:
case 2089:
case 3123:
case 2265:
case 2502:
case 813:
case 1016:
case 1926:
case 573:
case 3722:
case 901:
case 1773:
case 2732:
case 285:
case 2497:
case 1866:
case 3692:
case 3605:
case 167:
case 3659:
case 583:
case 3687:
case 3504:
case 1147:
case 1211:
case 3282:
case 1296:
case 3027:
case 166:
case 2899:
case 3831:
case 1822:
case 3418:
case 637:
case 703:
case 2439:
case 1557:
case 1277:
case 810:
case 1863:
case 3090:
case 1363:
case 2423:
case 1522:
case 3028:
case 1096:
case 2768:
case 3480:
case 2000:
case 3943:
case 2527:
case 301:
case 2798:
case 1475:
case 3585:
case 973:
case 197:
case 2195:
case 1684:
case 2549:
case 3074:
case 2842:
case 2788:
case 3697:
case 2333:
case 886:
case 3956:
case 3271:
case 2112:
case 3102:
case 247:
case 3845:
case 2629:
case 502:
case 3094:
case 3586:
case 3248:
case 2628:
case 2623:
case 1261:
case 3998:
case 1479:
case 1444:
case 1837:
case 1810:
case 1046:
case 3520:
case 2159:
case 914:
case 3126:
case 4042:
case 2559:
case 757:
case 879:
case 81:
case 14:
case 910:
case 3320:
case 2773:
case 2427:
case 1382:
case 423:
case 2461:
case 2330:
case 3293:
case 528:
case 552:
case 1503:
case 1015:
case 3077:
case 2660:
case 183:
case 1175:
case 3782:
case 2274:
case 814:
case 440:
case 3890:
case 85:
case 2818:
case 2688:
case 1022:
case 2380:
case 480:
case 546:
case 2778:
case 874:
case 590:
case 3645:
case 3217:
case 1333:
case 2781:
case 530:
case 3587:
case 3228:
case 1241:
case 2844:
case 796:
case 4068:
case 3970:
case 3819:
case 1738:
case 1500:
case 477:
case 2513:
case 51:
case 2782:
case 755:
case 514:
case 3915:
case 3707:
case 1251:
case 1364:
case 3008:
case 3189:
case 962:
case 1476:
case 3076:
case 2557:
case 300:
case 204:
case 3497:
case 725:
case 2514:
case 838:
case 3735:
case 279:
case 3167:
case 1817:
case 563:
case 3891:
case 109:
case 963:
case 1747:
case 2048:
case 3153:
case 482:
case 1637:
case 3880:
case 4070:
case 822:
case 359:
case 515:
case 4076:
case 3590:
case 283:
case 2114:
case 3468:
case 3256:
case 2161:
case 2526:
case 753:
case 658:
case 1270:
case 1938:
case 104:
case 3625:
case 894:
case 2344:
case 7:
case 859:
case 940:
case 2835:
case 892:
case 2726:
case 2172:
case 773:
case 11:
case 2852:
case 3626:
case 250:
case 1264:
case 630:
case 2573:
case 2462:
case 3706:
case 1101:
case 3097:
case 1888:
case 1279:
case 2864:
case 2758:
case 2295:
case 1199:
case 2005:
case 3874:
case 2601:
case 1933:
case 2442:
case 3044:
case 3959:
case 2082:
case 460:
case 1109:
case 4049:
case 2641:
case 1166:
case 1576:
case 983:
case 3844:
case 2227:
case 625:
case 244:
case 1842:
case 619:
case 3196:
case 987:
case 4095:
case 3325:
case 402:
case 3066:
case 352:
case 1574:
case 2556:
case 3261:
case 2740:
case 2425:
case 3662:
case 1641:
case 1996:
case 1123:
case 854:
case 782:
case 3409:
case 1883:
case 686:
case 3455:
case 192:
case 943:
case 1302:
case 2113:
case 565:
case 3866:
case 220:
case 750:
case 1294:
case 2754:
case 158:
case 3969:
case 602:
case 2581:
case 1069:
case 3034:
case 320:
case 2704:
case 969:
case 3966:
case 3840:
case 864:
case 3488:
case 3174:
case 828:
case 312:
case 1316:
case 3952:
case 57:
case 3243:
case 48:
case 3919:
case 1613:
case 1782:
case 3803:
case 1240:
case 518:
case 897:
case 4083:
case 2718:
case 2215:
case 3526:
case 3276:
case 1472:
case 2995:
case 3230:
case 3015:
case 3544:
case 3386:
case 2821:
case 13:
case 1864:
case 1903:
case 2086:
case 3013:
case 2989:
case 693:
case 769:
case 2804:
case 2643:
case 3623:
case 3534:
case 904:
case 2583:
case 2700:
case 713:
case 2645:
case 2369:
case 2876:
case 952:
case 1978:
case 2669:
case 433:
case 1037:
case 3570:
case 1163:
case 3101:
case 4078:
case 2696:
case 2417:
case 1189:
case 3112:
case 489:
case 1525:
case 293:
case 1327:
case 1786:
case 3515:
case 1914:
case 3329:
case 2795:
case 2729:
case 3655:
case 1368:
case 1121:
case 1763:
case 662:
case 1265:
case 1823:
case 711:
case 3195:
case 1143:
case 3702:
case 2372:
case 203:
case 3115:
case 486:
case 1125:
case 4060:
case 365:
case 2340:
case 3758:
case 2511:
case 2343:
case 1899:
case 165:
case 2200:
case 2122:
case 881:
case 705:
case 3902:
case 392:
case 2194:
case 2186:
case 2418:
case 3948:
case 276:
case 160:
case 507:
case 2690:
case 3558:
case 2259:
case 1210:
case 3308:
case 1538:
case 2892:
case 1681:
case 318:
case 1402:
case 2553:
case 30:
case 1301:
case 270:
case 1120:
case 2307:
case 574:
case 2302:
case 937:
case 3513:
case 2132:
case 2475:
case 706:
case 3462:
case 3241:
case 2487:
case 2209:
case 2489:
case 829:
case 3507:
case 2619:
case 1861:
case 1478:
case 168:
case 3209:
case 2801:
case 3206:
case 1821:
case 1196:
case 2007:
case 419:
case 2413:
case 3566:
case 2359:
case 3682:
case 2881:
case 1857:
case 1660:
case 815:
case 974:
case 1001:
case 2002:
case 339:
case 1035:
case 554:
case 1624:
case 1706:
case 2242:
case 2917:
case 3360:
case 2595:
case 3899:
case 1031:
case 880:
case 1110:
case 238:
case 3770:
case 2136:
case 1427:
case 2247:
case 322:
case 1209:
case 381:
case 2819:
case 3136:
case 1674:
case 601:
case 1083:
case 2264:
case 2911:
case 683:
case 3178:
case 1950:
case 4010:
case 3809:
case 3968:
case 259:
case 2034:
case 348:
case 492:
case 393:
case 72:
case 1383:
case 2411:
case 1150:
case 840:
case 2958:
case 1480:
case 1849:
case 50:
case 1719:
case 2933:
case 2945:
case 3032:
case 2466:
case 4086:
case 509:
case 3130:
case 1335:
case 631:
case 3393:
case 3724:
case 3609:
case 3678:
case 3508:
case 2045:
case 2008:
case 3689:
case 1960:
case 2065:
case 3604:
case 425:
case 1358:
case 3210:
case 1071:
case 3108:
case 170:
case 1260:
case 1300:
case 1799:
case 1076:
case 2530:
case 1724:
case 1245:
case 2833:
case 2363:
case 4048:
case 123:
case 4077:
case 3731:
case 560:
case 1860:
case 3458:
case 3999:
case 726:
case 3:
case 2019:
case 3879:
case 2896:
case 2109:
case 472:
case 3020:
case 2468:
case 2602:
case 2883:
case 296:
case 3973:
case 3734:
case 3516:
case 2615:
case 536:
case 3921:
case 596:
case 3833:
case 2900:
case 3357:
case 1618:
case 2529:
case 2243:
case 2651:
case 2612:
case 556:
case 1925:
case 3078:
case 2165:
case 1729:
case 1767:
case 2245:
case 2381:
case 830:
case 3540:
case 228:
case 2724:
case 135:
case 413:
case 3663:
case 297:
case 1435:
case 3994:
case 3808:
case 1945:
case 3242:
case 2202:
case 790:
case 4091:
case 806:
case 1855:
case 1177:
case 3719:
case 2293:
case 229:
case 1715:
case 3787:
case 1357:
case 2981:
case 513:
case 1768:
case 680:
case 3025:
case 1769:
case 3711:
case 3489:
case 1845:
case 4053:
case 3644:
case 1400:
case 357:
case 1533:
case 2279:
case 882:
case 1033:
case 2041:
case 2633:
case 3732:
case 149:
case 3180:
case 1140:
case 1520:
case 979:
case 398:
case 803:
case 525:
case 3856:
case 1827:
case 1218:
case 3725:
case 812:
case 2212:
case 1214:
case 1807:
case 2226:
case 1802:
case 4081:
case 2841:
case 2214:
case 1921:
case 638:
case 2128:
case 2837:
case 2069:
case 2107:
case 332:
case 1113:
case 3095:
case 2706:
case 108:
case 1406:
case 2473:
case 3607:
case 1064:
case 2555:
case 2053:
case 3863:
case 1976:
case 3656:
case 1042:
case 930:
case 871:
case 3548:
case 3315:
case 1089:
case 2060:
case 4035:
case 1700:
case 1461:
case 2319:
case 1644:
case 3917:
case 1593:
case 547:
case 656:
case 2043:
case 1859:
case 673:
case 1043:
case 1680:
case 2594:
case 106:
case 2170:
case 3177:
case 1521:
case 2668:
case 3837:
case 614:
case 999:
case 1399:
case 2098:
case 3147:
case 707:
case 1006:
case 2085:
case 1766:
case 3096:
case 395:
case 308:
case 1567:
case 1718:
case 765:
case 45:
case 1650:
case 3524:
case 227:
case 2115:
case 3474:
case 4032:
case 712:
case 621:
case 1534:
case 2858:
case 3373:
case 984:
case 3397:
case 3592:
case 3375:
case 3011:
case 487:
case 1019:
case 506:
case 1575:
case 319:
case 3465:
case 139:
case 3259:
case 3093:
case 2465:
case 329:
case 1760:
case 3154:
case 2139:
case 3581:
case 2301:
case 3942:
case 3237:
case 1840:
case 241:
case 2400:
case 6:
case 3446:
case 576:
case 1407:
case 2770:
case 3014:
case 1108:
case 2156:
case 2394:
case 3434:
case 3612:
case 1465:
case 3296:
case 2216:
case 2256:
case 816:
case 3213:
case 22:
case 3070:
case 196:
case 3627:
case 3795:
case 1458:
case 3301:
case 3319:
case 3675:
case 2147:
case 2239:
case 1185:
case 131:
case 877:
case 900:
case 1699:
case 609:
case 225:
case 3484:
case 3038:
case 1148:
case 3491:
case 1366:
case 1877:
case 1040:
case 3946:
case 540:
case 3225:
case 188:
case 1376:
case 3743:
case 3867:
case 1524:
case 3045:
case 2504:
case 1980:
case 2889:
case 193:
case 1437:
case 1322:
case 1678:
case 2246:
case 1249:
case 3444:
case 2756:
case 2951:
case 1160:
case 2952:
case 267:
case 608:
case 2954:
case 4046:
case 2907:
case 728:
case 3156:
case 1666:
case 1470:
case 1668:
case 2222:
case 2143:
case 794:
case 2075:
case 3643:
case 685:
case 2431:
case 3502:
case 3498:
case 1519:
case 3016:
case 3467:
case 164:
case 2902:
case 1493:
case 1614:
case 2357:
case 1808:
case 1018:
case 789:
case 2390:
case 1970:
case 3406:
case 3407:
case 2775:
case 1028:
case 734:
case 1081:
case 3741:
case 3176:
case 2774:
case 885:
case 2816:
case 2406:
case 3898:
case 3881:
case 3608:
case 2598:
case 2167:
case 3951:
case 950:
case 870:
case 3380:
case 704:
case 3405:
case 1590:
case 459:
case 770:
case 1991:
case 580:
case 2409:
case 39:
case 206:
case 2608:
case 1619:
case 3818:
case 2397:
case 3543:
case 3205:
case 1389:
case 1080:
case 3227:
case 3649:
case 2332:
case 3812:
case 2588:
case 3240:
case 2358:
case 2607:
case 2056:
case 3900:
case 1753:
case 2978:
case 2484:
case 2310:
case 3218:
case 709:
case 2073:
case 210:
case 3944:
case 443:
case 971:
case 2953:
case 3110:
case 505:
case 1816:
case 1612:
case 688:
case 3760:
case 403:
case 3584:
case 254:
case 3816:
case 793:
case 3908:
case 2937:
case 1596:
case 2957:
case 27:
case 3395:
case 200:
case 3427:
case 2137:
case 826:
case 223:
case 378:
case 2909:
case 1337:
case 68:
case 2540:
case 1526:
case 3063:
case 2533:
case 504:
case 3525:
case 1702:
case 3984:
case 3855:
case 1559:
case 3146:
case 802:
case 2916:
case 1987:
case 1247:
case 4074:
case 4058:
case 2238:
case 1353:
case 1361:
case 1253:
case 1972:
case 1626:
case 3246:
case 3007:
case 1395:
case 3882:
case 521:
case 1455:
case 3075:
case 595:
case 3690:
case 736:
case 2370:
case 2525:
case 557:
case 2970:
case 1831:
case 1318:
case 3058:
case 2863:
case 3923:
case 1350:
case 450:
case 3378:
case 1345:
case 2478:
case 3100:
case 2223:
case 1781:
case 1961:
case 309:
case 1824:
case 2093:
case 1570:
case 1665:
case 851:
case 1891:
case 3281:
case 3665:
case 234:
case 219:
case 634:
case 2705:
case 1360:
case 3828:
case 832:
case 3892:
case 3568:
case 1236:
case 1862:
case 3368:
case 1722:
case 3788:
case 3440:
case 3506:
case 2315:
case 2158:
case 4006:
case 3381:
case 1097:
case 3567:
case 865:
case 2180:
case 1304:
case 2515:
case 2609:
case 3564:
case 1790:
case 3752:
case 938:
case 2762:
case 2986:
case 1032:
case 182:
case 3807:
case 3909:
case 2689:
case 2063:
case 824:
case 3651:
case 989:
case 67:
case 1434:
case 3912:
case 3362:
case 2102:
case 290:
case 1303:
case 997:
case 922:
case 335:
case 767:
case 893:
case 3563:
case 124:
case 368:
case 3631:
case 1417:
case 3377:
case 1982:
case 1648:
case 2742:
case 1262:
case 3071:
case 2221:
case 3523:
case 198:
case 324:
case 1656:
case 3211:
case 571:
case 1073:
case 358:
case 961:
case 495:
case 422:
case 36:
case 550:
case 2469:
case 3098:
case 3207:
case 2171:
case 3188:
case 620:
case 2268:
case 222:
case 3265:
case 586:
case 3646:
case 454:
case 2297:
case 1544:
case 2127:
case 4064:
case 1846:
case 674:
case 429:
case 2944:
case 3235:
case 664:
case 3175:
case 2260:
case 2811:
case 2154:
case 3670:
case 432:
case 918:
case 62:
case 908:
case 3499:
case 1282:
case 976:
case 1916:
case 189:
case 314:
case 1776:
case 1758:
case 73:
case 1287:
case 1709:
case 2426:
case 2757:
case 3691:
case 2885:
case 3290:
case 476:
case 498:
case 361:
case 1995:
case 702:
case 564:
case 1652:
case 1820:
case 1086:
case 3827:
case 2930:
case 2906:
case 230:
case 2099:
case 42:
case 2011:
case 2383:
case 3294:
case 912:
case 1238:
case 1518:
case 3694:
case 2631:
case 649:
case 4025:
case 2168:
case 1477:
case 3266:
case 1720:
case 3718:
case 3676:
case 2928:
case 2702:
case 3086:
case 3887:
case 211:
case 1288:
case 366:
case 1226:
case 2719:
case 1932:
case 269:
case 2714:
case 3214:
case 2040:
case 337:
case 1308:
case 1958:
case 306:
case 2318:
case 1394:
case 2258:
case 3088:
case 1969:
case 412:
case 876:
case 407:
case 1887:
case 1056:
case 3216:
case 771:
case 3183:
case 3873:
case 2701:
case 2618:
case 3347:
case 2985:
case 2203:
case 4085:
case 2694:
case 2654:
case 3792:
case 3383:
case 4066:
case 2510:
case 1323:
case 2516:
case 2251:
case 3988:
case 3060:
case 3192:
case 3624:
case 287:
case 2675:
case 641:
case 1396:
case 1403:
case 2938:
case 1362:
case 2808:
case 1024:
case 1893:
case 2185:
case 2585:
case 2042:
case 1165:
case 1923:
case 3152:
case 1737:
case 313:
case 2181:
case 2942:
case 3728:
case 995:
case 3824:
case 2061:
case 1871:
case 3759:
case 3616:
case 2828:
case 776:
case 2626:
case 1725:
case 2656:
case 2015:
case 3046:
case 2824:
case 872:
case 2967:
case 3990:
case 1540:
case 3615:
case 543:
case 3971:
case 1787:
case 144:
case 1867:
case 3668:
case 2979:
case 1234:
case 1610:
case 1527:
case 2519:
case 3252:
case 545:
case 2647:
case 3124:
case 253:
case 1631:
case 1517:
case 1754:
case 2076:
case 18:
case 3061:
case 3614:
case 1454:
case 3633:
case 3896:
case 2584:
case 3843:
case 65:
case 2271:
case 2735:
case 2080:
case 3372:
case 895:
case 3870:
case 388:
case 3686:
case 1348:
case 1757:
case 1286:
case 113:
case 3392:
case 1420:
case 1561:
case 1912:
case 4075:
case 761:
case 3404:
case 142:
case 797:
case 1297:
case 1268:
case 3333:
case 478:
case 1495:
case 1429:
case 4052:
case 3677:
case 3424:
case 1848:
case 3767:
case 1460:
case 808:
case 2879:
case 2249:
case 1502:
case 2327:
case 2760:
case 275:
case 180:
case 3355:
case 2356:
case 1536:
case 3922:
case 1156:
case 1755:
case 3249:
case 1068:
case 3511:
case 2130:
case 90:
case 3830:
case 1762:
case 2871:
case 2925:
case 2377:
case 2055:
case 2720:
case 2309:
case 2006:
case 934:
case 3120:
case 855:
case 2580:
case 3161:
case 3878:
case 1689:
case 2890:
case 2671:
case 1543:
case 3674:
case 2237:
case 82:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1704902402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,];
var gg_b = "1704902402/";

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
