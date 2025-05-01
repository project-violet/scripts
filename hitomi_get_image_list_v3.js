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
case 2526:
case 3148:
case 1911:
case 1275:
case 2264:
case 1781:
case 2129:
case 1988:
case 202:
case 2367:
case 1585:
case 2732:
case 2112:
case 539:
case 125:
case 530:
case 1582:
case 2083:
case 2115:
case 3834:
case 3974:
case 3579:
case 62:
case 2294:
case 1844:
case 3886:
case 1272:
case 3101:
case 911:
case 3191:
case 3289:
case 431:
case 3440:
case 2080:
case 3571:
case 3456:
case 669:
case 3596:
case 3506:
case 3218:
case 4073:
case 300:
case 309:
case 3109:
case 3199:
case 3775:
case 2539:
case 1892:
case 1865:
case 2874:
case 3327:
case 1603:
case 1805:
case 1862:
case 2651:
case 3169:
case 139:
case 2257:
case 3566:
case 666:
case 241:
case 2121:
case 924:
case 3654:
case 2157:
case 515:
case 3020:
case 2753:
case 3413:
case 1791:
case 2145:
case 1701:
case 1455:
case 1908:
case 914:
case 1998:
case 2627:
case 1814:
case 1562:
case 3351:
case 1447:
case 538:
case 2979:
case 1592:
case 1502:
case 3118:
case 2839:
case 2093:
case 1828:
case 877:
case 2387:
case 1051:
case 1452:
case 2236:
case 1968:
case 27:
case 1761:
case 3806:
case 3896:
case 3181:
case 147:
case 764:
case 2000:
case 2906:
case 2996:
case 403:
case 1544:
case 3586:
case 115:
case 3534:
case 3189:
case 3201:
case 3276:
case 1882:
case 3607:
case 1323:
case 3697:
case 61:
case 1175:
case 2164:
case 1683:
case 1885:
case 1709:
case 3023:
case 3261:
case 2750:
case 138:
case 2746:
case 2477:
case 547:
case 2060:
case 2229:
case 1754:
case 3016:
case 657:
case 1160:
case 907:
case 3601:
case 961:
case 3691:
case 122:
case 3394:
case 2466:
case 270:
case 2615:
case 351:
case 583:
case 724:
case 831:
case 2977:
case 2471:
case 2629:
case 2556:
case 2612:
case 276:
case 2406:
case 2072:
case 3661:
case 1100:
case 1190:
case 4028:
case 1316:
case 3648:
case 3345:
case 2543:
case 1042:
case 2227:
case 616:
case 1952:
case 384:
case 2621:
case 1441:
case 2479:
case 197:
case 2151:
case 372:
case 3431:
case 1103:
case 1193:
case 1280:
case 3254:
case 773:
case 1797:
case 1707:
case 3669:
case 3783:
case 3609:
case 1767:
case 3699:
case 3187:
case 1163:
case 2684:
case 3877:
case 2318:
case 4085:
case 3342:
case 610:
case 1498:
case 3700:
case 2642:
case 53:
case 1263:
case 3287:
case 1419:
case 2510:
case 3336:
case 3681:
case 3078:
case 3384:
case 620:
case 278:
case 629:
case 291:
case 1346:
case 964:
case 2369:
case 2127:
case 3046:
case 721:
case 834:
case 1870:
case 1930:
case 1036:
case 2657:
case 1203:
case 2645:
case 2843:
case 2251:
case 4092:
case 4002:
case 2720:
case 3474:
case 2348:
case 4065:
case 2361:
case 13:
case 3053:
case 3943:
case 2259:
case 1015:
case 2664:
case 1933:
case 3167:
case 1290:
case 635:
case 2840:
case 3763:
case 3793:
case 553:
case 112:
case 1411:
case 1029:
case 1260:
case 2537:
case 2513:
case 1353:
case 714:
case 2301:
case 165:
case 477:
case 687:
case 2023:
case 1808:
case 1522:
case 566:
case 2248:
case 2410:
case 1784:
case 12:
case 1519:
case 3746:
case 1914:
case 1116:
case 1300:
case 625:
case 3229:
case 3966:
case 3060:
case 3996:
case 3090:
case 1360:
case 143:
case 2586:
case 2534:
case 344:
case 873:
case 2291:
case 2879:
case 1841:
case 560:
case 1868:
case 3104:
case 3194:
case 1525:
case 2697:
case 2607:
case 52:
case 3093:
case 3003:
case 3979:
case 1363:
case 3387:
case 3236:
case 1982:
case 1132:
case 1250:
case 3142:
case 1246:
case 2209:
case 2299:
case 2931:
case 2181:
case 1849:
case 407:
case 2437:
case 1511:
case 824:
case 3221:
case 1715:
case 169:
case 160:
case 3627:
case 1303:
case 4047:
case 1588:
case 3063:
case 2351:
case 2327:
case 3245:
case 3651:
case 1888:
case 647:
case 1178:
case 2169:
case 1794:
case 2772:
case 1235:
case 1380:
case 1811:
case 814:
case 3986:
case 2440:
case 1549:
case 1054:
case 3716:
case 2456:
case 1944:
case 2596:
case 209:
case 2281:
case 568:
case 4030:
case 3539:
case 3242:
case 3184:
case 3934:
case 3735:
case 3083:
case 1067:
case 1568:
case 1623:
case 3115:
case 3397:
case 2579:
case 1992:
case 3204:
case 2176:
case 4017:
case 1757:
case 4033:
case 2289:
case 821:
case 2191:
case 734:
case 2148:
case 464:
case 1962:
case 1819:
case 1995:
case 1458:
case 3732:
case 1097:
case 1007:
case 2689:
case 2703:
case 3513:
case 3694:
case 2315:
case 2107:
case 519:
case 510:
case 1555:
case 3301:
case 931:
case 1405:
case 1495:
case 3376:
case 1048:
case 1547:
case 1462:
case 1223:
case 1076:
case 1402:
case 1492:
case 1830:
case 3348:
case 1616:
case 1465:
case 3720:
case 128:
case 424:
case 1552:
case 1001:
case 3259:
case 516:
case 2312:
case 2167:
case 157:
case 1338:
case 2329:
case 1973:
case 1099:
case 1009:
case 119:
case 3723:
case 3369:
case 1444:
case 2956:
case 2050:
case 1817:
case 2940:
case 2046:
case 3486:
case 3434:
case 2154:
case 3843:
case 3251:
case 2700:
case 2287:
case 3510:
case 683:
case 4019:
case 697:
case 1759:
case 2681:
case 2384:
case 2618:
case 391:
case 116:
case 3309:
case 3399:
case 1632:
case 1069:
case 3684:
case 2937:
case 1650:
case 2426:
case 593:
case 518:
case 3318:
case 1120:
case 3636:
case 3381:
case 1485:
case 56:
case 903:
case 4008:
case 4068:
case 2345:
case 120:
case 535:
case 129:
case 284:
case 4041:
case 3479:
case 2357:
case 2431:
case 272:
case 1517:
case 1533:
case 2032:
case 934:
case 4049:
case 3540:
case 3629:
case 118:
case 193:
case 3612:
case 1375:
case 2364:
case 3496:
case 376:
case 305:
case 2439:
case 612:
case 526:
case 2648:
case 135:
case 2780:
case 2207:
case 2297:
case 2016:
case 1855:
case 1653:
case 2691:
case 2601:
case 1123:
case 3615:
case 3813:
case 3466:
case 2394:
case 3389:
case 3977:
case 2781:
case 463:
case 1526:
case 2911:
case 1659:
case 795:
case 31:
case 2600:
case 3007:
case 1112:
case 3508:
case 3822:
case 1367:
case 3383:
case 102:
case 3995:
case 2718:
case 368:
case 3819:
case 3962:
case 3470:
case 2724:
case 3992:
case 3541:
case 332:
case 3623:
case 1115:
case 4043:
case 3568:
case 225:
case 2582:
case 733:
case 1083:
case 2660:
case 3153:
case 2417:
case 3757:
case 2272:
case 541:
case 2844:
case 992:
case 3620:
case 3549:
case 1136:
case 1986:
case 2663:
case 1874:
case 1934:
case 455:
case 3146:
case 1539:
case 2528:
case 2802:
case 3764:
case 449:
case 440:
case 446:
case 3794:
case 230:
case 1651:
case 2919:
case 3888:
case 2603:
case 2514:
case 2805:
case 1121:
case 3811:
case 980:
case 945:
case 2701:
case 2791:
case 823:
case 600:
case 4013:
case 609:
case 950:
case 3511:
case 2776:
case 1157:
case 3087:
case 2562:
case 1063:
case 2447:
case 3588:
case 2505:
case 2814:
case 3135:
case 369:
case 3715:
case 1221:
case 3132:
case 3982:
case 366:
case 2452:
case 701:
case 2565:
case 2051:
case 3363:
case 675:
case 485:
case 2941:
case 2592:
case 1093:
case 1839:
case 1003:
case 2320:
case 247:
case 606:
case 2761:
case 3250:
case 215:
case 1831:
case 2059:
case 874:
case 3721:
case 1000:
case 2323:
case 2769:
case 1104:
case 1194:
case 3868:
case 2172:
case 882:
case 262:
case 3928:
case 144:
case 3253:
case 448:
case 3914:
case 32:
case 3784:
case 3519:
case 4010:
case 1750:
case 3522:
case 3898:
case 2175:
case 1164:
case 2683:
case 1060:
case 1966:
case 917:
case 57:
case 3736:
case 1826:
case 1212:
case 222:
case 3847:
case 335:
case 3414:
case 855:
case 789:
case 780:
case 1389:
case 1075:
case 170:
case 179:
case 3123:
case 1406:
case 1496:
case 176:
case 1072:
case 3375:
case 2004:
case 2094:
case 786:
case 1629:
case 1556:
case 3089:
case 2449:
case 1540:
case 413:
case 1159:
case 2316:
case 4039:
case 3428:
case 105:
case 2100:
case 846:
case 36:
case 3081:
case 2570:
case 2441:
case 1621:
case 2952:
case 2468:
case 1543:
case 3482:
case 1227:
case 2042:
case 2797:
case 2280:
case 2335:
case 4031:
case 3018:
case 2193:
case 297:
case 3646:
case 1318:
case 3650:
case 654:
case 2408:
case 2498:
case 3485:
case 2045:
case 594:
case 452:
case 505:
case 3120:
case 2858:
case 672:
case 482:
case 3759:
case 1510:
case 2422:
case 3220:
case 3632:
case 788:
case 1309:
case 2346:
case 474:
case 178:
case 1486:
case 3817:
case 3444:
case 1369:
case 1723:
case 319:
case 310:
case 942:
case 490:
case 499:
case 1251:
case 2203:
case 1843:
case 2930:
case 1434:
case 3091:
case 901:
case 967:
case 3465:
case 1720:
case 3402:
case 3492:
case 756:
case 357:
case 2917:
case 1840:
case 1664:
case 2933:
case 2183:
case 1259:
case 2015:
case 2672:
case 1694:
case 1513:
case 2029:
case 1537:
case 2260:
case 750:
case 759:
case 3223:
case 3462:
case 2488:
case 265:
case 3405:
case 885:
case 3958:
case 44:
case 2914:
case 338:
case 1261:
case 858:
case 2784:
case 22:
case 2808:
case 1023:
case 2898:
case 2522:
case 1667:
case 3683:
case 3238:
case 2300:
case 4077:
case 2116:
case 315:
case 243:
case 3544:
case 2360:
case 2525:
case 3323:
case 3882:
case 3172:
case 2868:
case 1276:
case 1201:
case 495:
case 2928:
case 1189:
case 362:
case 404:
case 108:
case 3968:
case 886:
case 266:
case 2982:
case 2712:
case 3051:
case 3828:
case 3592:
case 3941:
case 1118:
case 3502:
case 347:
case 3320:
case 746:
case 1299:
case 1209:
case 1931:
case 1181:
case 2250:
case 3761:
case 3701:
case 1866:
case 913:
case 2278:
case 755:
case 1269:
case 2511:
case 3680:
case 1654:
case 1351:
case 3562:
case 3595:
case 3814:
case 508:
case 2393:
case 2303:
case 2715:
case 45:
case 3998:
case 889:
case 106:
case 339:
case 330:
case 1169:
case 859:
case 850:
case 48:
case 3919:
case 2178:
case 923:
case 3895:
case 3514:
case 1327:
case 3693:
case 467:
case 2380:
case 175:
case 1224:
case 1566:
case 1218:
case 1596:
case 1506:
case 2473:
case 2620:
case 2944:
case 1571:
case 2232:
case 1440:
case 3663:
case 3802:
case 3528:
case 3430:
case 1281:
case 2764:
case 737:
case 336:
case 1109:
case 1199:
case 3925:
case 1579:
case 2902:
case 2992:
case 2541:
case 2470:
case 3724:
case 1834:
case 2825:
case 506:
case 1443:
case 2568:
case 3660:
case 1289:
case 2745:
case 1191:
case 996:
case 3417:
case 3275:
case 990:
case 999:
case 3911:
case 644:
case 21:
case 2822:
case 2598:
case 2508:
case 2007:
case 2097:
case 442:
case 2995:
case 2458:
case 2962:
case 817:
case 3988:
case 2819:
case 3138:
case 955:
case 713:
case 3672:
case 798:
case 3012:
case 1315:
case 2751:
case 949:
case 312:
case 2048:
case 3488:
case 2495:
case 0:
case 676:
case 3353:
case 2061:
case 2555:
case 2001:
case 2091:
case 489:
case 33:
case 2552:
case 2465:
case 1474:
case 2970:
case 2492:
case 2830:
case 1763:
case 1329:
case 3917:
case 946:
case 3200:
case 3675:
case 3015:
case 4086:
case 1940:
case 581:
case 353:
case 2444:
case 99:
case 752:
case 2635:
case 2833:
case 2099:
case 3203:
case 3180:
case 3036:
case 3930:
case 3870:
case 1154:
case 458:
case 1321:
case 154:
case 1336:
case 895:
case 2759:
case 804:
case 3021:
case 1287:
case 3422:
case 1790:
case 216:
case 3346:
case 1618:
case 2646:
case 799:
case 1877:
case 1937:
case 1426:
case 2650:
case 1913:
case 3332:
case 1035:
case 1783:
case 3408:
case 1342:
case 226:
case 2120:
case 691:
case 3441:
case 229:
case 3042:
case 774:
case 3468:
case 2533:
case 3103:
case 172:
case 1431:
case 2517:
case 383:
case 796:
case 397:
case 4006:
case 3094:
case 867:
case 3638:
case 3449:
case 74:
case 4071:
case 801:
case 2089:
case 1648:
case 3316:
case 1439:
case 445:
case 2530:
case 3283:
case 3100:
case 450:
case 322:
case 3160:
case 2855:
case 2653:
case 1297:
case 1207:
case 2847:
case 1676:
case 584:
case 235:
case 1780:
case 572:
case 2727:
case 151:
case 2123:
case 1394:
case 1140:
case 91:
case 2319:
case 838:
case 2777:
case 358:
case 290:
case 2322:
case 2883:
case 2685:
case 726:
case 327:
case 1409:
case 1954:
case 3980:
case 2446:
case 3710:
case 2450:
case 1386:
case 274:
case 1213:
case 2478:
case 1469:
case 729:
case 720:
case 3247:
case 3523:
case 2325:
case 2682:
case 296:
case 3668:
case 862:
case 1334:
case 3255:
case 793:
case 386:
case 718:
case 1997:
case 1210:
case 3365:
case 177:
case 392:
case 847:
case 412:
case 76:
case 3649:
case 1143:
case 1755:
case 735:
case 4015:
case 223:
case 2311:
case 1747:
case 2880:
case 2170:
case 1551:
case 3737:
case 2614:
case 1092:
case 2503:
case 3305:
case 1491:
case 1401:
case 3133:
case 1967:
case 380:
case 389:
case 2270:
case 839:
case 359:
case 1851:
case 3688:
case 2803:
case 1028:
case 2605:
case 2695:
case 1243:
case 3314:
case 969:
case 3233:
case 2580:
case 3217:
case 3006:
case 3990:
case 3096:
case 3472:
case 1366:
case 4004:
case 4094:
case 1306:
case 624:
case 3820:
case 1730:
case 2349:
case 966:
case 728:
case 3756:
case 2665:
case 1674:
case 2602:
case 1014:
case 356:
case 422:
case 757:
case 836:
case 2923:
case 252:
case 1379:
case 1137:
case 3823:
case 1113:
case 825:
case 3382:
case 4045:
case 2860:
case 2435:
case 3743:
case 2644:
case 2920:
case 1418:
case 2031:
case 611:
case 1859:
case 497:
case 673:
case 483:
case 3152:
case 2800:
case 2890:
case 2432:
case 2398:
case 2308:
case 1082:
case 3:
case 4042:
case 3903:
case 716:
case 2182:
case 2932:
case 1894:
case 1788:
case 3141:
case 3225:
case 1131:
case 285:
case 1981:
case 3403:
case 2352:
case 987:
case 3219:
case 918:
case 993:
case 83:
case 1487:
case 1126:
case 3222:
case 3630:
case 2420:
case 237:
case 1924:
case 2185:
case 2935:
case 2875:
case 3108:
case 3198:
case 2013:
case 3077:
case 3578:
case 333:
case 3211:
case 920:
case 732:
case 1725:
case 3975:
case 3633:
case 2423:
case 3288:
case 2295:
case 2670:
case 134:
case 2010:
case 438:
case 395:
case 71:
case 304:
case 248:
case 2265:
case 2292:
case 1722:
case 768:
case 3490:
case 3400:
case 3832:
case 2128:
case 1989:
case 3546:
case 1719:
case 3550:
case 2192:
case 1174:
case 2165:
case 1798:
case 72:
case 1467:
case 1901:
case 1239:
case 3358:
case 916:
case 1070:
case 1610:
case 1557:
case 3370:
case 1058:
case 1948:
case 910:
case 3111:
case 29:
case 1497:
case 1545:
case 743:
case 1768:
case 2333:
case 3535:
case 2317:
case 2195:
case 263:
case 3938:
case 3878:
case 2162:
case 897:
case 2575:
case 1226:
case 1969:
case 2978:
case 367:
case 928:
case 2838:
case 3739:
case 301:
case 607:
case 3516:
case 2330:
case 661:
case 2285:
case 246:
case 2706:
case 957:
case 822:
case 3241:
case 436:
case 3853:
case 249:
case 2144:
case 4027:
case 255:
case 2282:
case 2056:
case 1637:
case 2040:
case 769:
case 1909:
case 1073:
case 2572:
case 3125:
case 1594:
case 1815:
case 3031:
case 2152:
case 81:
case 3432:
case 3800:
case 3398:
case 1068:
case 1442:
case 3583:
case 1567:
case 2993:
case 2903:
case 4081:
case 1951:
case 2619:
case 429:
case 288:
case 1457:
case 1634:
case 2963:
case 1098:
case 2382:
case 915:
case 3860:
case 962:
case 3435:
case 121:
case 4024:
case 1331:
case 1770:
case 514:
case 2147:
case 3644:
case 2475:
case 1464:
case 2066:
case 2820:
case 3349:
case 73:
case 1887:
case 3665:
case 3863:
case 3416:
case 1177:
case 2740:
case 2328:
case 435:
case 1773:
case 3258:
case 256:
case 3923:
case 250:
case 3662:
case 2688:
case 313:
case 398:
case 245:
case 3605:
case 3039:
case 487:
case 1959:
case 677:
case 418:
case 1554:
case 1049:
case 2071:
case 4089:
case 2472:
case 2096:
case 2900:
case 2217:
case 521:
case 765:
case 1404:
case 1666:
case 457:
case 930:
case 3170:
case 1854:
case 2737:
case 511:
case 2117:
case 2305:
case 3503:
case 3614:
case 2133:
case 2983:
case 4091:
case 3453:
case 869:
case 124:
case 286:
case 866:
case 4061:
case 34:
case 1374:
case 2302:
case 1429:
case 3158:
case 936:
case 2649:
case 1277:
case 3478:
case 2344:
case 374:
case 843:
case 416:
case 1897:
case 1807:
case 3325:
case 2247:
case 396:
case 3682:
case 111:
case 2641:
case 1679:
case 1019:
case 1421:
case 1927:
case 1436:
case 2034:
case 3777:
case 2698:
case 2608:
case 1025:
case 390:
case 3685:
case 1867:
case 3883:
case 227:
case 410:
case 3446:
case 2130:
case 2086:
case 2980:
case 3450:
case 2710:
case 1891:
case 1279:
case 2655:
case 340:
case 349:
case 2853:
case 2647:
case 1936:
case 1427:
case 2268:
case 355:
case 564:
case 1134:
case 1984:
case 3056:
case 4054:
case 2480:
case 3040:
case 3946:
case 3572:
case 965:
case 2125:
case 2122:
case 818:
case 2119:
case 1356:
case 893:
case 887:
case 267:
case 3978:
case 201:
case 3285:
case 3771:
case 3330:
case 747:
case 346:
case 3796:
case 28:
case 86:
case 2731:
case 2370:
case 715:
case 39:
case 953:
case 1343:
case 762:
case 3317:
case 3105:
case 1266:
case 1929:
case 2938:
case 2188:
case 363:
case 1017:
case 1296:
case 1518:
case 3165:
case 1677:
case 1915:
case 1899:
case 1785:
case 738:
case 2249:
case 3953:
case 3228:
case 2483:
case 3043:
case 432:
case 2358:
case 3658:
case 2149:
case 1171:
case 3292:
case 1994:
case 2832:
case 2550:
case 443:
case 1459:
case 1824:
case 233:
case 2578:
case 3734:
case 819:
case 810:
case 1569:
case 2835:
case 2633:
case 1964:
case 2975:
case 2288:
case 983:
case 3262:
case 3423:
case 3205:
case 3295:
case 3670:
case 1744:
case 42:
case 1945:
case 1055:
case 25:
case 460:
case 828:
case 2816:
case 4087:
case 1957:
case 2630:
case 3538:
case 337:
case 1765:
case 3420:
case 3037:
case 1702:
case 3673:
case 3185:
case 3013:
case 2168:
case 3872:
case 3932:
case 3244:
case 2141:
case 739:
case 1795:
case 161:
case 1179:
case 922:
case 1451:
case 1576:
case 2403:
case 2493:
case 385:
case 1942:
case 466:
case 3355:
case 1234:
case 1883:
case 1685:
case 3867:
case 54:
case 1173:
case 3025:
case 1322:
case 1319:
case 1777:
case 2140:
case 3927:
case 2626:
case 2499:
case 784:
case 2469:
case 2237:
case 174:
case 478:
case 1478:
case 2386:
case 491:
case 2334:
case 844:
case 3019:
case 3421:
case 3679:
case 182:
case 311:
case 772:
case 3897:
case 3807:
case 2095:
case 2005:
case 2639:
case 3374:
case 2062:
case 1563:
case 2461:
case 14:
case 3671:
case 645:
case 1158:
case 4038:
case 3011:
case 909:
case 906:
case 3854:
case 1311:
case 2755:
case 2143:
case 596:
case 1453:
case 2491:
case 2967:
case 2092:
case 2002:
case 2476:
case 1593:
case 2551:
case 2065:
case 1074:
case 1388:
case 2028:
case 1039:
case 1803:
case 2243:
case 198:
case 494:
case 1662:
case 781:
case 3494:
case 4072:
case 692:
case 1580:
case 841:
case 70:
case 314:
case 3959:
case 2730:
case 1349:
case 680:
case 470:
case 3464:
case 1258:
case 1602:
case 2014:
case 1416:
case 1665:
case 3887:
case 3445:
case 3098:
case 2113:
case 3507:
case 3597:
case 2137:
case 2987:
case 3634:
case 571:
case 1341:
case 513:
case 598:
case 2379:
case 152:
case 1644:
case 1920:
case 3331:
case 3686:
case 754:
case 1435:
case 908:
case 1860:
case 2240:
case 3326:
case 2859:
case 2418:
case 1273:
case 3951:
case 2481:
case 802:
case 2082:
case 3567:
case 3442:
case 1583:
case 3068:
case 3179:
case 2918:
case 3795:
case 3337:
case 706:
case 2788:
case 68:
case 47:
case 2515:
case 1244:
case 3313:
case 1182:
case 3286:
case 1872:
case 3234:
case 775:
case 3501:
case 3942:
case 185:
case 2131:
case 4003:
case 601:
case 3451:
case 548:
case 3957:
case 4063:
case 2126:
case 1352:
case 3055:
case 3945:
case 2512:
case 1013:
case 1875:
case 709:
case 2640:
case 2924:
case 3702:
case 3792:
case 2656:
case 3765:
case 137:
case 1538:
case 2529:
case 3964:
case 3569:
case 1734:
case 3824:
case 234:
case 1010:
case 585:
case 3744:
case 2857:
case 1786:
case 2845:
case 1295:
case 1202:
case 2274:
case 148:
case 3310:
case 2584:
case 203:
case 2719:
case 2377:
case 2989:
case 642:
case 4000:
case 4090:
case 3904:
case 3994:
case 3271:
case 3899:
case 3033:
case 3809:
case 3785:
case 2798:
case 3677:
case 3518:
case 3206:
case 3296:
case 3017:
case 2836:
case 3581:
case 2991:
case 2901:
case 2239:
case 1228:
case 1953:
case 540:
case 549:
case 2545:
case 3343:
case 2407:
case 555:
case 2821:
case 364:
case 2557:
case 163:
case 604:
case 2741:
case 1317:
case 3524:
case 1333:
case 954:
case 3912:
case 3340:
case 3356:
case 2812:
case 2969:
case 1575:
case 146:
case 2749:
case 3876:
case 155:
case 3186:
case 3427:
case 1282:
case 3030:
case 1766:
case 149:
case 59:
case 3279:
case 3801:
case 879:
case 2815:
case 2594:
case 65:
case 2999:
case 2909:
case 1946:
case 1040:
case 2454:
case 563:
case 1950:
case 1056:
case 3984:
case 4032:
case 1152:
case 3859:
case 472:
case 3418:
case 2951:
case 1619:
case 674:
case 484:
case 2041:
case 1903:
case 1:
case 778:
case 2567:
case 1230:
case 3082:
case 556:
case 791:
case 1622:
case 2445:
case 550:
case 3733:
case 3113:
case 1625:
case 2098:
case 3987:
case 3137:
case 3379:
case 3717:
case 1147:
case 2770:
case 221:
case 4035:
case 699:
case 3110:
case 1066:
case 2464:
case 1475:
case 3306:
case 623:
case 5:
case 156:
case 517:
case 2339:
case 1756:
case 97:
case 2177:
case 3243:
case 3527:
case 1688:
case 3851:
case 159:
case 150:
case 3366:
case 1472:
case 1990:
case 1217:
case 2554:
case 875:
case 1071:
case 2959:
case 2854:
case 3755:
case 2666:
case 2415:
case 3143:
case 1713:
case 180:
case 224:
case 1133:
case 3967:
case 941:
case 3491:
case 1395:
case 3002:
case 3092:
case 1737:
case 3065:
case 1392:
case 3639:
case 192:
case 377:
case 3062:
case 3448:
case 776:
case 2374:
case 1365:
case 3997:
case 186:
case 2277:
case 3752:
case 2412:
case 2606:
case 2696:
case 527:
case 2671:
case 1438:
case 613:
case 698:
case 3237:
case 1344:
case 3213:
case 4078:
case 273:
case 2019:
case 1255:
case 1641:
case 2807:
case 1523:
case 1247:
case 586:
case 1608:
case 1698:
case 592:
case 1252:
case 454:
case 3156:
case 2927:
case 3626:
case 2484:
case 1086:
case 1980:
case 3499:
case 127:
case 2186:
case 1268:
case 2876:
case 1647:
case 637:
case 409:
case 2801:
case 2279:
case 1241:
case 3594:
case 1125:
case 3231:
case 3073:
case 851:
case 2589:
case 2714:
case 1480:
case 331:
case 2134:
case 1739:
case 101:
case 2340:
case 685:
case 2356:
case 3969:
case 3226:
case 3564:
case 1652:
case 2861:
case 18:
case 77:
case 1298:
case 2343:
case 3961:
case 3497:
case 3407:
case 884:
case 142:
case 1731:
case 1370:
case 2266:
case 1878:
case 1938:
case 2929:
case 1188:
case 1535:
case 2869:
case 2809:
case 2785:
case 1532:
case 2915:
case 1850:
case 2677:
case 567:
case 2296:
case 2518:
case 3610:
case 3836:
case 1358:
case 58:
case 3239:
case 3901:
case 3991:
case 3542:
case 991:
case 978:
case 2106:
case 55:
case 2196:
case 3842:
case 2310:
case 408:
case 1149:
case 2881:
case 2171:
case 3719:
case 3989:
case 3139:
case 1832:
case 1972:
case 2904:
case 69:
case 1835:
case 1633:
case 1975:
case 2964:
case 2569:
case 1578:
case 1617:
case 2824:
case 2744:
case 3643:
case 3845:
case 4023:
case 976:
case 1630:
case 504:
case 2047:
case 1463:
case 1816:
case 3487:
case 595:
case 2548:
case 2055:
case 15:
case 2561:
case 640:
case 1108:
case 3512:
case 905:
case 2702:
case 655:
case 3529:
case 2765:
case 3656:
case 1141:
case 2889:
case 3918:
case 881:
case 261:
case 2337:
case 2762:
case 3804:
case 1168:
case 2052:
case 80:
case 2234:
case 2501:
case 1493:
case 2576:
case 3981:
case 1403:
case 3131:
case 979:
case 3711:
case 970:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746136802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,];
var gg_b = "1746136802/";

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
