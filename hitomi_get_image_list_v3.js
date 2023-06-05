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
case 3083:
case 3779:
case 2029:
case 3063:
case 3834:
case 2277:
case 3431:
case 218:
case 3069:
case 1760:
case 1885:
case 3767:
case 4091:
case 2250:
case 2662:
case 1251:
case 2066:
case 2702:
case 335:
case 655:
case 2879:
case 2627:
case 1834:
case 177:
case 1114:
case 2192:
case 3707:
case 2964:
case 3378:
case 1424:
case 3619:
case 328:
case 579:
case 2424:
case 3893:
case 3037:
case 3539:
case 1166:
case 254:
case 1938:
case 1553:
case 4049:
case 2231:
case 2107:
case 1186:
case 1904:
case 3299:
case 2172:
case 4021:
case 249:
case 2711:
case 911:
case 1329:
case 2911:
case 3981:
case 3379:
case 913:
case 2452:
case 847:
case 1133:
case 3453:
case 3780:
case 577:
case 2647:
case 78:
case 970:
case 734:
case 2278:
case 1636:
case 2501:
case 812:
case 3159:
case 2661:
case 852:
case 2184:
case 2434:
case 732:
case 2444:
case 816:
case 2275:
case 3590:
case 2971:
case 2906:
case 2523:
case 1503:
case 213:
case 2764:
case 2170:
case 3241:
case 2903:
case 927:
case 2643:
case 2547:
case 1549:
case 1607:
case 3926:
case 1752:
case 1115:
case 1942:
case 545:
case 580:
case 2720:
case 2830:
case 82:
case 525:
case 3630:
case 3458:
case 3311:
case 1529:
case 2483:
case 2322:
case 1222:
case 3967:
case 992:
case 962:
case 4015:
case 3801:
case 1470:
case 3504:
case 1417:
case 3540:
case 3391:
case 257:
case 18:
case 2019:
case 4048:
case 1963:
case 2781:
case 3314:
case 857:
case 1736:
case 417:
case 762:
case 1055:
case 3815:
case 2154:
case 628:
case 1674:
case 2540:
case 3525:
case 1297:
case 2732:
case 1033:
case 641:
case 2344:
case 345:
case 3332:
case 2533:
case 919:
case 2782:
case 395:
case 1036:
case 1487:
case 1621:
case 2153:
case 3765:
case 2168:
case 1382:
case 1523:
case 214:
case 3817:
case 3291:
case 687:
case 2694:
case 703:
case 1116:
case 55:
case 1749:
case 2162:
case 939:
case 805:
case 1365:
case 152:
case 3354:
case 1134:
case 3438:
case 1369:
case 488:
case 1901:
case 3285:
case 1144:
case 3051:
case 3346:
case 125:
case 3711:
case 2892:
case 2530:
case 3462:
case 3227:
case 499:
case 3269:
case 3940:
case 2071:
case 2881:
case 1275:
case 3236:
case 2839:
case 3193:
case 242:
case 1164:
case 3688:
case 3376:
case 1653:
case 3604:
case 950:
case 1848:
case 1998:
case 3562:
case 238:
case 3660:
case 3911:
case 3426:
case 1849:
case 98:
case 2471:
case 363:
case 250:
case 486:
case 543:
case 3667:
case 621:
case 1930:
case 52:
case 1270:
case 1161:
case 310:
case 1717:
case 1141:
case 3488:
case 931:
case 1664:
case 1312:
case 419:
case 1333:
case 1666:
case 2055:
case 1860:
case 2392:
case 3307:
case 1004:
case 912:
case 1181:
case 1733:
case 1941:
case 3077:
case 3651:
case 2804:
case 261:
case 1824:
case 3397:
case 654:
case 601:
case 1283:
case 3191:
case 2144:
case 2372:
case 3790:
case 607:
case 1499:
case 1240:
case 2034:
case 1635:
case 1078:
case 1042:
case 3091:
case 3319:
case 1616:
case 2472:
case 2401:
case 205:
case 3408:
case 2734:
case 648:
case 1405:
case 2087:
case 1098:
case 700:
case 3214:
case 3639:
case 2466:
case 428:
case 115:
case 3381:
case 48:
case 421:
case 1969:
case 1407:
case 2390:
case 2926:
case 1342:
case 1566:
case 2654:
case 728:
case 3281:
case 2948:
case 856:
case 1965:
case 1340:
case 1652:
case 2749:
case 679:
case 2639:
case 1218:
case 1598:
case 583:
case 1360:
case 2893:
case 4092:
case 1836:
case 2412:
case 226:
case 2770:
case 1542:
case 2570:
case 2113:
case 2020:
case 1089:
case 3186:
case 155:
case 3625:
case 2637:
case 30:
case 2961:
case 336:
case 185:
case 3637:
case 1627:
case 2099:
case 1797:
case 1174:
case 3187:
case 835:
case 2511:
case 471:
case 2043:
case 979:
case 3182:
case 2133:
case 3877:
case 388:
case 1307:
case 3441:
case 3125:
case 2967:
case 2786:
case 2600:
case 3846:
case 2673:
case 3058:
case 2261:
case 1506:
case 2606:
case 1268:
case 2046:
case 2312:
case 178:
case 3095:
case 3771:
case 1768:
case 3150:
case 3073:
case 3217:
case 1887:
case 1319:
case 2730:
case 895:
case 3351:
case 2784:
case 33:
case 2310:
case 2641:
case 3393:
case 3862:
case 2266:
case 1622:
case 1899:
case 1552:
case 809:
case 1613:
case 2551:
case 2394:
case 3034:
case 2211:
case 4010:
case 1439:
case 1426:
case 3543:
case 1894:
case 1138:
case 1981:
case 1311:
case 3545:
case 2442:
case 2688:
case 1056:
case 1217:
case 58:
case 2762:
case 2701:
case 2069:
case 1152:
case 937:
case 2438:
case 1003:
case 811:
case 2459:
case 2388:
case 3552:
case 2820:
case 54:
case 2758:
case 3359:
case 1915:
case 3922:
case 3092:
case 606:
case 314:
case 1288:
case 1791:
case 1619:
case 2669:
case 1071:
case 2314:
case 1420:
case 2423:
case 568:
case 775:
case 1780:
case 2091:
case 1847:
case 923:
case 884:
case 1776:
case 487:
case 1500:
case 2220:
case 1669:
case 1086:
case 722:
case 1809:
case 569:
case 429:
case 3659:
case 15:
case 587:
case 2943:
case 3935:
case 1080:
case 2828:
case 2832:
case 1381:
case 393:
case 2482:
case 1428:
case 1729:
case 1842:
case 292:
case 1125:
case 2700:
case 3719:
case 2245:
case 3116:
case 2356:
case 2326:
case 848:
case 1808:
case 1982:
case 3626:
case 1113:
case 3496:
case 3251:
case 1574:
case 696:
case 4036:
case 803:
case 1373:
case 2159:
case 163:
case 3188:
case 317:
case 1287:
case 2595:
case 3827:
case 194:
case 3857:
case 2021:
case 1651:
case 492:
case 1216:
case 3503:
case 360:
case 452:
case 1244:
case 896:
case 2258:
case 868:
case 4067:
case 3499:
case 3265:
case 1845:
case 2679:
case 407:
case 3888:
case 1039:
case 780:
case 2807:
case 3661:
case 2871:
case 109:
case 2088:
case 2514:
case 3956:
case 1032:
case 1692:
case 814:
case 2725:
case 117:
case 1371:
case 2022:
case 1378:
case 1853:
case 659:
case 1511:
case 508:
case 3155:
case 1393:
case 1660:
case 3018:
case 2242:
case 171:
case 2706:
case 2630:
case 3185:
case 598:
case 2886:
case 3337:
case 2771:
case 398:
case 116:
case 870:
case 2593:
case 2217:
case 3043:
case 2597:
case 473:
case 1124:
case 3305:
case 783:
case 3144:
case 763:
case 1063:
case 1609:
case 1614:
case 3399:
case 2554:
case 3515:
case 3729:
case 717:
case 977:
case 645:
case 2486:
case 3985:
case 3621:
case 210:
case 209:
case 2681:
case 60:
case 2469:
case 1488:
case 1256:
case 3589:
case 4081:
case 90:
case 3028:
case 2520:
case 406:
case 211:
case 1790:
case 3632:
case 3446:
case 3380:
case 773:
case 320:
case 941:
case 3847:
case 2094:
case 2816:
case 2432:
case 3629:
case 2305:
case 4007:
case 3653:
case 439:
case 4056:
case 2248:
case 3655:
case 2510:
case 2097:
case 3444:
case 2355:
case 1207:
case 3547:
case 3971:
case 3112:
case 43:
case 1370:
case 3712:
case 1455:
case 1171:
case 1582:
case 1649:
case 3209:
case 1732:
case 2000:
case 380:
case 3671:
case 900:
case 3565:
case 3031:
case 778:
case 1395:
case 1857:
case 3526:
case 3284:
case 1156:
case 566:
case 3294:
case 1384:
case 165:
case 1587:
case 2031:
case 3249:
case 4042:
case 1920:
case 157:
case 3813:
case 2475:
case 1822:
case 201:
case 2683:
case 1194:
case 1460:
case 2306:
case 935:
case 3078:
case 19:
case 3365:
case 2125:
case 3420:
case 2524:
case 1738:
case 574:
case 3588:
case 503:
case 2359:
case 4078:
case 2349:
case 441:
case 3910:
case 2646:
case 1879:
case 3335:
case 787:
case 1944:
case 3989:
case 4083:
case 1742:
case 2214:
case 2731:
case 2081:
case 890:
case 590:
case 652:
case 2543:
case 2123:
case 2649:
case 707:
case 3064:
case 2614:
case 475:
case 3924:
case 280:
case 3684:
case 3769:
case 751:
case 2284:
case 1698:
case 2738:
case 3703:
case 379:
case 3776:
case 2950:
case 2451:
case 2036:
case 2012:
case 1047:
case 3442:
case 3860:
case 3013:
case 1871:
case 2818:
case 2620:
case 933:
case 1513:
case 104:
case 137:
case 3042:
case 1274:
case 3759:
case 2381:
case 2354:
case 264:
case 1263:
case 3649:
case 96:
case 2745:
case 2737:
case 1330:
case 470:
case 355:
case 3006:
case 3383:
case 2078:
case 410:
case 3607:
case 2086:
case 2907:
case 2507:
case 1232:
case 107:
case 980:
case 2014:
case 658:
case 1713:
case 1189:
case 2719:
case 1611:
case 1648:
case 279:
case 3002:
case 81:
case 740:
case 23:
case 359:
case 1721:
case 2281:
case 2304:
case 1237:
case 2079:
case 3508:
case 3829:
case 1835:
case 1190:
case 481:
case 2765:
case 2532:
case 3804:
case 3760:
case 245:
case 2238:
case 1008:
case 3010:
case 3557:
case 1474:
case 1568:
case 624:
case 1273:
case 3263:
case 1483:
case 1320:
case 1536:
case 3782:
case 3695:
case 2283:
case 2342:
case 1177:
case 233:
case 3617:
case 3219:
case 834:
case 2487:
case 2937:
case 876:
case 3544:
case 2429:
case 31:
case 2084:
case 255:
case 1326:
case 2757:
case 1359:
case 4079:
case 3313:
case 3469:
case 1179:
case 1962:
case 3464:
case 666:
case 3460:
case 3352:
case 1347:
case 1805:
case 3194:
case 3436:
case 3079:
case 2522:
case 788:
case 2657:
case 2682:
case 3027:
case 3162:
case 433:
case 3541:
case 2951:
case 3323:
case 2366:
case 1068:
case 1650:
case 1702:
case 2039:
case 2579:
case 612:
case 1897:
case 3962:
case 113:
case 663:
case 2977:
case 2640:
case 3257:
case 154:
case 278:
case 2327:
case 741:
case 2334:
case 2288:
case 2609:
case 2152:
case 3101:
case 3316:
case 3357:
case 2494:
case 510:
case 2534:
case 3823:
case 3945:
case 3366:
case 748:
case 47:
case 1410:
case 2241:
case 4020:
case 2987:
case 2724:
case 2382:
case 3789:
case 1377:
case 501:
case 2301:
case 3100:
case 3204:
case 3161:
case 2574:
case 3167:
case 1169:
case 463:
case 1634:
case 3509:
case 3075:
case 817:
case 1302:
case 427:
case 1684:
case 1159:
case 1706:
case 3533:
case 2226:
case 2077:
case 4004:
case 859:
case 1579:
case 2369:
case 1620:
case 3054:
case 2794:
case 1590:
case 1100:
case 715:
case 3715:
case 3272:
case 493:
case 356:
case 3861:
case 1675:
case 2723:
case 196:
case 1789:
case 3282:
case 2411:
case 2539:
case 2300:
case 2729:
case 1471:
case 1266:
case 845:
case 1690:
case 1334:
case 3927:
case 3682:
case 3820:
case 851:
case 1917:
case 3355:
case 1949:
case 1990:
case 570:
case 1839:
case 2642:
case 4008:
case 383:
case 1239:
case 309:
case 3882:
case 3793:
case 1575:
case 662:
case 3029:
case 145:
case 2193:
case 2652:
case 3022:
case 2115:
case 2589:
case 3120:
case 253:
case 1874:
case 4080:
case 136:
case 318:
case 1057:
case 1595:
case 2280:
case 1:
case 2415:
case 761:
case 2645:
case 3121:
case 3484:
case 197:
case 3593:
case 3774:
case 1625:
case 2969:
case 2228:
case 916:
case 2295:
case 7:
case 3990:
case 2919:
case 1593:
case 457:
case 1296:
case 79:
case 1861:
case 1335:
case 858:
case 3675:
case 3610:
case 2173:
case 3040:
case 172:
case 2516:
case 792:
case 2463:
case 2558:
case 915:
case 952:
case 4039:
case 106:
case 287:
case 1149:
case 1401:
case 4071:
case 3076:
case 9:
case 1799:
case 506:
case 4047:
case 1279:
case 387:
case 1243:
case 2703:
case 2302:
case 1397:
case 546:
case 3459:
case 1438:
case 631:
case 3222:
case 693:
case 3606:
case 2713:
case 1155:
case 2825:
case 3472:
case 3993:
case 64:
case 3889:
case 371:
case 1376:
case 608:
case 203:
case 2588:
case 3234:
case 771:
case 409:
case 3902:
case 1865:
case 2931:
case 2569:
case 829:
case 626:
case 618:
case 854:
case 517:
case 3406:
case 2208:
case 2045:
case 947:
case 2414:
case 3087:
case 341:
case 710:
case 3821:
case 1163:
case 1234:
case 3999:
case 3067:
case 3434:
case 3350:
case 3471:
case 4062:
case 243:
case 1472:
case 1140:
case 3450:
case 1939:
case 1260:
case 1727:
case 3597:
case 87:
case 1804:
case 1926:
case 3899:
case 1053:
case 2426:
case 3510:
case 1875:
case 3944:
case 229:
case 1604:
case 2416:
case 1970:
case 3427:
case 3708:
case 813:
case 3736:
case 1545:
case 3176:
case 1386:
case 999:
case 534:
case 20:
case 184:
case 3951:
case 1838:
case 3270:
case 369:
case 1728:
case 2901:
case 3737:
case 3884:
case 2766:
case 1759:
case 1936:
case 3516:
case 3876:
case 1667:
case 797:
case 1951:
case 638:
case 3717:
case 1498:
case 833:
case 1769:
case 906:
case 182:
case 3177:
case 2799:
case 4061:
case 3914:
case 467:
case 2417:
case 1090:
case 1002:
case 77:
case 3988:
case 1048:
case 3891:
case 3367:
case 1019:
case 1961:
case 2914:
case 1451:
case 3400:
case 1764:
case 2599:
case 3224:
case 1108:
case 2267:
case 3915:
case 2249:
case 3955:
case 3583:
case 2525:
case 1323:
case 237:
case 3146:
case 604:
case 2692:
case 2440:
case 507:
case 1610:
case 1757:
case 1968:
case 3802:
case 701:
case 1884:
case 3300:
case 2337:
case 1882:
case 14:
case 1628:
case 1892:
case 1448:
case 3093:
case 3748:
case 2455:
case 2395:
case 3723:
case 800:
case 2577:
case 3634:
case 94:
case 1262:
case 2894:
case 1931:
case 2397:
case 3842:
case 3959:
case 3169:
case 348:
case 3322:
case 469:
case 404:
case 1916:
case 1683:
case 3978:
case 2808:
case 1671:
case 2497:
case 3166:
case 138:
case 3139:
case 922:
case 2845:
case 3016:
case 1581:
case 3080:
case 627:
case 4052:
case 225:
case 994:
case 1449:
case 327:
case 2583:
case 3296:
case 3360:
case 2876:
case 1096:
case 2592:
case 1182:
case 2792:
case 2380:
case 1041:
case 2082:
case 2279:
case 1406:
case 3676:
case 2461:
case 3934:
case 1491:
case 649:
case 2203:
case 2253:
case 1075:
case 2608:
case 3677:
case 8:
case 193:
case 695:
case 2897:
case 2491:
case 2691:
case 234:
case 2093:
case 1843:
case 1978:
case 1127:
case 619:
case 3104:
case 2476:
case 1754:
case 1682:
case 1364:
case 306:
case 1082:
case 1443:
case 4084:
case 2735:
case 2990:
case 453:
case 304:
case 3474:
case 2847:
case 711:
case 3261:
case 764:
case 3330:
case 1889:
case 2519:
case 1784:
case 1950:
case 1475:
case 1881:
case 2904:
case 191:
case 2370:
case 2204:
case 2347:
case 3072:
case 3803:
case 2623:
case 682:
case 537:
case 563:
case 924:
case 1070:
case 1324:
case 699:
case 670:
case 1902:
case 3340:
case 403:
case 1895:
case 132:
case 212:
case 1602:
case 372:
case 1823:
case 4089:
case 1022:
case 324:
case 2389:
case 632:
case 2603:
case 3475:
case 2132:
case 2909:
case 3423:
case 3575:
case 221:
case 3753:
case 2928:
case 1701:
case 756:
case 2989:
case 2199:
case 2739:
case 3171:
case 3331:
case 2070:
case 426:
case 3164:
case 74:
case 3867:
case 1580:
case 95:
case 161:
case 311:
case 2410:
case 1802:
case 1309:
case 3648:
case 2130:
case 4076:
case 3175:
case 2741:
case 1518:
case 286:
case 671:
case 1933:
case 928:
case 561:
case 3538:
case 1112:
case 1878:
case 3491:
case 3050:
case 1851:
case 1203:
case 2454:
case 1441:
case 1873:
case 1020:
case 2121:
case 3837:
case 3868:
case 2573:
case 2920:
case 1533:
case 2672:
case 3266:
case 804:
case 472:
case 995:
case 400:
case 2136:
case 339:
case 2925:
case 1332:
case 3930:
case 2116:
case 1212:
case 1477:
case 819:
case 1294:
case 3673:
case 3783:
case 3635:
case 4034:
case 983:
case 362:
case 3687:
case 3969:
case 2147:
case 669:
case 4077:
case 3839:
case 3618:
case 3338:
case 2340:
case 3206:
case 3181:
case 268:
case 1433:
case 2576:
case 1102:
case 169:
case 3470:
case 1821:
case 635:
case 987:
case 1345:
case 326:
case 3148:
case 3395:
case 1724:
case 2024:
case 2100:
case 2933:
case 2190:
case 281:
case 2743:
case 4032:
case 1864:
case 1367:
case 2422:
case 1457:
case 2587:
case 697:
case 3278:
case 13:
case 943:
case 777:
case 2674:
case 3128:
case 3501:
case 1000:
case 2824:
case 1009:
case 1379:
case 712:
case 3696:
case 446:
case 2223:
case 2178:
case 1515:
case 3495:
case 1363:
case 181:
case 186:
case 3326:
case 3950:
case 3117:
case 1257:
case 129:
case 124:
case 536:
case 2898:
case 2044:
case 2333:
case 2910:
case 3097:
case 1772:
case 3090:
case 1354:
case 542:
case 1184:
case 2403:
case 1543:
case 3907:
case 1034:
case 1014:
case 969:
case 217:
case 650:
case 2634:
case 2809:
case 3685:
case 665:
case 808:
case 2181:
case 3735:
case 965:
case 3061:
case 3528:
case 719:
case 2307:
case 1012:
case 3447:
case 516:
case 3309:
case 413:
case 2229:
case 1195:
case 720:
case 3288:
case 1442:
case 1480:
case 3680:
case 978:
case 189:
case 4025:
case 815:
case 3638:
case 3135:
case 2697:
case 1272:
case 4044:
case 266:
case 2371:
case 3180:
case 3866:
case 2224:
case 3286:
case 2439:
case 61:
case 3641:
case 3549:
case 3662:
case 448:
case 807:
case 1826:
case 878:
case 199:
case 3931:
case 1563:
case 985:
case 3611:
case 4094:
case 917:
case 2601:
case 595:
case 2146:
case 3004:
case 1241:
case 3428:
case 961:
case 2552:
case 461:
case 2205:
case 1151:
case 3253:
case 1731:
case 1697:
case 1110:
case 1520:
case 263:
case 485:
case 2150:
case 3713:
case 2145:
case 2644:
case 3189:
case 2555:
case 1869:
case 3811:
case 1815:
case 2905:
case 3196:
case 634:
case 1623:
case 27:
case 1676:
case 2119:
case 2183:
case 3554:
case 1411:
case 2992:
case 1209:
case 3062:
case 2161:
case 3833:
case 3424:
case 723:
case 1893:
case 1703:
case 449:
case 940:
case 3594:
case 3797:
case 2169:
case 873:
case 718:
case 160:
case 2265:
case 1818:
case 1672:
case 1290:
case 539:
case 673:
case 1306:
case 3859:
case 1908:
case 986:
case 974:
case 3628:
case 1925:
case 71:
case 1202:
case 2089:
case 1450:
case 2880:
case 2908:
case 3856:
case 374:
case 2788:
case 344:
case 3698:
case 3208:
case 1723:
case 408:
case 2944:
case 271:
case 148:
case 684:
case 2972:
case 2863:
case 2953:
case 3107:
case 2772:
case 967:
case 2946:
case 656:
case 2666:
case 1350:
case 2746:
case 531:
case 2509:
case 2330:
case 3987:
case 2962:
case 3784:
case 42:
case 2074:
case 3085:
case 1739:
case 1150:
case 2837:
case 3933:
case 118:
case 1084:
case 1716:
case 3372:
case 3165:
case 863:
case 1421:
case 3670:
case 2391:
case 2913:
case 1989:
case 3716:
case 2057:
case 4046:
case 2272:
case 1710:
case 2800:
case 3750:
case 639:
case 1859:
case 842:
case 2853:
case 1668:
case 735:
case 415:
case 1673:
case 3199:
case 2421:
case 373:
case 988:
case 552:
case 616:
case 3603:
case 1077:
case 41:
case 3497:
case 2978:
case 1765:
case 435:
case 1504:
case 3994:
case 2866:
case 2117:
case 3531:
case 1630:
case 3211:
case 2678:
case 1385:
case 143:
case 3108:
case 3664:
case 1058:
case 2090:
case 1886:
case 3787:
case 3835:
case 319:
case 66:
case 3123:
case 1176:
case 945:
case 3336:
case 1548:
case 1153:
case 382:
case 3818:
case 2053:
case 4017:
case 1562:
case 1512:
case 1945:
case 2052:
case 1517:
case 514:
case 3052:
case 179:
case 2932:
case 2040:
case 1565:
case 830:
case 2936:
case 1537:
case 3689:
case 2096:
case 1919:
case 1800:
case 1372:
case 661:
case 2882:
case 1130:
case 423:
case 1220:
case 4064:
case 963:
case 3293:
case 2982:
case 2352:
case 3118:
case 3048:
case 2973:
case 826:
case 1816:
case 948:
case 3693:
case 2867:
case 3918:
case 3207:
case 3045:
case 1618:
case 3347:
case 2693:
case 3195:
case 3878:
case 2194:
case 2102:
case 2889:
case 1129:
case 902:
case 2895:
case 2656:
case 1953:
case 1492:
case 2431:
case 1600:
case 1308:
case 3917:
case 633:
case 575:
case 1489:
case 3843:
case 2585:
case 3212:
case 524:
case 34:
case 3855:
case 2255:
case 2776:
case 1331:
case 1247:
case 3480:
case 2733:
case 1927:
case 2379:
case 1316:
case 455:
case 2811:
case 1427:
case 2565:
case 3205:
case 444:
case 2823:
case 3830:
case 2952:
case 425:
case 2479:
case 1958:
case 3277:
case 2027:
case 3810:
case 2492:
case 3358:
case 1567:
case 2783:
case 1167:
case 3283:
case 3973:
case 1844:
case 886:
case 458:
case 72:
case 959:
case 784:
case 1994:
case 484:
case 614:
case 2285:
case 3551:
case 299:
case 605:
case 2896:
case 3872:
case 3216:
case 1554:
case 2244:
case 2610:
case 2188:
case 3133:
case 4060:
case 2167:
case 3919:
case 3605:
case 3409:
case 2076:
case 544:
case 122:
case 1038:
case 1578:
case 2065:
case 905:
case 1095:
case 151:
case 2690:
case 3841:
case 1227:
case 2831:
case 737:
case 1934:
case 872:
case 3172:
case 2186:
case 1298:
case 3845:
case 791:
case 2995:
case 3445:
case 849:
case 2841:
case 1708:
case 2002:
case 2763:
case 1389:
case 2751:
case 3370:
case 3386:
case 1900:
case 1841:
case 241:
case 3136:
case 3738:
case 2956:
case 2468:
case 2212:
case 1745:
case 1160:
case 794:
case 1422:
case 3890:
case 553:
case 644:
case 56:
case 2252:
case 1624:
case 799:
case 689:
case 2795:
case 2761:
case 1560:
case 2001:
case 4023:
case 2362:
case 358:
case 1643:
case 521:
case 35:
case 603:
case 443:
case 3957:
case 2805:
case 38:
case 1956:
case 2495:
case 3995:
case 533:
case 1907:
case 3012:
case 3492:
case 1509:
case 2742:
case 3096:
case 3213:
case 166:
case 3481:
case 1076:
case 272:
case 914:
case 24:
case 3998:
case 4012:
case 828:
case 22:
case 926:
case 1771:
case 305:
case 2343:
case 2239:
case 3489:
case 3074:
case 3984:
case 479:
case 108:
case 1932:
case 2580:
case 3156:
case 2787:
case 885:
case 0:
case 3965:
case 3646:
case 2780:
case 2083:
case 1356:
case 313:
case 3764:
case 1010:
case 1502:
case 2480:
case 491:
case 747:
case 2814:
case 3126:
case 864:
case 1918:
case 365:
case 509:
case 1617:
case 91:
case 2489:
case 2670:
case 3482:
case 1029:
case 3457:
case 3259:
case 1278:
case 434:
case 3585:
case 1638:
case 3228:
case 432:
case 766:
case 2542:
case 1640:
case 2870:
case 3520:
case 2075:
case 838:
case 727:
case 3947:
case 3024:
case 3382:
case 2581:
case 2143:
case 4027:
case 2812:
case 2453:
case 1357:
case 1793:
case 1858:
case 2504:
case 997:
case 1526:
case 1704:
case 3345:
case 578:
case 3718:
case 3819:
case 2753:
case 3178:
case 3622:
case 3879:
case 235:
case 1473:
case 3279:
case 290:
case 438:
case 1466:
case 2789:
case 904:
case 76:
case 1137:
case 49:
case 3642:
case 2157:
case 825:
case 3088:
case 2960:
case 853:
case 3970:
case 2687:
case 2325:
case 3805:
case 1786:
case 2155:
case 1081:
case 3244:
case 1657:
case 2979:
case 2941:
case 1576:
case 3512:
case 1423:
case 3601:
case 530:
case 984:
case 3412:
case 1639:
case 2785:
case 2473:
case 3479:
case 3465:
case 3218:
case 2884:
case 3812:
case 2562:
case 3826:
case 3505:
case 1761:
case 3264:
case 3912:
case 3371:
case 3898:
case 3387:
case 511:
case 1092:
case 3532:
case 1972:
case 2191:
case 2865:
case 3443:
case 1827:
case 3948:
case 2291:
case 1252:
case 3226:
case 450:
case 3572:
case 2695:
case 930:
case 1912:
case 2528:
case 240:
case 28:
case 1766:
case 1960:
case 1987:
case 3645:
case 1726:
case 2339:
case 2068:
case 1383:
case 3429:
case 3334:
case 92:
case 170:
case 1304:
case 2848:
case 2318:
case 1233:
case 557:
case 3142:
case 2584:
case 2699:
case 3724:
case 2918:
case 4073:
case 3502:
case 742:
case 1583:
case 183:
case 2358:
case 1997:
case 3766:
case 1482:
case 1694:
case 3644:
case 2663:
case 466:
case 1688:
case 942:
case 1432:
case 774:
case 3158:
case 228:
case 2705:
case 1205:
case 1814:
case 573:
case 1388:
case 1079:
case 1659:
case 2596:
case 3020:
case 3581:
case 836:
case 2885:
case 2017:
case 3816:
case 394:
case 550:
case 3749:
case 2748:
case 262:
case 2430:
case 824:
case 2775:
case 3613:
case 2233:
case 416:
case 3874:
case 1735:
case 3356:
case 3709:
case 2054:
case 3422:
case 4022:
case 2557:
case 3747:
case 1758:
case 653:
case 1880:
case 3792:
case 3333:
case 3851:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1685952002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,];
var gg_b = "1685952002/";

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
