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
case 483:
case 767:
case 461:
case 3393:
case 1080:
case 203:
case 973:
case 1845:
case 2269:
case 96:
case 3243:
case 3450:
case 3707:
case 3242:
case 1265:
case 2849:
case 1557:
case 177:
case 3660:
case 2216:
case 2332:
case 3906:
case 917:
case 1601:
case 3954:
case 294:
case 3507:
case 74:
case 2180:
case 3675:
case 2268:
case 157:
case 113:
case 71:
case 2480:
case 3461:
case 2347:
case 2967:
case 3603:
case 1628:
case 236:
case 3445:
case 2566:
case 1163:
case 1463:
case 2998:
case 878:
case 2719:
case 694:
case 361:
case 501:
case 714:
case 2625:
case 3800:
case 530:
case 3938:
case 3049:
case 858:
case 1241:
case 3605:
case 1713:
case 258:
case 2658:
case 1068:
case 3137:
case 4020:
case 3689:
case 910:
case 1016:
case 2386:
case 1097:
case 3442:
case 89:
case 3142:
case 3443:
case 3250:
case 1306:
case 2116:
case 3841:
case 355:
case 1513:
case 170:
case 7:
case 3777:
case 908:
case 2623:
case 278:
case 2622:
case 3304:
case 1992:
case 889:
case 3356:
case 1069:
case 3014:
case 760:
case 2544:
case 3865:
case 3511:
case 2634:
case 1837:
case 2814:
case 1696:
case 3991:
case 2335:
case 3711:
case 985:
case 2931:
case 595:
case 739:
case 2727:
case 803:
case 3672:
case 3694:
case 1141:
case 3569:
case 1514:
case 348:
case 2177:
case 1827:
case 3716:
case 934:
case 1973:
case 1328:
case 3302:
case 1146:
case 1446:
case 887:
case 5:
case 3516:
case 2921:
case 3597:
case 1287:
case 3444:
case 3144:
case 331:
case 3030:
case 1077:
case 1352:
case 2743:
case 300:
case 2742:
case 3996:
case 560:
case 3218:
case 2411:
case 3846:
case 2111:
case 1520:
case 4030:
case 280:
case 431:
case 3693:
case 400:
case 188:
case 3351:
case 122:
case 418:
case 524:
case 1905:
case 2647:
case 996:
case 2812:
case 3890:
case 2813:
case 1676:
case 1720:
case 1264:
case 645:
case 1301:
case 2277:
case 307:
case 567:
case 1396:
case 1317:
case 1866:
case 3952:
case 3953:
case 191:
case 1007:
case 949:
case 3780:
case 1818:
case 2550:
case 3929:
case 2982:
case 880:
case 769:
case 1902:
case 1290:
case 3928:
case 1639:
case 3373:
case 3394:
case 3372:
case 3057:
case 2635:
case 1340:
case 1187:
case 2561:
case 687:
case 51:
case 382:
case 2750:
case 2686:
case 3118:
case 1960:
case 2979:
case 3227:
case 202:
case 1748:
case 1975:
case 3166:
case 482:
case 815:
case 2358:
case 1951:
case 1749:
case 866:
case 2359:
case 730:
case 544:
case 287:
case 514:
case 3119:
case 1464:
case 3419:
case 1355:
case 3388:
case 1548:
case 2322:
case 1933:
case 3744:
case 2689:
case 2442:
case 2143:
case 2250:
case 2443:
case 358:
case 3169:
case 3469:
case 2577:
case 2605:
case 3820:
case 275:
case 3659:
case 2261:
case 3280:
case 3168:
case 2304:
case 1910:
case 1746:
case 2777:
case 378:
case 3197:
case 3065:
case 1590:
case 2688:
case 733:
case 1420:
case 598:
case 2991:
case 3527:
case 3634:
case 675:
case 1399:
case 3814:
case 2245:
case 1869:
case 478:
case 3926:
case 3041:
case 2511:
case 988:
case 1248:
case 2673:
case 1367:
case 3931:
case 196:
case 655:
case 2711:
case 458:
case 1398:
case 3335:
case 1787:
case 2243:
case 2242:
case 2150:
case 149:
case 119:
case 2862:
case 581:
case 2863:
case 2237:
case 303:
case 2392:
case 563:
case 2651:
case 1214:
case 49:
case 959:
case 3984:
case 3268:
case 1587:
case 3347:
case 2161:
case 2954:
case 489:
case 2660:
case 1679:
case 3333:
case 3681:
case 209:
case 3324:
case 3719:
case 1935:
case 1220:
case 3998:
case 1149:
case 172:
case 2048:
case 1331:
case 3967:
case 2939:
case 2049:
case 942:
case 1148:
case 1326:
case 3766:
case 3625:
case 261:
case 1045:
case 3063:
case 39:
case 1880:
case 1457:
case 1157:
case 1321:
case 173:
case 487:
case 763:
case 120:
case 1230:
case 1699:
case 3407:
case 3107:
case 3750:
case 1698:
case 147:
case 117:
case 153:
case 2244:
case 402:
case 3561:
case 1336:
case 1213:
case 1212:
case 2864:
case 1667:
case 2057:
case 913:
case 3983:
case 3982:
case 4064:
case 1385:
case 2166:
case 164:
case 2466:
case 1563:
case 1562:
case 2227:
case 302:
case 2305:
case 562:
case 425:
case 800:
case 1981:
case 3979:
case 3686:
case 1019:
case 2901:
case 3211:
case 2418:
case 1763:
case 3978:
case 1762:
case 1308:
case 818:
case 2119:
case 2419:
case 1018:
case 3359:
case 1415:
case 1115:
case 1684:
case 1807:
case 4087:
case 950:
case 1565:
case 1631:
case 1382:
case 2012:
case 1383:
case 2768:
case 2302:
case 140:
case 3624:
case 1430:
case 732:
case 248:
case 1570:
case 3477:
case 3537:
case 3325:
case 3742:
case 200:
case 1765:
case 2444:
case 108:
case 231:
case 480:
case 127:
case 3046:
case 315:
case 1113:
case 1413:
case 1626:
case 3737:
case 2769:
case 1770:
case 2692:
case 1877:
case 798:
case 533:
case 380:
case 618:
case 2427:
case 4046:
case 445:
case 1922:
case 2846:
case 3111:
case 466:
case 3812:
case 1379:
case 2890:
case 807:
case 2219:
case 3381:
case 1541:
case 3909:
case 600:
case 1958:
case 631:
case 3126:
case 2785:
case 976:
case 3348:
case 1705:
case 518:
case 775:
case 1920:
case 1235:
case 3298:
case 2024:
case 633:
case 1789:
case 3630:
case 2585:
case 2708:
case 2363:
case 2874:
case 1124:
case 956:
case 32:
case 755:
case 3349:
case 146:
case 2646:
case 2238:
case 3131:
case 2300:
case 1914:
case 1380:
case 42:
case 3092:
case 233:
case 1447:
case 1147:
case 460:
case 2536:
case 2176:
case 2476:
case 1573:
case 1133:
case 1432:
case 1433:
case 1572:
case 2942:
case 3717:
case 606:
case 1076:
case 1831:
case 386:
case 2033:
case 1611:
case 2254:
case 3997:
case 3968:
case 1772:
case 1794:
case 2736:
case 3824:
case 1110:
case 1751:
case 3226:
case 3501:
case 2579:
case 2439:
case 1560:
case 3095:
case 1435:
case 1135:
case 3198:
case 4004:
case 2687:
case 2778:
case 2945:
case 414:
case 2804:
case 3701:
case 2035:
case 3499:
case 31:
case 34:
case 1760:
case 709:
case 992:
case 1775:
case 3231:
case 3886:
case 3657:
case 2578:
case 1247:
case 3484:
case 1702:
case 3553:
case 1368:
case 1867:
case 1054:
case 1232:
case 2086:
case 1397:
case 2276:
case 911:
case 199:
case 941:
case 2950:
case 1486:
case 1186:
case 2365:
case 2583:
case 3753:
case 938:
case 3752:
case 1503:
case 1502:
case 2961:
case 3980:
case 3314:
case 314:
case 1899:
case 3729:
case 1210:
case 3179:
case 90:
case 3479:
case 27:
case 1481:
case 2255:
case 1222:
case 2101:
case 2600:
case 707:
case 3738:
case 401:
case 2966:
case 3825:
case 728:
case 1680:
case 2598:
case 281:
case 1259:
case 25:
case 3739:
case 3075:
case 2599:
case 782:
case 1883:
case 509:
case 4003:
case 369:
case 1311:
case 3538:
case 3209:
case 2919:
case 2798:
case 1001:
case 2584:
case 1556:
case 3706:
case 2452:
case 2875:
case 681:
case 4075:
case 663:
case 904:
case 1957:
case 2429:
case 2129:
case 135:
case 3881:
case 3313:
case 3236:
case 3648:
case 3312:
case 2390:
case 1756:
case 2428:
case 1878:
case 3554:
case 3182:
case 3183:
case 3482:
case 2296:
case 3907:
case 583:
case 254:
case 3330:
case 65:
case 2662:
case 1234:
case 1377:
case 330:
case 197:
case 1281:
case 2872:
case 2455:
case 854:
case 3089:
case 495:
case 2873:
case 2155:
case 3279:
case 1836:
case 1071:
case 3911:
case 2526:
case 2201:
case 1122:
case 1423:
case 3408:
case 3108:
case 232:
case 748:
case 718:
case 575:
case 3591:
case 1668:
case 2058:
case 437:
case 874:
case 3614:
case 3185:
case 3485:
case 1458:
case 1158:
case 1055:
case 3278:
case 555:
case 2531:
case 968:
case 3409:
case 2022:
case 2440:
case 2253:
case 2252:
case 2140:
case 2034:
case 1096:
case 632:
case 3859:
case 3977:
case 1930:
case 298:
case 3823:
case 3822:
case 4088:
case 1793:
case 2229:
case 3576:
case 3436:
case 2888:
case 1913:
case 3121:
case 395:
case 4089:
case 3421:
case 1809:
case 3282:
case 863:
case 3283:
case 2889:
case 3073:
case 881:
case 3357:
case 3094:
case 3072:
case 1593:
case 1434:
case 3858:
case 1134:
case 1574:
case 1592:
case 4005:
case 2196:
case 2417:
case 2117:
case 2496:
case 2944:
case 2805:
case 703:
case 10:
case 3778:
case 3945:
case 3804:
case 2198:
case 1099:
case 3687:
case 839:
case 3856:
case 3139:
case 3439:
case 824:
case 2095:
case 2167:
case 2501:
case 1854:
case 1495:
case 3438:
case 2657:
case 2886:
case 3578:
case 1195:
case 1806:
case 2320:
case 21:
case 644:
case 3779:
case 1098:
case 3035:
case 2199:
case 2499:
case 860:
case 82:
case 3664:
case 1839:
case 2184:
case 2728:
case 2615:
case 1456:
case 2553:
case 2835:
case 1404:
case 3782:
case 3783:
case 362:
case 4035:
case 502:
case 587:
case 1084:
case 3370:
case 1900:
case 1293:
case 3961:
case 2004:
case 193:
case 2980:
case 3406:
case 1838:
case 3895:
case 3365:
case 1343:
case 3582:
case 1342:
case 2771:
case 758:
case 3491:
case 2847:
case 3191:
case 3709:
case 2298:
case 844:
case 2832:
case 2555:
case 814:
case 1876:
case 2613:
case 1031:
case 2348:
case 2126:
case 1758:
case 3785:
case 3508:
case 1523:
case 2349:
case 1295:
case 2431:
case 2571:
case 2131:
case 515:
case 1941:
case 624:
case 3585:
case 168:
case 3708:
case 1723:
case 1345:
case 2810:
case 1558:
case 84:
case 2717:
case 1965:
case 1734:
case 3536:
case 3476:
case 3721:
case 2074:
case 333:
case 1256:
case 1891:
case 1361:
case 3937:
case 3300:
case 1970:
case 2969:
case 1474:
case 1534:
case 2517:
case 2968:
case 3736:
case 1627:
case 2824:
case 3521:
case 406:
case 6:
case 239:
case 3032:
case 3254:
case 3927:
case 1840:
case 1275:
case 3058:
case 3731:
case 2005:
case 176:
case 2911:
case 1009:
case 3201:
case 2408:
case 2108:
case 3455:
case 3872:
case 3364:
case 801:
case 1724:
case 2279:
case 2409:
case 3022:
case 1008:
case 2791:
case 3023:
case 1489:
case 695:
case 156:
case 2088:
case 1318:
case 3171:
case 2185:
case 498:
case 2614:
case 2485:
case 1251:
case 3726:
case 1405:
case 1524:
case 946:
case 1105:
case 4023:
case 2136:
case 2436:
case 1494:
case 1472:
case 1533:
case 1194:
case 2823:
case 2822:
case 1710:
case 1946:
case 2977:
case 4059:
case 3440:
case 121:
case 1547:
case 2859:
case 1733:
case 1510:
case 3196:
case 1871:
case 2283:
case 3889:
case 1203:
case 1202:
case 1747:
case 2121:
case 295:
case 1475:
case 1852:
case 363:
case 4025:
case 503:
case 2738:
case 2208:
case 1829:
case 3401:
case 3101:
case 1460:
case 2179:
case 2539:
case 1288:
case 2479:
case 1160:
case 37:
case 3567:
case 1078:
case 3802:
case 2209:
case 1735:
case 3798:
case 3919:
case 3271:
case 2060:
case 2478:
case 269:
case 2538:
case 1289:
case 2075:
case 2285:
case 192:
case 35:
case 3767:
case 2739:
case 1273:
case 1294:
case 2881:
case 589:
case 2648:
case 2313:
case 1082:
case 3390:
case 951:
case 3429:
case 4081:
case 2003:
case 1786:
case 2754:
case 141:
case 3584:
case 702:
case 2706:
case 45:
case 3453:
case 230:
case 1987:
case 787:
case 463:
case 3851:
case 1645:
case 138:
case 201:
case 3217:
case 354:
case 3662:
case 2554:
case 98:
case 2183:
case 2221:
case 2506:
case 47:
case 1402:
case 3128:
case 1403:
case 3006:
case 1529:
case 4039:
case 3316:
case 3867:
case 3054:
case 204:
case 3247:
case 1484:
case 2456:
case 351:
case 3898:
case 1553:
case 3368:
case 2525:
case 2404:
case 2104:
case 3369:
case 114:
case 3899:
case 2900:
case 3210:
case 2337:
case 2274:
case 2292:
case 1004:
case 293:
case 38:
case 4038:
case 954:
case 1752:
case 3503:
case 1528:
case 371:
case 3502:
case 2838:
case 3486:
case 3186:
case 2618:
case 2725:
case 591:
case 2963:
case 604:
case 97:
case 48:
case 1498:
case 3435:
case 2099:
case 471:
case 559:
case 1467:
case 1167:
case 3038:
case 3751:
case 963:
case 3949:
case 1501:
case 1231:
case 2854:
case 499:
case 2195:
case 326:
case 4054:
case 2806:
case 3775:
case 757:
case 11:
case 743:
case 3760:
case 693:
case 1701:
case 2098:
case 384:
case 3551:
case 2965:
case 446:
case 2734:
case 998:
case 3432:
case 3133:
case 3433:
case 3594:
case 3572:
case 588:
case 1092:
case 2891:
case 1284:
case 2361:
case 3147:
case 2204:
case 2174:
case 2493:
case 124:
case 1517:
case 522:
case 1968:
case 3772:
case 1824:
case 668:
case 1997:
case 465:
case 1740:
case 1916:
case 3076:
case 186:
case 1771:
case 3789:
case 2559:
case 2644:
case 3920:
case 1832:
case 1833:
case 1267:
case 1612:
case 3588:
case 1426:
case 893:
case 2523:
case 346:
case 316:
case 2295:
case 1131:
case 2941:
case 2026:
case 1:
case 770:
case 2759:
case 3788:
case 12:
case 1755:
case 1299:
case 2723:
case 268:
case 3677:
case 1576:
case 2533:
case 2173:
case 2855:
case 2172:
case 2473:
case 2194:
case 933:
case 3793:
case 4055:
case 2710:
case 3792:
case 3774:
case 1977:
case 3225:
case 137:
case 390:
case 1859:
case 2547:
case 1620:
case 2732:
case 1776:
case 3593:
case 3434:
case 722:
case 2871:
case 2036:
case 1283:
case 1357:
case 1072:
case 1094:
case 4071:
case 2203:
case 2990:
case 2747:
case 2202:
case 195:
case 1121:
case 3809:
case 1591:
case 3459:
case 3668:
case 2840:
case 906:
case 1005:
case 621:
case 4040:
case 705:
case 3423:
case 3122:
case 3123:
case 3422:
case 3281:
case 838:
case 1089:
case 2488:
case 2260:
case 3836:
case 3821:
case 841:
case 570:
case 1088:
case 2643:
case 2318:
case 2366:
case 1185:
case 2251:
case 523:
case 3669:
case 3458:
case 2637:
case 3158:
case 2524:
case 2105:
case 962:
case 2273:
case 2294:
case 1313:
case 2083:
case 3879:
case 1002:
case 3504:
case 1754:
case 3556:
case 856:
case 130:
case 397:
case 238:
case 1907:
case 2645:
case 3053:
case 3377:
case 3878:
case 1554:
case 1483:
case 1183:
case 1506:
case 3029:
case 2103:
case 2402:
case 2475:
case 2853:
case 2535:
case 4052:
case 3795:
case 3222:
case 3223:
case 759:
case 2829:
case 2160:
case 4029:
case 2078:
case 2828:
case 1209:
case 435:
case 2735:
case 3883:
case 2650:
case 1060:
case 169:
case 2289:
case 3595:
case 1538:
case 779:
case 1285:
case 543:
case 2151:
case 513:
case 1739:
case 3915:
case 2205:
case 1937:
case 2914:
case 468:
case 73:
case 1010:
case 3256:
case 826:
case 1476:
case 4026:
case 2133:
case 2594:
case 2826:
case 665:
case 2076:
case 585:
case 3350:
case 1033:
case 2611:
case 2286:
case 1254:
case 616:
case 2772:
case 3474:
case 3534:
case 3493:
case 3522:
case 106:
case 1690:
case 3031:
case 1491:
case 1024:
case 734:
case 540:
case 2789:
case 871:
case 1585:
case 1708:
case 3345:
case 527:
case 508:
case 1363:
case 1362:
case 899:
case 2788:
case 1509:
case 3759:
case 246:
case 1238:
case 2589:
case 851:
case 216:
case 1646:
case 3404:
case 1782:
case 3104:
case 2703:
case 3456:
case 304:
case 2247:
case 2898:
case 1276:
case 3839:
case 2006:
case 2486:
case 930:
case 1895:
case 1154:
case 1365:
case 3343:
case 3725:
case 1582:
case 3618:
case 2503:
case 393:
case 2369:
case 2899:
case 3666:
case 3293:
case 3337:
case 2210:
case 40:
case 3274:
case 2949:
case 749:
case 1139:
case 2560:
case 3581:
case 1341:
case 493:
case 3099:
case 2884:
case 1687:
case 1291:
case 1856:
case 30:
case 1804:
case 2607:
case 56:
case 1035:
case 3098:
case 547:
case 404:
case 2224:
case 1779:
case 969:
case 2039:
case 1438:
case 3854:
case 226:
case 3067:
case 3195:
case 341:
case 1584:
case 1875:
case 1452:
case 1453:
case 1240:
case 492:
case 2125:
case 2425:
case 174:
case 572:
case 3273:
case 3294:
case 235:
case 3083:
case 2879:
case 914:
case 4078:
case 2029:
case 3402:
case 1128:
case 3102:
case 1346:
case 3586:
case 2704:
case 1851:
case 3645:
case 1217:
case 1662:
case 1663:
case 2377:
case 2052:
case 297:
case 552:
case 3288:
case 3160:
case 2181:
case 17:
case 2481:
case 1799:
case 967:
case 2223:
case 1101:
case 1600:
case 438:
case 3852:
case 2680:
case 3175:
case 2259:
case 3661:
case 720:
case 717:
case 15:
case 1767:
case 747:
case 411:
case 1599:
case 3151:
case 2883:
case 91:
case 3289:
case 4083:
case 1803:
case 4082:
case 2001:
case 1440:
case 1034:
case 290:
case 1387:
case 321:
case 2017:
case 3547:
case 2225:
case 2930:
case 2307:
case 3021:
case 3710:
case 2792:
case 1229:
case 3494:
case 1641:
case 3172:
case 596:
case 3202:
case 2913:
case 3747:
case 2809:
case 3871:
case 1889:
case 4009:
case 2593:
case 476:
case 2592:
case 3510:
case 1496:
case 3733:
case 939:
case 1805:
case 986:
case 1455:
case 1894:
case 3319:
case 2697:
case 1155:
case 2071:
case 3009:
case 2123:
case 690:
case 3085:
case 3840:
case 2668:
case 3275:
case 421:
case 1059:
case 1670:
case 3817:
case 3896:
case 3637:
case 2158:
case 1665:
case 356:
case 4021:
case 2055:
case 3642:
case 1531:
case 1171:
case 3643:
case 2821:
case 3008:
case 1023:
case 423:
case 2420:
case 3837:
case 590:
case 3262:
case 3617:
case 1870:
case 1245:
case 3842:
case 1865:
case 1511:
case 980:
case 3339:
case 2248:
case 2897:
case 3441:
case 1694:
case 1672:
case 2816:
case 1673:
case 2367:
case 296:
case 2868:
case 2398:
case 819:
case 2932:
case 852:
case 2609:
case 2933:
case 765:
case 1976:
case 3016:
case 3097:
case 229:
case 1143:
case 1443:
case 3470:
case 3530:
case 2685:
case 2114:
case 1437:
case 63:
case 1577:
case 3068:
case 1137:
case 2947:
case 3712:
case 966:
case 175:
case 2384:
case 3069:
case 1014:
case 872:
case 323:
case 915:
case 1304:
case 2746:
case 2910:
case 3974:
case 3993:
case 716:
case 746:
case 3730:
case 1841:
case 696:
case 155:
case 2043:
case 1688:
case 3512:
case 413:
case 2220:
case 2764:
case 1445:
case 3463:
case 3162:
case 2149:
case 799:
case 2682:
case 649:
case 3715:
case 1603:
case 477:
case 2564:
case 834:
case 771:
case 2148:
case 1938:
case 3995:
case 987:
case 597:
case 4080:
case 161:
case 3391:
case 3515:
case 829:
case 2045:
case 2880:
case 2787:
case 1243:
case 1707:
case 2678:
case 3557:
case 219:
case 3080:
case 1393:
case 1862:
case 1863:
case 3904:
case 2214:
case 3956:
case 343:
case 357:
case 313:
case 652:
case 1161:
case 3400:
case 3757:
case 925:
case 1507:
case 83:
case 2986:
case 3376:
case 2679:
case 1906:
case 264:
case 620:
case 1466:
case 2562:
case 66:
case 936:
case 1227:
case 3748:
case 3975:
case 735:
case 3606:
case 673:
case 3371:
case 1118:
case 2763:
case 840:
case 2762:
case 810:
case 2308:
case 3464:
case 1119:
case 3164:
case 1388:
case 2018:
case 2415:
case 2066:
case 1887:
case 2684:
case 1656:
case 491:
case 797:
case 3951:
case 1604:
case 58:
case 3749:
case 653:
case 3818:
case 3246:
case 3638:
case 2457:
case 359:
case 2157:
case 273:
case 664:
case 391:
case 3007:
case 220:
case 107:
case 442:
case 885:
case 128:
case 3866:
case 2925:
case 2500:
case 2698:
case 1580:
case 253:
case 3340:
case 217:
case 1244:
case 3902:
case 2213:
case 2336:
case 1928:
case 1373:
case 1864:
case 1394:
case 2877:
case 1692:
case 640:
case 388:
case 610:
case 1351:
case 2741:
case 1127:
case 1427:
case 2959:
case 790:
case 1955:
case 847:
case 2922:
case 2378:
case 86:
case 820:
case 2379:
case 285:
case 3011:
case 1375:
case 3844:
case 2215:
case 627:
case 3146:
case 3446:
case 305:
case 2382:
case 2631:
case 1012:
case 3994:
case 4011:
case 1768:
case 958:
case 240:
case 3827:
case 210:
case 1716:
case 2430:
case 2570:
case 3514:
case 422:
case 2044:
case 148:
case 100:
case 2934:
case 2765:
case 208:
case 1030:
case 131:
case 1144:
case 3077:
case 978:
case 864:
case 1516:
case 2412:
case 2113:
case 3490:
case 546:
case 516:
case 2112:
case 3714:
case 1967:
case 2715:
case 189:
case 136:
case 2850:
case 823:
case 541:
case 2162:
case 870:
case 2463:
case 1324:
case 1998:
case 3935:
case 3764:
case 3045:
case 2391:
case 1063:
case 2652:
case 538:
case 2653:
case 1062:
case 4061:
case 1999:
case 1625:
case 1718:
case 643:
case 613:
case 657:
case 2629:
case 419:
case 1766:
case 3448:
case 4045:
case 2956:
case 2080:
case 103:
case 1310:
case 2845:
case 2904:
case 3214:
case 3061:
case 2557:
case 319:
case 1848:
case 3050:
case 1333:
case 1216:
case 1681:
case 1297:
case 472:
case 3986:
case 2400:
case 2100:
case 243:
case 1480:
case 592:
case 1347:
case 4042:
case 4043:
case 2843:
case 857:
case 3249:
case 1041:
case 2338:
case 2262:
case 2617:
case 3399:
case 2696:
case 3869:
case 650:
case 4037:
case 3420:
case 2640:
case 1335:
case 429:
case 1727:
case 3897:
case 2441:
case 2141:
case 2713:
case 576:
case 250:
case 3790:
case 3414:
case 1469:
case 2530:
case 3685:
case 2465:
case 3546:
case 2354:
case 329:
case 2671:
case 948:
case 3932:
case 918:
case 3609:
case 1744:
case 1116:
case 1497:
case 900:
case 1197:
case 3042:
case 556:
case 178:
case 1623:
case 768:
case 3746:
case 3910:
case 2992:
case 2974:
case 2993:
case 2069:
case 1544:
case 1659:
case 1280:
case 3037:
case 223:
case 1908:
case 1111:
case 2988:
case 605:
case 427:
case 180:
case 3877:
case 1830:
case 288:
case 3027:
case 222:
case 4044:
case 1985:
case 1647:
case 2905:
case 440:
case 859:
case 3215:
case 1812:
case 1813:
case 1633:
case 2989:
case 2301:
case 3430:
case 3570:
case 1477:
case 1177:
case 1537:
case 1624:
case 485:
case 842:
case 2973:
case 2328:
case 3811:
case 205:
case 2446:
case 3565:
case 975:
case 3383:
case 756:
case 3626:
case 2714:
case 1046:
case 115:
case 1921:
case 3412:
case 3113:
case 3413:
case 2691:
case 2353:
case 2352:
case 2077:
case 327:
case 955:
case 1325:
case 1743:
case 1742:
case 3019:
case 1857:
case 1211:
case 2606:
case 102:
case 2748:
case 453:
case 2975:
case 447:
case 3385:
case 3562:
case 3807:
case 2951:
case 593:
case 212:
case 738:
case 420:
case 1359:
case 3415:
case 473:
case 2464:
case 2164:
case 2355:
case 1978:
case 3762:
case 1322:
case 1745:
case 1087:
case 2396:
case 3699:
case 1761:
case 3321:
case 2638:
case 3157:
case 4019:
case 2639:
case 3212:
case 3667:
case 125:
case 2819:
case 1635:
case 347:
case 2340:
case 317:
case 2487:
case 642:
case 3500:
case 1407:
case 909:
case 464:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743048001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,];
var gg_b = "1743048001/";

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
